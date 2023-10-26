//Objeto Real - Classe Produto
class Produto{
  constructor(nome, preco){
    this.nome = nome;
    this.preco = preco;
  }

  exibirDetalhes(){
    console.log(`Produto: ${this.nome}, Preco: ${this.preco.toFixed(2)}`);
  }
}
//FAZER OS 3 EM PY

//Proxy - Classe Produto
class ProxyProduto{
  constructor(produto){
    this.produto = produto;
  }

  exibirDetalhes(){
    console.log(`Aguardando autenticacao...`);
    this.autenticar();
    this.produto.exibirDetalhes();
  }


  autenticar(){
    console.log(`Autenticando usuario....`);
    //Logica de autenticacao aqui.....
    console.log(`Ususario autenticado com sucesso...`);
  }
}



//Cliente - Uso do Proxy
const produto1 = new Produto("Camiseta", 39.90);
const proxyProduto = new ProxyProduto(produto1);
proxyProduto.exibirDetalhes();