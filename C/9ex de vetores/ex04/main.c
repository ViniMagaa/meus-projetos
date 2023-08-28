#include <stdio.h>
#include <stdlib.h>

int main()
{
    int n, soma = 0;

    printf("Quantos numeros vai digitar: ");
    scanf("%d", &n);

    double nReais[n], media;

    for(int i=0; i<n; i++) {
        printf("Digite o numero da posicao %d: ", i);
        scanf("%lf", &nReais[i]);

        soma += nReais[i];
    }

    media = (double)soma / (double)n;

    printf("A media aritmetica dos numeros do vetor e: %.3lf", media);

    printf("\n\nNumeros do vetor:\n");
    for(int i=0; i<n; i++) {
        printf(" %.1lf\n", nReais[i]);
    }

    return 0;
}
