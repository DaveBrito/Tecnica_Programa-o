class SistemaAutenticacao {
    autenticarUsuario(usuario, senha) {
        console.log(`Autenticacao do usuario ${usuario}....`);

        if (usuario === "maria@gmail.com" && senha === "maria24") {
            console.log("Acesso Permitido");
            console.log("-----------------------");
            return true;
        } else if (usuario !== "" && senha !== "") {
            console.log("Acesso Negado");
            console.log("-----------------------");
        } else {
            return false;
        }
    }
}

class SistemaCadastro {
    cadastrarUsuario(usuario) {
        console.log("-----------------------");
        console.log(`Cadastrando o usuario ${usuario}....`);

        if (usuario === "maria@gmail.com") {
            console.log(`Bem Vindo(a)...`);
            console.log("-----------------------");
            return true;
        } else if (usuario !== "") {
            console.log(`Usuario Não Encontrado`);
        } else {
            return false;
        }
    }
}

class SistemaPedido {
    criarPedido(pedido, usuario) {
        console.log(`Criando o pedido ${pedido}....`);

        if (pedido === 'Camisa') {
            console.log('Produto Encontrado');
            return 'Camisa';
        } else if (usuario !== "") {
            console.log('Produto Não Encontrado');
            return false;
        } else {
            return false;
        }
    }
}

class AtendimentoCliente {
    constructor() {
        this.autenticacao = new SistemaAutenticacao();
        this.cadastro = new SistemaCadastro();
        this.pedido = new SistemaPedido();
    }

    realizarAtendimento(usuario, senha, produto) {
        if (this.autenticacao.autenticarUsuario(usuario, senha)) {
            const pedidoID = this.pedido.criarPedido(produto, usuario); // Passar 'usuario' como argumento
            this.cadastro.cadastrarUsuario(usuario);
            console.log(`Atendimento realizado com sucesso. Pedido ID : ${pedidoID}`);
        } else {
            console.log(`Falha na autenticação. Atendimento não realizado`);
        }
    }
}

const atendimento = new AtendimentoCliente();

const usuario = "maria@gmail.com";
const senha = "maria24";
const produto = "Camisa";

atendimento.realizarAtendimento(usuario, senha, produto);
