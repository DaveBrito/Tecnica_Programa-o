class SistemaPagamento():
    def processoPagamento(valor, mensagem):
        print(f"Processando pagamento no valor de R${mensagem}")
        
        
class SistemaLogistica():
    def enviarProduto(destinatario):
        print(f"Enviar Produto para {destinatario}")
        
        
class SistemaNotificacao():
    def enviarEmail(destinatario, mensagem):
        print(f"Enviado e-mail para {destinatario}: {mensagem}")
        
class LojaOnline():
    def __init__(self, pagamento, logistica, notificacao):
        self.pagamento = SistemaPagamento()
        self.logistica = SistemaLogistica()
        self.notificacao = SistemaNotificacao()
        
    def RealizarComprar(self, produto, destinatario):
        self.produto = 