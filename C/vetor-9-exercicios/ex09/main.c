#include <stdio.h>
#include <stdlib.h>

int main()
{
    int n, lucroMenorDez = 0, lucroEntreDezVinte = 0, lucroMaiorVinte = 0;

    printf("Quantas mercadorias vai digitar: ");
    scanf("%d", &n);

    char mercadorias[n][20];
    double precoCompra[n];
    double precoVenda[n];

    for(int i=0; i<n; i++) {
        printf("\nDados da mercadoria %d\n", i+1);
        printf(" Nome: ");
        scanf("%s", mercadorias[i]);
        printf(" Preco de compra: ");
        scanf("%lf", &precoCompra[i]);
        printf(" Preco de venda: ");
        scanf("%lf", &precoVenda[i]);
    }

    double lucro;
    // Loop para calcular tipos de lucro
    for(int i=0; i<n; i++) {
        lucro = (precoVenda[i] - precoCompra[i]) / precoVenda[i] * 100;

        if(lucro < (double)10) { // Lucro menor que 10%
            lucroMenorDez++;
        } else if(lucro >= (double)10 && lucro <= (double)20) { // Lucro entre 10% e 20%
            lucroEntreDezVinte++;
        } else if(lucro > (double)20) { // Lucro maior que 20
            lucroMaiorVinte++;
        }
    }
    printf("\nQuantidade de produtos com lucro menor que 10%%:__________________%d", lucroMenorDez);
    printf("\nQuantidade de produtos com lucro entre 10%% e 20%%:________________%d", lucroEntreDezVinte);
    printf("\nQuantidade de produtos com lucro maior que 20%%:__________________%d", lucroMaiorVinte);


    // Calcular total
    double totalCompra = 0;
    double totalVenda = 0;
    for(int i=0; i<n; i++) {
        totalCompra += precoCompra[i];
        totalVenda += precoVenda[i];
    }

    double totalLucro = (totalVenda - totalCompra) / totalVenda * 100;

    printf("\n\nValor total de compra: R$ %.2lf\n", totalCompra);
    printf("Valor total de venda: R$ %.2lf\n", totalVenda);
    printf("Lucro Total: %.2lf%%\n", totalLucro);

    return 0;
}
