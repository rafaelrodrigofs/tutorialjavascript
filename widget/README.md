# 🗓️ DatePicker Widget Moderno

Um widget de seleção de datas compacto, moderno e elegante com suporte a intervalos de datas e alta performance.

## ✨ Características

- **Design Moderno**: Interface limpa com gradientes verde/laranja
- **Alta Performance**: Sem backdrop-filter pesado, visualização inline
- **Compacto**: Tamanho otimizado para integração
- **Fonte Inter**: Tipografia moderna e limpa
- **Seleção de Intervalo**: Clique em duas datas para criar períodos
- **Animações Suaves**: Transições rápidas e fluidas
- **Responsivo**: Funciona em diferentes tamanhos de tela
- **Eficiente**: Seleção de mês integrada ao calendário (sem modal)

## 🎨 Visual

- **Cores**: Gradiente verde/laranja (#60bb51 → #f89f32)
- **Performance**: Sem backdrop-filter para melhor desempenho
- **Animações**: Transform, scale e shadow em hover otimizados
- **Tipografia**: Inter font family
- **Tamanho**: 280px de largura máxima

## 🚀 Como Usar

### 1. Incluir os arquivos

```html
<link rel="stylesheet" href="styles.css">
<script src="script.js"></script>
```

### 2. HTML básico

```html
<div class="datepicker-container">
    <div class="input-wrapper">
        <input type="text" class="date-input" readonly>
        <svg class="calendar-icon">...</svg>
    </div>
    <div class="calendar-dropdown">
        <!-- Estrutura do calendário -->
    </div>
</div>
```

### 3. Eventos personalizados

```javascript
// Escutar seleção de intervalo
window.addEventListener('dateRangeSelected', (event) => {
    console.log(event.detail.start, event.detail.end);
});

// Escutar seleção de data única
window.addEventListener('dateSelected', (event) => {
    console.log(event.detail.date);
});
```

## 📁 Estrutura de Arquivos

```
├── index.html      # Exemplo de uso
├── styles.css      # Estilos otimizados
├── script.js       # Lógica JavaScript
└── README.md       # Esta documentação
```

## 🎯 Funcionalidades

- ✅ Seleção de data única
- ✅ Seleção de intervalo de datas
- ✅ Navegação entre meses (ou anos na visualização de mês)
- ✅ Seleção de mês inline (sem modal)
- ✅ Botões Limpar/Aplicar
- ✅ Formatação brasileira (DD/MM/AAAA)
- ✅ API de eventos customizados
- ✅ Performance otimizada

## ⚡ Melhorias de Performance

- **Sem backdrop-filter**: Removido para melhor performance em dispositivos móveis
- **Modal substituído**: Seleção de mês agora é inline no próprio calendário
- **Animações otimizadas**: Transições mais leves e rápidas
- **Menos DOM**: Estrutura HTML simplificada

## 🎮 Como Funciona

1. **Clique no input**: Abre/fecha o calendário
2. **Clique no título do mês**: Troca para visualização de meses
3. **Selecione um mês**: Volta automaticamente para o calendário
4. **Navegação**: Setas navegam meses (ou anos na visualização de mês)
5. **Seleção de datas**: Clique para data única, dois cliques para intervalo

## 💡 Personalização

Cores principais podem ser alteradas no CSS:

```css
/* Cores do gradiente */
background: linear-gradient(135deg, #60bb51, #f89f32);

/* Cor principal */
color: #60bb51;

/* Transparências otimizadas */
background: rgba(255, 255, 255, 0.98);
```

---

Desenvolvido com ❤️ para ser moderno, compacto, elegante e **super rápido**!