//Subsistema 1
class SistemaPagamento{
    processoPagamento(valor){
        console.log(`Processando pagamento no valor de R${valor}`);

    }
}

//Subsistema 2

class SistemaLogistica{
    enviarProduto(destinatario){
        console.log(`Enviar Produto para ${destinatario}`);

    }
}

//Subsistema 3
class SistemaNotificacao{
    enviarEmail(destinatario, mensagem){
        console.log(`Enviando e-mail para ${destinatario}: ${mensagem}`);

    }
}

//Fachada(Façade)
class LojaOnline{
    constructor(){
        this.pagamento = new SistemaPagamento();
        this.logistica = new SistemaLogistica();
        this.notificacao = new SistemaNotificacao();

    }

    realizarCompra(produto, destinatario){
        this.pagamento.processoPagamento(produto.preco);
        this.logistica.enviarProduto(destinatario);
        this.notificacao.enviarEmail(destinatario, `Seu pedido de ${produto.nome} foi enviado.`);

    }
}


//Cliente#############################################


const loja = new LojaOnline();

const produto = {
    nome : "Camiseta",
    preco: 49.99
};

const destinatario = "jaoao@gmail.com";
loja.realizarCompra(produto, destinatario);