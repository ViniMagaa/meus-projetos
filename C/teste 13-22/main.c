#include <stdio.h>
#include <stdlib.h>
#include <locale.h>

int main()
{
    char nome[100];
    char termos[100];
    char resposta[100];

    setlocale(LC_ALL, "Portuguese");
    printf("Bem-vindo a um enigma ultra difícil.\n\nPrimeiro digite seu nome >:)\n");
    scanf("%s", nome);

    printf("\nRESPONDA OU DAREMOS /BAN @%s DO PLANETA TERRA\n\nOBS: escreva as respostas por extenso e com caracteres totamlente em MINÚSCULO.", nome);
    printf("\n\nDigite 'ok' para aceitar os termos...\n");
    scanf("%s", termos);

    do
    {
        system("cls");
        printf("[ENIGMA]\n\n");
        printf("blue\n\n");
        scanf("%s", resposta);
    } while (resposta == "azul");

    do
    {
        system("cls");
        printf("[ENIGMA]\n\n");
        printf("um polígono de 18 lados\n\n");
        scanf("%s", resposta);
    } while (resposta == "octodecágono");

    do
    {
        system("cls");
        printf("[ENIGMA]\n\n");
        printf("D-S-T-?-Q-S-S\n\n");
        scanf("%s", resposta);
    } while (resposta == "quarta");

    do
    {
        system("cls");
        printf("[ENIGMA]\n\n");
        printf("sograpsa\n\n");
        scanf("%s", resposta);
    } while (resposta == "aspargos");

    do
    {
        system("cls");
        printf("[ENIGMA]\n\n");
        printf("embro embro embro embro embro embro embro embro embro embro\n\n");
        scanf("%s", resposta);
    } while (resposta == "dezembro");

    do
    {
        system("cls");
        printf("[ENIGMA]\n\n");
        printf("-22.734859, -47.314367\n\n");
        scanf("%s", resposta);
    } while (resposta == "polivalente");

    printf("\n\nmuito bem seu otario\n\n\n\n");

    return 0;
}
