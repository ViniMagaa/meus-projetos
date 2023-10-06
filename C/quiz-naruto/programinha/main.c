#include <stdio.h>
#include <stdlib.h>
#include <locale.h>

int main(void)
{
    int p1, p2, p3, p4, p5, p6, p7, pontos;
    setlocale(LC_ALL, "Portuguese");

    printf("Bem-vindo ao QUIZ do Vinícius sobre o seriado Naruto. (digite o número da alternativa para responder as questões)\n\n");

    printf("Iniciaremos com a primeira pergunta [fácil]: quem ensinou o Rasengan ao Naruto? \n[1]Jiraya \n[2]Tsunade \n[3]Minato \n[4]Boruto \n[5]Kakashi\n\n");
    scanf("%d", &p1);
    if (p1 == 1)
    {
        printf("CORRETO! Vamos para a próxima...\n\n\n\n");
        pontos += 1;

    }
    else
    {
        printf("VISH! Você errou, mas vamos seguir em frente...\n\n\n\n");
    }

    printf("Segunda pergunta [difícil]: quem e o primeiro amigo de Naruto? \n[1]Sasuke \n[2]Shikamaru \n[3]Yota \n[4]Sakura\n\n");
    scanf("%d", &p2);
    if (p2 == 3)
    {
        printf("CORRETO! Vamos para a próxima...\n\n\n\n");
        pontos += 1;
    }
    else
    {
        printf("VISH! Você errou, mas vamos seguir em frente...\n\n\n\n");
    }

    printf("Terceira pergunta [fácil]: quantas caudas tem a raposa de Naruto? \n[1]6 caudas \n[2]4 caudas \n[3]2 caudas \n[4]9 caudas\n\n");
    scanf("%d", &p3);
    if (p3 == 4)
    {
        printf("CORRETO! Vamos para a próxima...\n\n\n\n");
        pontos += 1;
    }
    else
    {
        printf("VISH! Você errou, mas vamos seguir em frente...\n\n\n\n");
    }

    printf("Quarta pergunta [média]: qual foi a temporada em que o Naruto e Sasuke se enfrentaram no vale do fim? \n[1]7ª temporada \n[2]3ª temporada \n[3]9ª temporada \n[4]6ª temporada \n[5]5ª temporada\n\n");
    scanf("%d", &p4);
    if (p4 == 5)
    {
        printf("CORRETO! Vamos para a próxima...\n\n\n\n");
        pontos += 1;
    }
    else
    {
        printf("VISH! Você errou, mas vamos seguir em frente...\n\n\n\n");
    }

    printf("Quinta pergunta [extra fácil]: quem morreu primeiro? \n[1]Kushina \n[2]Não tem certo \n[3]Minato\n\n");
    scanf("%d", &p5);
    if (p5 == 2)
    {
        printf("CORRETO! Vamos para a próxima...\n\n\n\n");
        pontos += 1;
    }
    else
    {
        printf("VISH! Você errou, mas vamos seguir em frente...\n\n\n\n");
    }

    printf("Sexta pergunta: quem derrotou Kaguya? \n[1]Sasuke \n[2]Naruto, Sakura e Sasuke \n[3]Naruto \n[4]Naruto e Sasuke\n\n");
    scanf("%d", &p6);
    if (p6 == 2)
    {
        printf("CORRETO! Vamos para a próxima...\n\n\n\n");
        pontos += 1;
    }
    else
    {
        printf("VISH! Você errou, mas vamos seguir em frente...\n\n\n\n");
    }

    printf("Sétima e última pergunta: quem achavam que era o mascarado antes dele mostrar o rosto? \n[1]Obito \n[2]Pain \n[3]Madara \n[4]Kakashi\n\n");
    scanf("%d", &p7);
    if (p7 == 3)
    {
        printf("CORRETO!\n\n\n\n");
        pontos += 1;
    }
    else
    {
        printf("VISH! Você errou :( \n\n\n\n\n\n");
    }

    printf("PARABENS (ou nao) Voce acertou %d questões. Aqui está seu julgamento baseado em seus acertos:\n", pontos);
    if (pontos == 7)
    {
        printf("Nossa que nerdolakk\n\n");
    }
    else if (pontos == 6)
    {
        printf("Quase um nerdolakk\n\n");
    }
    else if (pontos == 5)
    {
        printf("Assistiu demais hein, se liga\n\n");
    }
    else if (pontos == 4)
    {
        printf("Assistiu bastante\n\n");
    }
    else if (pontos == 3)
    {
        printf("Assistiu como uma pessoa normal\n\n");
    }
    else if (pontos == 2)
    {
        printf("Assistiu pouco\n\n");
    }
    else if (pontos == 1)
    {
        printf("Quase um burrão\n\n");
    }
    else if (pontos == 0)
    {
        printf("Burrão demais ALSKJDLASKJLDA\n\n");
    }
    else
    {
        printf("Número errado\n\n");
    }

    printf("[FIM]");

    return 0;
}
