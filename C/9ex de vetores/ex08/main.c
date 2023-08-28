#include <stdio.h>
#include <string.h>

int main()
{
    int nPessoas, nM = 0, nF = 0;
    double maior = 0, menor, somaF = 0, mediaF;

    printf("Quantas pessoas vai digitar: ");
    scanf("%d", &nPessoas);

    char gens[nPessoas][1];
    double alturas[nPessoas];

    for(int i=0; i<nPessoas; i++) {
        printf("\nDados da pessoa %d:\n", i+1);
        printf(" Genero (M ou F): ");
        scanf("%s", gens[i]);
        printf(" Altura: ");
        scanf("%lf", &alturas[i]);

        // Calcular a maior altura
        if(alturas[i] > maior) {
            maior = alturas[i];
        }

        // Calcular a menor altura
        if(alturas[i] < menor) {
            menor = alturas[i];
        } else if(i == 0) {
            menor = alturas[i];
        }

        // Calcular a soma das alturas das mulheres
        if(strcmp(gens[i], "f") == 0 || strcmp(gens[i], "F") == 0) {
            somaF += alturas[i];
            nF++;
        } else { // Calcular a quantidade de homens
            nM++;
        }
    }

    // Calcular a media da altura das mulheres
    mediaF = somaF / (double)nF;

    printf("\n\n");
    printf("Maior altura do grupo: %.2lf \n", maior);
    printf("Menor altura do grupo: %.2lf \n", menor);
    printf("Media da altura das mulheres: %.2lf \n", mediaF);
    printf("Numero de Homens: %d \n", nM);

    return 0;
}
