class FabricaFlyweight:
    def __init__(self):
        self.flyweights = {}

    def obterflyweight(self, codigo):
        if not self.flyweights.get(codigo):
            self.flyweights[codigo] = ProdutoFlyweight(codigo)
        return self.flyweights[codigo]

class ProdutoFlyweight:
    def __init__(self, codigo):
        self.codigo = codigo

    def exibirDetalhes(self, nome, preco):
        print(f"Produto {nome}, Preço R$ {preco}, Código: {self.codigo}")

class Cliente:
    def __init__(self):
        self.FabricaFlyweight = FabricaFlyweight()
        self.carrinho = []

    def adicionarProduto(self, codigo, nome, preco):
        flyweight = self.FabricaFlyweight.obterflyweight(codigo)
        self.carrinho.append({'flyweight': flyweight, 'nome': nome, 'preco': preco})

    def exibirCarrinho(self):
        print("Itens do Carrinho:")
        for item in self.carrinho:
            item['flyweight'].exibirDetalhes(item['nome'], item['preco'])

cliente = Cliente()
cliente.adicionarProduto("001", "Camiseta", 39.90)
cliente.adicionarProduto("002", "Calça", 19.90)
cliente.adicionarProduto("001", "Camiseta", 39.20)
cliente.exibirCarrinho()
