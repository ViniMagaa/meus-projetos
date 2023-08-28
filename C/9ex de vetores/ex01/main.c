#include <stdio.h>
#include <stdlib.h>

int main()
{
    int n, nPares = 0;

    printf("Quantos numeros vai digitar? ");
    scanf("%d", &n);

    int nInt[n];

    for(int i=0; i<n; i++) {
        printf("\nDigite o %do numero: ", i+1);
        scanf("%d", &nInt[i]);
    }

    printf("\nNumeros pares:\n");
    for(int i=0; i<n; i++) {
        if(nInt[i] % 2 == 0) {
            printf("%d \n", nInt[i]);
            nPares++;
        }
    }
    printf("\n\nExistem %d numeros pares\n\n", nPares);

    return 0;
}
