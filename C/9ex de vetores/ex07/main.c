#include <stdio.h>
#include <stdlib.h>

int main()
{
    int n;

    printf("Quantos alunos vai digitar: ");
    scanf("%d", &n);

    char nomes[n][20];
    double nota1[n];
    double nota2[n];

    for(int i=0; i<n; i++) {
        printf("\nDados do aluno %d:\n", i+1);
        printf(" Nome: ");
        scanf("%s", nomes[i]);
        printf(" Nota 1: ");
        scanf("%lf", &nota1[i]);
        printf(" Nota 2: ");
        scanf("%lf", &nota2[i]);
    }

    printf("\n\nAPROVADOS:\n");
    double media;
    for(int i=0; i<n; i++) {
        media = (nota1[i] + nota2[i]) / (double)2;
        if(media >= 6.0) {
            printf(" %s com media %.1lf \n", nomes[i], media);
        }
    }

    return 0;
}
