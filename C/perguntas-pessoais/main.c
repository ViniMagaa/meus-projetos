#include <stdio.h>
#include <locale.h>

int main()
{
    int idade, cpf, rg;
    char login[18];
    char senha[18];

    setlocale(LC_ALL, "Portuguese");
    printf("Qual sua idade? ");
    scanf("%d" , &idade);

    if (idade >= 18) {
        printf("Você é maior de idade!\n") ;
    } else {
        printf("Você é menor de idadev.\n");
    }

    printf("Agora digite seu CPF (sem traços ou pontos): \n");
    scanf("%d", &cpf);

    printf("Agora seu RG (sem traços ou pontos): \n");
    scanf("%d", &rg);

    printf("Agora (para fins completamente legais) digite o login do seu banco: \n");
    scanf("%s", &login);

    printf("Agora (também para fins completamente legais) digite a senha: \n");
    scanf("%s", &senha);

    printf("Obrigado, agora iremos clonar seu cartão <3\n");

    return 0;
}
