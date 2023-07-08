import pygame
from pygame.locals import *
from sys import exit
from random import randint

pygame.init()

pygame.mixer.music.set_volume(0.25)
musicadefundo = pygame.mixer.music.load('mixkit-swing-is-the-answer-526.mp3')
pygame.mixer.music.play(-1)
somcolisao = pygame.mixer.Sound('smw_kick.wav') 
'''é o som'''

largura = 640
altura = 480
'''são os valores das variaveis do tamanho da tela que vao ser chamados no codigo dps'''

x = int(largura/2)
y = int(altura/2)
'''é a varialvel da posicao do player no inicio do jogo, mas altera la em baixo com uma condição if'''

xAzul = randint(50, 590)
yAzul = randint(50, 430)
'''no inicio o item vai ter uma posição aleatoria'''

fonte = pygame.font.SysFont('roboto', 20, True, False)
'''define a fonte dentro de uma var, mas tem q chamar dps'''

pontos = 0
'''variavel pontos q é exibida na tela'''


tela = pygame.display.set_mode((largura, altura)) 
'''aqui chama o valor das variaveis do tamanho da tela'''

pygame.display.set_caption('Jogo da Cobrinha')
'''titulo do jogo q aparece na janela'''

relogio = pygame.time.Clock()
'''variavel da taxa de atualização q é chamada dps'''

while True:
    '''enquanto for verdade tudo o isso acontece, ou seja, sempre'''

    relogio.tick(30)
    '''taxa de atualização'''

    tela.fill((0,0,0))
    '''é pra tela ficar preta cada vez q o codigo atualiza, pra q n tenha um monte de player'''

    pontuacao = f'Pontos: {pontos}'
    textoFormatado = fonte.render(pontuacao, False, (255,255,255))
    '''pra dizer como o texto é exibido'''

    for event in pygame.event.get():

        if event.type == QUIT:
            pygame.quit()
            exit()
    '''funcao pra quando clicar no X o jogo fechar'''
        
    if pygame.key.get_pressed()[K_a]:
        x -= 20
    if pygame.key.get_pressed()[K_d]:
        x += 20
    if pygame.key.get_pressed()[K_w]:
        y -= 20
    if pygame.key.get_pressed()[K_s]:
        y += 20
    '''funcao pra movimentar o player'''
        
    ret_azul = pygame.draw.rect(tela, (0,0,255), (xAzul, yAzul, 50, 50))
    '''o player'''
    ret_verm = pygame.draw.rect(tela,(255,0,0), (x, y, 50, 50))
    '''o item'''

    if ret_verm.colliderect(ret_azul):
        xAzul = randint(50, 590)
        yAzul = randint(50, 430)
        pontos += 1
        somcolisao.play()
    '''funcao pra quando o player colidir com o item o item aparecer em outro lugar aleatorio, aumetar a pontuação e fazer um som'''

    if x >= int(largura):
        x = int(largura-largura)
    if y >= int(altura):
        y = int(altura-altura)
    if x <= 0-40:
        x = int(largura)
    if y <= 0-40:
        y = int(altura)
    '''tentativa meio falha (e talvez muito mal otimizada) de tentar fazer com q o player apareca do outro lado se ele sair da telakk'''

    
    tela.blit(textoFormatado, (10,10))
    '''é pra falar onde o texto é exibido'''

    pygame.display.update()
    '''dar update no jogo'''
