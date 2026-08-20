/*
> Crie um carinho de compras com lista de produtos onde cada produto tem um nome e preco:
> Calcule o total do carinho
*/


 const carrinho = [
    { nome: "Tenis", preco: 99},
    { nome: "Calca Jeans", preco: 79},
    { nome: "Camiseta", preco: 60},
 ]

 /*
 let totalCarinho = 0;

 carrinho.forEach((produto) => {
    totalCarinho += produto.preco
 })

 console.log(`O total do seu carrinho e: ${totalCarinho}`)
*/

 //-----------------------------------------------------------

 function calcularTotalCarrinho(carrinho) {
    let total = 0;
    let totalProdutos = carrinho.length;

    carrinho.forEach((produto) => {
        total += produto.preco
    })

    return `Seu carinho tem ${totalProdutos} itens e o total do carrinho ficou: ${total}`
 }


 const totalCarrinho = calcularTotalCarrinho(carrinho)

 console.log(totalCarrinho)