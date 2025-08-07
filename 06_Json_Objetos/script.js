/* Dentro do codigo do javascript  */

const produto1 = {
    nome : "Computador",
    preco : 3000.0,
    "due-date" : "2025-04-15"
}

const produto2 = {
    nome : "Monitor",
    preco : 4000,
    "due-date" : "2025-04-15"
}

const obj = {
    id: 53,
    date: "2021-05-05",
    itens: [
        {
            descrição: "Celular",
            price: 1499.99,
            quantity: 1
        },
        {
            descrição: "Computador",
            price: 1499.99,
            quantity: 2
        },
        {
            descrição: "Monitor",
            price: 1499.99,
            quantity: 3
        }
    ],
    client: {
        name: "Maria",
        email: "maria@maria.com",
        active: true
    }
}

console.groupCollapsed("JSON")

console.table(produto1);
console.table(produto2);
console.table(obj);


const prices = obj.itens.map(item => item.price);

console.table(prices);

console.groupEnd();

document.getElementById('arquivoJson').addEventListener('change', function(event) {
  const arquivo = event.target.files[0];

  if (arquivo) {
    const leitor = new FileReader();

    leitor.onload = function(e) {
      try {
        const conteudo = e.target.result; // conteúdo do arquivo como string
        const json = JSON.parse(conteudo); // transforma em objeto
        
        json.forEach(pedido => {
            pedido.itens.forEach(produtos => {
                console.log("Produto:", produtos.produto)
            });
        });
      } catch (erro) {
        console.error("❌ Erro ao ler JSON:", erro.message);
      }
    };

    leitor.readAsText(arquivo);
  }
});

/* 
const pedidos = JSON.parse(jsonPedidos);

console.log(pedidos)
 */



