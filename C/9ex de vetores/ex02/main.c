#include <stdio.h>
#include <stdlib.h>

int main()
{
    int n, idxMaior;
    double nMaior = 0.0;

    printf("Quantos numeros vai digitar: ");
    scanf("%d", &n);

    double numeros[n];

    for(int i=0; i<n; i++) {
        printf("Digite um numero: ");
        scanf("%lf", &numeros[i]);

        if(numeros[i] > nMaior) {
            nMaior = numeros[i];
            idxMaior = i;
        }
    }

    printf("\n\nO maior numero e %.1lf e ele esta na posicao %d\n\n", nMaior, idxMaior);

    return 0;
}
