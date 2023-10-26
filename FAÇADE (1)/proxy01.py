#Objeto Real 1
class ServicoReal:
    def executar(self):
        print("Método executar do Serviço Real.")


#Proxy
class ProxyServico:
    def executar(self, servicoReal):
        print("Antes de executar do serviço")
        servicoReal.executar()
        print("Depois de executar do serviço")


#Cliente - USO DO PROXY
servico_real = ServicoReal()
proxy = ProxyServico()
proxy.executar(servico_real)
