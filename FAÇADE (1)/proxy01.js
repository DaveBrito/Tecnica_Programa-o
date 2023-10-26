//Objeto Real1
class ServicoReal{
  executar(){
    console.log(`Executando Servico Real`);
  }
}


//Proxy
class ProxyServico{
  constructor(){
    this.servicoReal = new ServicoReal();
  }

  executar(){
    console.log(`Antes de executar do servico`);
    this.servicoReal.executar();
    console.log(`Depois de executar de servico`);
  }
}


//Cliente - USO DO PROXY
const proxy = new ProxyServico();
proxy.executar();