/*
 > Crie uma lista de contatos onde deve ter o nome da pessoa e o telefone
 > Como encontrar um nome dentro da lista de contatos pesquisando pelo nome?
 */

 const contatos = [
    { nome: "Matheus", telefone: "99910000" },
    { nome: "Vinicius", telefone: "8210000" },
    { nome: "Jose", telefone: "919110000" },
 ]

 const nome = "Vinicius";
 const contatoPessoa = contatos.find ((contato) => {
    return contato.nome === nome
 })
 

//----------------------------------------------------------


function buscaContato(nomePessoa, listaContatos){
    if (!nomePessoa) {
        console.log("O nome da pessoa e obrigatoria!");
        return "";
    }

    const contatoPessoa = listaContatos.find((contato) => {
        return contato.nome === nomePessoa
    })

    if (!contatoPessoa){
        return "Ops parece que essa pessoa nao esta na lista de contatos!"
    }

    return `O ${nomePessoa} tem o telefone: ${contatoPessoa.telefone}`;
}


const pessoa1 = buscaContato("Vinicius", contatos)

console.log(pessoa1)