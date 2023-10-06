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

xCobra = int(largura/2)
yCobra = int(altura/2)
'''é a varialvel da posicao do player no inicio do jogo, mas altera la em baixo com uma condição if'''

velocidade = 10
xControle = velocidade
yControle = 0

xFruta = randint(20, 620)
yFruta = randint(20, 460)
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

listaCobra = []

comprimentoInicial = 5

morreu = False

def corpoCobra(listaCobra):
    for XeY in listaCobra:
        #XeY = [x, y]
        #XeY[0] = x
        #XeY[1] = y

        pygame.draw.rect(tela, (0,255,0), (XeY[0], XeY[1], 20, 20))

def reiniciar():
    global pontos, comprimentoInicial, xCobra, yCobra, listaCobra, listaCabeca, xFruta, yFruta, morreu

    pontos = 0
    comprimentoInicial = 5
    xCobra = int(largura/2)
    yCobra = int(altura/2)
    listaCobra = []
    listaCabeca = []
    xFruta = randint(20, 620)
    yFruta = randint(20, 460)
    morreu = False

while True:
    '''enquanto for verdade tudo o isso acontece, ou seja, sempre'''

    relogio.tick(25)
    '''taxa de atualização'''

    tela.fill((255,255,255))
    '''é pra tela ficar preta cada vez q o codigo atualiza, pra q n tenha um monte de player'''

    pontuacao = f'Pontos: {pontos}'
    textoFormatado = fonte.render(pontuacao, False, (0,0,0))
    '''pra dizer como o texto é exibido'''

    for event in pygame.event.get():

        if event.type == QUIT:
            pygame.quit()
            exit()
        '''funcao pra quando clicar no X o jogo fechar'''

        if event.type == KEYDOWN:
            if event.key == K_a:
                if xControle == velocidade:
                    pass
                else:
                    xControle = -velocidade
                    yControle = 0
            if event.key == K_d:
                if xControle == -velocidade:
                    pass
                else:
                    xControle = velocidade
                    yControle = 0
            if event.key == K_w:
                if yControle == velocidade:
                    pass
                else:
                    xControle = 0
                    yControle = -velocidade
            if event.key == K_s:
                if yControle == -velocidade:
                    pass
                else:
                    xControle = 0
                    yControle = velocidade
    
    xCobra = xCobra + xControle
    yCobra = yCobra + yControle

    '''
    if pygame.key.get_pressed()[K_a]:
        xCobra -= 10
    if pygame.key.get_pressed()[K_d]:
        xCobra += 10
    if pygame.key.get_pressed()[K_w]:
        yCobra -= 10
    if pygame.key.get_pressed()[K_s]:
        yCobra += 10
    funcao pra movimentar o player'''


        
    fruta = pygame.draw.rect(tela, (255,0,0), (xFruta, yFruta, 20, 20))
    '''o player'''
    cobra = pygame.draw.rect(tela,(0,255,0), (xCobra, yCobra, 20, 20))
    '''o item'''

    if cobra.colliderect(fruta):
        xFruta = randint(20, 620)
        yFruta = randint(20, 460)
        pontos += 1
        somcolisao.play()
        comprimentoInicial += 1
    '''funcao pra quando o player colidir com o item o item aparecer em outro lugar aleatorio, aumetar a pontuação e fazer um som'''

    if xCobra > int(largura):
        xCobra = 0
    if xCobra < 0:
        xCobra = int(largura)
    if yCobra > int(altura):
        yCobra = 0
    if yCobra < 0:
        yCobra = int(altura)
    '''fazer com q o player apareca do outro lado se ele sair da tela'''

    listaCabeca = []
    listaCabeca.append(xCobra)
    listaCabeca.append(yCobra)

    listaCobra.append(listaCabeca)

    if len(listaCobra) > comprimentoInicial:
        del listaCobra[0]

    if listaCobra.count(listaCabeca) > 1:
        fonte2 = pygame.font.SysFont('arial', 20, True, True)
        mensagem = 'GAME OVER! Pressione a tecla R para reiniciar o Jogo'
        textoFormatado = fonte2.render(mensagem, True, (0,0,0))
        retTexto = textoFormatado.get_rect()

        morreu = True
        while morreu:
            tela.fill((255,255,255))
            for event in pygame.event.get():
                if event.type == QUIT:
                    pygame.quit()
                    exit()
                if event.type == KEYDOWN:
                    if event.key == K_r:
                        reiniciar()
            
            retTexto.center = (largura//2, altura//2)
            tela.blit(textoFormatado, (retTexto))           
            pygame.display.update()

    corpoCobra(listaCobra)
    
    tela.blit(textoFormatado, (10,10))
    '''é pra falar onde o texto é exibido'''

    pygame.display.update()
    '''dar update no jogo'''
