import pygame
from pygame.locals import *
from sys import exit

pygame.init()

largura = 640
altura = 480

preto = (0,0,0)

tela = pygame.display.set_mode((largura, altura))
pygame.display.set_caption('Sprites')

class Diamond(pygame.sprite.Sprite):
    def __init__(self):
        pygame.sprite.Sprite.__init__(self)
        self.sprites = []
        self.sprites.append(pygame.image.load('/home/vini/Documentos/Programação/VS CODE/Phyton/videosjoaotinti/13/Diamond/Diamond0.png'))
        self.sprites.append(pygame.image.load('/home/vini/Documentos/Programação/VS CODE/Phyton/videosjoaotinti/13/Diamond/Diamond1.png'))
        self.sprites.append(pygame.image.load('/home/vini/Documentos/Programação/VS CODE/Phyton/videosjoaotinti/13/Diamond/Diamond2.png'))
        self.sprites.append(pygame.image.load('/home/vini/Documentos/Programação/VS CODE/Phyton/videosjoaotinti/13/Diamond/Diamond3.png'))
        
        self.atual = 0
        self.image = self.sprites[self.atual]
        self.image = pygame.transform.scale(self.image, (32*3, 32*3))

        self.rect = self.image.get_rect()
        self.rect.topleft = 100, 350


        
    def update(self):
        self.atual += 0.45
        if self.atual >= len(self.sprites):
            self.atual = 0
        self.image = self.sprites[int(self.atual)]
        self.image = pygame.transform.scale(self.image, (32*3, 32*3))
        
todasSprites = pygame.sprite.Group()
diamond = Diamond()
todasSprites.add(diamond)

imagemFundo = pygame.image.load('/home/vini/Documentos/Programação/VS CODE/Phyton/videosjoaotinti/13/cave.png').convert()
imagemFundo = pygame.transform.scale(imagemFundo, (largura, altura))

relogio = pygame.time.Clock()

while True:
    relogio.tick(30)
    tela.fill(preto)
    for event in pygame.event.get():
        if event.type== QUIT:
            pygame.quit()
            exit()

    tela.blit(imagemFundo, (0,0))
    todasSprites.draw(tela)
    todasSprites.update()
    pygame.display.flip()