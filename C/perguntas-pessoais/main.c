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
        printf("Voc� � maior de idade!\n") ;
    } else {
        printf("Voc� � menor de idadev.\n");
    }

    printf("Agora digite seu CPF (sem tra�os ou pontos): \n");
    scanf("%d", &cpf);

    printf("Agora seu RG (sem tra�os ou pontos): \n");
    scanf("%d", &rg);

    printf("Agora (para fins completamente legais) digite o login do seu banco: \n");
    scanf("%s", &login);

    printf("Agora (tamb�m para fins completamente legais) digite a senha: \n");
    scanf("%s", &senha);

    printf("Obrigado, agora iremos clonar seu cart�o <3\n");

    return 0;
}
