#include <stdio.h>
#include <stdlib.h>

int main()
{
    int n;

    printf("Quantos numeros vai digitar: ");
    scanf("%d", &n);

    int a[n], b[n], c[n];

    for(int i=0; i<n; i++) {
        printf("\nDigite o valor da posicao %d do vetor A: ", i);
        scanf("%d", &a[i]);
        printf("Digite o valor da posicao %d do vetor B: ", i);
        scanf("%d", &b[i]);
        c[i] = a[i] + b[i];

        //printf("\nO valor da posicao %d no vetor C e %d\n", i, c[i]);
    }

    int option;

    printf("\nPara conferir os valores do vetor C, insira o index do elemento a ser consultado (-1 para sair):\n");
    do{
        printf("\n\nDigite: ");
        scanf("%d", &option);

        if(option < n && option > -1) {
            printf("A posicao %d em C tem o valor %d", option, c[option]);
        } else if(option != -1) {
            system("cls");
            printf("\n\n[ERRO] O index %d nao esta no escopo do vetor\n\n", option);
        }
    } while(option != -1);

    printf("\n\nFIM\n\n");

    return 0;
}
