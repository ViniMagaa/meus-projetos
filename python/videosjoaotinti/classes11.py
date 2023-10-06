class Cachorros:
    def __init__(self, nome, corPelo, idade, tamanho):
        self.nome = nome
        self.corPelo = corPelo
        self.idade = idade
        self.tamanho = tamanho

    def latir(self):
        print('Au Au!')
    
    def correr(self):
        print(f'{self.nome} está correndo!')

cachorro1 = Cachorros('Tobby', 'Marrom', 5, 'Grande')

'''print(cachorro1.nome)
print(cachorro1.idade)

cachorro1.idade = 8
print(cachorro1.idade)'''

cachorro1.latir()
cachorro1.correr()

cachorro2 = Cachorros('Max', 'Preto', 3, 'Pequeno')

print(f'{cachorro2.nome}, de {cachorro2.idade} anos, tem a cor de pelo {cachorro2.corPelo}')