/**
 * DatePicker Widget - JavaScript
 * Widget de seleção de datas e intervalos de datas
 */

class DatePicker {
    constructor() {
        this.currentDate = new Date();
        this.selectedDate = new Date();
        this.startDate = null;
        this.endDate = null;
        this.tempMonth = this.currentDate.getMonth();
        this.tempYear = this.currentDate.getFullYear();
        this.isCalendarOpen = false;
        this.isMonthView = false;
        
        // Nomes dos meses em português
        this.monthNames = [
            'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
            'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
        ];
        
        this.monthNamesShort = [
            'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun',
            'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'
        ];
        
        this.dayNames = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
        
        this.init();
    }

    /**
     * Inicializa o datepicker
     */
    init() {
        this.bindEvents();
        this.updateCalendar();
        // Inicializa SEM data selecionada (startDate = null), mas mostra data atual no input
        // startDate e endDate permanecem null - usuário escolhe ao clicar
        this.updateDateInput();
        // Destaca a data atual no calendário (visual apenas)
        this.highlightToday();
        // Calendário inicia fechado
        this.closeCalendar();
    }

    /**
     * Vincula todos os eventos do componente
     */
    bindEvents() {
        // Clique no input para abrir/fechar calendário
        document.querySelector('.input-wrapper').addEventListener('click', () => {
            this.toggleCalendar();
        });

        // Clique fora do calendário para fechar
        document.addEventListener('click', (e) => {
            // Não fechar se estiver transitioning entre visualizações ou se clicou em elementos do calendário
            if (!e.target.closest('.datepicker-container') && 
                !e.target.classList.contains('month-option') &&
                this.isCalendarOpen) {
                this.closeCalendar();
            }
        });

        // Botão voltar (mês ou ano dependendo da visualização)
        document.querySelector('.nav-btn:first-child').addEventListener('click', () => {
            if (this.isMonthView) {
                this.currentDate.setFullYear(this.currentDate.getFullYear() - 1);
            } else {
            this.currentDate.setMonth(this.currentDate.getMonth() - 1);
            }
            this.updateCalendar();
        });

        // Botão avançar (mês ou ano dependendo da visualização)
        document.querySelector('.nav-btn:last-child').addEventListener('click', () => {
            if (this.isMonthView) {
                this.currentDate.setFullYear(this.currentDate.getFullYear() + 1);
            } else {
            this.currentDate.setMonth(this.currentDate.getMonth() + 1);
            }
            this.updateCalendar();
        });

        // Event listener unificado para clique na grid (dias ou meses)
        document.querySelector('.calendar-grid').addEventListener('click', (e) => {
            if (this.isMonthView && e.target.classList.contains('month-option')) {
                // Clique em um mês
                this.selectMonth(parseInt(e.target.dataset.month));
            } else if (!this.isMonthView && e.target.classList.contains('day-cell') && !e.target.classList.contains('day-header')) {
                // Clique em um dia
                this.selectDate(e.target);
            }
        });

        // Clique no título do mês para trocar visualização
        document.querySelector('.month-year').addEventListener('click', () => {
            this.toggleMonthView();
        });

        // Botão Limpar
        document.querySelector('.btn-clear').addEventListener('click', () => {
            this.clearSelection();
        });

        // Botão Aplicar
        document.querySelector('.btn-apply').addEventListener('click', () => {
            this.applySelection();
            this.closeCalendar();
        });
    }

    /**
     * Atualiza o calendário completo
     */
    updateCalendar() {
        // Preserva o estado de abertura do calendário
        const wasOpen = this.isCalendarOpen;
        
        this.updateMonthYear();
        if (this.isMonthView) {
            this.generateMonthGrid();
        } else {
        this.generateCalendarDays();
        this.updateCalendarHighlight();
        }
        
        // Restaura o estado de abertura se necessário
        if (wasOpen && !this.isCalendarOpen) {
            this.ensureCalendarOpen();
        }
    }

    /**
     * Atualiza o título do mês/ano
     */
    updateMonthYear() {
        const monthYear = document.querySelector('.month-year span');
        if (this.isMonthView) {
            monthYear.textContent = `Selecionar Mês`;
        } else {
        monthYear.textContent = `${this.monthNames[this.currentDate.getMonth()]} ${this.currentDate.getFullYear()}`;
        }
    }

    /**
     * Gera os dias do calendário
     */
    generateCalendarDays() {
        const grid = document.querySelector('.calendar-grid');
        
        // Restaura o layout original da grid para 7 colunas (dias da semana)
        grid.style.gridTemplateColumns = 'repeat(7, 1fr)';
        grid.style.gap = '3px';
        
        // Limpa completamente o grid
        grid.innerHTML = '';
        
        // Adiciona os cabeçalhos dos dias da semana
        this.dayNames.forEach(day => {
            const dayHeader = document.createElement('span');
            dayHeader.className = 'day-header';
            dayHeader.textContent = day;
            grid.appendChild(dayHeader);
        });
        


        const firstDay = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1);
        const startDate = new Date(firstDay);
        
