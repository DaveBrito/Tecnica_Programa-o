class SistemaPagamento:
    def processarPagamento(self, valor):
        print(f"Processando pagamento no valor de R${valor}")
        
class SistemaLogistica:
    def enviarProduto(self, destinatario):
        print(f"Enviando o produto para {destinatario}")
        
class SistemaNotificacao:
    def enviarEmail(self, destinatario, mensagem):
        print(f"Enviando e-mail para {destinatario}: {mensagem}")
        
class LojaOnline:
    def __init__(self):
        self.pagamento = SistemaPagamento()
        self.logistica = SistemaLogistica()
        self.notificacao = SistemaNotificacao()
        
    def RealizarComprar(self, produto, destinatario):
        self.pagamento.processarPagamento(produto['preco'])
        self.logistica.enviarProduto(destinatario)
        self.notificacao.enviarEmail(destinatario, f"Seu pedido {produto['nome']} foi enviado")
        
        
loja = LojaOnline()

produto = {
    'nome' : "Camiseta",
    'preco' : 49.99
}

destinatario = "joaoao@gmail.com"

loja.RealizarComprar(produto, destinatario)