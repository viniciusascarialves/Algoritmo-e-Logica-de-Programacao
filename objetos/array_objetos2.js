


 const carrinho = [
    { nome: "Tenis", preco: 99},
    { nome: "Calca Jeans", preco: 79},
    { nome: "Camiseta", preco: 60},
 ]

 let totalCarinho = 0;

 carrinho.forEach((produto) => {
    totalCarinho += produto.preco
 })

 console.log(`O total do seu carrinho e: ${totalCarinho}`)