        // Ajusta para começar no domingo da semana
        startDate.setDate(firstDay.getDate() - firstDay.getDay());

        // Gera 42 dias (6 semanas)
        for (let i = 0; i < 42; i++) {
            const currentDay = new Date(startDate);
            currentDay.setDate(startDate.getDate() + i);
            
            const dayCell = document.createElement('span');
            dayCell.className = 'day-cell';
            dayCell.textContent = currentDay.getDate();
            
            // Marca dias de outros meses
            if (currentDay.getMonth() !== this.currentDate.getMonth()) {
                dayCell.classList.add('other-month');
            }
            
            // Armazena a data no elemento
            dayCell.dataset.date = currentDay.toISOString().split('T')[0];
            
            grid.appendChild(dayCell);
        }
        
        // Destaca a data atual após gerar o calendário
        this.highlightToday();
    }

    /**
     * Seleciona uma data e gerencia o range
     */
    selectDate(dayElement) {
        const clickedDate = new Date(dayElement.dataset.date);
        
        // Se não há data de início ou se já temos um range completo, inicia novo range
        if (!this.startDate || (this.startDate && this.endDate)) {
            this.startDate = clickedDate;
            this.endDate = null;
        } else {
            // Se a data clicada é anterior à data de início, troca as posições
            if (clickedDate < this.startDate) {
                this.endDate = this.startDate;
                this.startDate = clickedDate;
            } else {
                this.endDate = clickedDate;
            }
        }
        
        // Atualiza o visual do calendário
        this.updateCalendarHighlight();
        
        // Atualiza o input
        this.updateDateInput();
    }

    /**
     * Atualiza o campo de input com as datas selecionadas
     */
    updateDateInput() {
        const input = document.querySelector('.date-input');
        
        if (this.startDate && this.endDate) {
            // Range completo
            const startFormatted = this.formatDate(this.startDate);
            const endFormatted = this.formatDate(this.endDate);
            input.value = `${startFormatted} - ${endFormatted}`;
        } else if (this.startDate) {
            // Apenas data de início
            const startFormatted = this.formatDate(this.startDate);
            input.value = `${startFormatted} - ${startFormatted}`;
        } else {
            // Nenhuma data selecionada - mostra data atual
            const today = this.formatDate(new Date());
            input.value = `${today} - ${today}`;
        }
    }

    /**
     * Atualiza o destaque visual do calendário
     */
    updateCalendarHighlight() {
        // Remove todas as classes de highlight (mas preserva 'today')
        document.querySelectorAll('.day-cell').forEach(cell => {
            cell.classList.remove('selected', 'range-start', 'range-end', 'in-range');
        });
        
        if (!this.startDate) return;
        
        // Destaca todas as células do calendário
        document.querySelectorAll('.day-cell').forEach(cell => {
            if (cell.classList.contains('day-header')) return;
            
            const cellDate = new Date(cell.dataset.date);
            
            if (this.isSameDay(cellDate, this.startDate)) {
                if (this.endDate && this.isSameDay(this.startDate, this.endDate)) {
                    // Mesma data para início e fim
                    cell.classList.add('selected');
                } else {
                    // Data de início
                    cell.classList.add('range-start');
                }
            } else if (this.endDate && this.isSameDay(cellDate, this.endDate)) {
                // Data de fim
                cell.classList.add('range-end');
            } else if (this.endDate && cellDate > this.startDate && cellDate < this.endDate) {
                // Data no meio do range
                cell.classList.add('in-range');
            } else if (!this.endDate && this.isSameDay(cellDate, this.startDate)) {
                // Apenas data de início selecionada
                cell.classList.add('selected');
            }
        });
        
        // Garante que a data atual permaneça destacada
        this.highlightToday();
    }

    /**
     * Formata uma data no padrão brasileiro DD/MM/AAAA
     */
    formatDate(date) {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }

    /**
     * Verifica se duas datas são do mesmo dia
     */
    isSameDay(date1, date2) {
        return date1.getDate() === date2.getDate() &&
               date1.getMonth() === date2.getMonth() &&
               date1.getFullYear() === date2.getFullYear();
    }

    /**
     * Destaca a data atual no calendário (independente da seleção)
     */
    highlightToday() {
        const today = new Date();
        
        // Remove destaques anteriores de "hoje"
        document.querySelectorAll('.day-cell').forEach(cell => {
            cell.classList.remove('today');
        });
        
        // Destaca a data atual se estiver visível no mês atual
        document.querySelectorAll('.day-cell').forEach(cell => {
            if (cell.classList.contains('day-header')) return;
            
            const cellDate = new Date(cell.dataset.date);
            if (this.isSameDay(cellDate, today)) {
                cell.classList.add('today');
            }
        });
    }



    /**
     * Alterna entre visualização de calendário e seleção de mês
     */
    toggleMonthView() {
        this.isMonthView = !this.isMonthView;
        this.updateCalendar();
    }

    /**
     * Gera a grid de meses no lugar do calendário
     */
    generateMonthGrid() {
        const grid = document.querySelector('.calendar-grid');
        
        // Muda o layout da grid para 3 colunas para os meses (4 linhas)
        grid.style.gridTemplateColumns = 'repeat(4, 1fr)';
        grid.style.gap = '8px';
        grid.style.marginBottom = '16px';
        
        // Limpa o grid
        grid.innerHTML = '';
        
        // Adiciona título do ano
        const yearHeader = document.createElement('div');
        yearHeader.className = 'year-header';
        yearHeader.textContent = this.currentDate.getFullYear();
        grid.appendChild(yearHeader);
        
        // Gera os meses em grid 3x4
        this.monthNamesShort.forEach((month, index) => {
            const monthCell = document.createElement('div');
            monthCell.className = 'month-option';
            monthCell.dataset.month = index;
            monthCell.textContent = month;
            
            // Destaca o mês atual
            if (index === this.currentDate.getMonth()) {
                monthCell.classList.add('selected');
            }
            
            grid.appendChild(monthCell);
        });
        

    }

    /**
     * Seleciona um mês e volta para o calendário
     */
    selectMonth(monthIndex) {
        this.currentDate.setMonth(monthIndex);
        this.isMonthView = false;
        this.updateCalendar();
        // Garante que o calendário permaneça aberto com um pequeno delay
        setTimeout(() => {
            this.ensureCalendarOpen();
        }, 10);
    }

    /**
     * Limpa a seleção de datas e volta para o mês atual
     */
    clearSelection() {
        // Limpa a seleção
        this.startDate = null;
        this.endDate = null;
        
        // Volta para o mês atual
        this.currentDate = new Date();
        
        // Atualiza todo o calendário para mostrar o mês atual
        this.updateCalendar();
        this.updateDateInput();
    }

    /**
     * Aplica/confirma a seleção atual
     */
    applySelection() {
        // Log para debugging
        if (this.startDate && this.endDate) {
            console.log('Range selecionado:', {
                inicio: this.formatDate(this.startDate),
                fim: this.formatDate(this.endDate)
            });
        } else if (this.startDate) {
            console.log('Data única selecionada:', this.formatDate(this.startDate));
        }
        
        // Feedback visual moderno para o usuário
        if (this.startDate && this.endDate) {
            // Dispara evento customizado para integração
            window.dispatchEvent(new CustomEvent('dateRangeSelected', {
                detail: {
                    start: this.formatDate(this.startDate),
                    end: this.formatDate(this.endDate),
                    startDate: this.startDate,
                    endDate: this.endDate
                }
            }));
            
            // Opcional: feedback visual
            console.log(`✅ Período selecionado: ${this.formatDate(this.startDate)} até ${this.formatDate(this.endDate)}`);
        } else if (this.startDate) {
            window.dispatchEvent(new CustomEvent('dateSelected', {
                detail: {
                    date: this.formatDate(this.startDate),
                    dateObject: this.startDate
                }
            }));
            
            console.log(`✅ Data selecionada: ${this.formatDate(this.startDate)}`);
        } else {
            console.log('ℹ️ Nenhuma data selecionada');
        }
    }

    /**
     * Retorna as datas selecionadas (útil para integração)
     */
    getSelectedDates() {
        return {
            startDate: this.startDate,
            endDate: this.endDate,
            formatted: {
                start: this.startDate ? this.formatDate(this.startDate) : null,
                end: this.endDate ? this.formatDate(this.endDate) : null
            }
        };
    }

    /**
     * Garante que o calendário permaneça aberto
     */
    ensureCalendarOpen() {
        const calendar = document.querySelector('.calendar-dropdown');
        if (!calendar.classList.contains('active')) {
            calendar.classList.add('active');
        }
        this.isCalendarOpen = true;
    }

    /**
     * Abre o calendário
     */
    openCalendar() {
        const calendar = document.querySelector('.calendar-dropdown');
        calendar.classList.add('active');
        this.isCalendarOpen = true;
        this.updateCalendarHighlight();
    }

    /**
     * Fecha o calendário
     */
    closeCalendar() {
        const calendar = document.querySelector('.calendar-dropdown');
        calendar.classList.remove('active');
        this.isCalendarOpen = false;
        // Volta para visualização de dias ao fechar
        if (this.isMonthView) {
            this.isMonthView = false;
            this.updateCalendar();
        }
    }

    /**
     * Alterna entre abrir e fechar o calendário
     */
    toggleCalendar() {
        if (this.isCalendarOpen) {
            this.closeCalendar();
        } else {
            this.openCalendar();
        }
    }
}

// Inicializa o datepicker quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    // Inicializa automaticamente se encontrar o container
    if (document.querySelector('.datepicker-container')) {
        new DatePicker();
    }
});

// Exporta a classe para uso modular (se necessário)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DatePicker;
}