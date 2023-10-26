class Produto:
    def __init__(self, nome, preco):
        self.nome = nome
        self.preco = preco

    def exibir(self):
        print(f"Produto: {self.nome}, Preço: {self.preco:.2f}")

class ProxyProduto:
    def __init__(self, produto):
        self.produto = produto

    def exibirDetalhes(self):
        print("Aguardando Autenticação...")
        self.autenticar()
        self.produto.exibir()

    def autenticar(self):
        print("Autenticando Usuário...")
        print("Usuário Autenticado com Sucesso...")

produto1 = Produto("Camiseta", 39.90)
proxyproduto = ProxyProduto(produto1)
proxyproduto.exibirDetalhes()
