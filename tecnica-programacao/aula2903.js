/*Faça um programa que mostre no console todas as tabuadas de 1 ao 10, seguindo a formatação abaixo:
1 X 0 = 0
1 X 1 = 1
1 X 2 = 2
...
1 X 10 = 10*/
for(var i=0; i<= 10; i++){
    let num = 1;
    let mult = num*i;
    console.log("1 X "+i+" = "+mult);
}

/*Faça um programa que calcule o preço de um produto que calcule o preço de um produto, 
calcule e mostre o novo preço sabendo-se que o preço atual é R$1500 e este sofreu um desconto de 10%*/ 

preco = 1500;
desconto = 1500*0.1;
console.log(preco - desconto);
