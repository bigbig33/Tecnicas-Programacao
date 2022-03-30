//FUNÇÕES
function tabuada(){
    var cont = 0;
    while(cont<=10){
        console.log(6*cont);
        cont++;
    }
}
//tabuada();

function tabuadaParam(num){
    var cont = 0;
    while(cont<=10){
        console.log(num*cont);
        cont++;
    }
}

//tabuadaParam(5);

function desconto (vlr){
    var desc =0.1;
    var novoVlr = vlr*desc;
    return novoVlr = vlr-(vlr*desc);
}
var mensagem = desconto(1500);
//console.log(mensagem);

/*6 - Faça um programa que calcule e mostre área de um quadrado. Sabe-se que A = lado*lado*/
function calcArea(lado){
    var a =0;
    a = lado*lado;
    console.log(a);
}
//calcArea(5);

/*Faça um programa que com o ano de nascimento de uma pessoa e o ano atual calcule e mostre:
    a) a idade da pessoa em anos
    b) a idade da pessoa em meses
    c) a idade da pessoa em dias
    d) a idade da pessoa em semanas
    Crie uma funçao para cada item */

function idadeAnos(anoNasc){
    var anoAtual = 2022;
    var idade =anoAtual - anoNasc;
    console.log("idade em anos: "+idade);
}
idadeAnos(2003);

function idadeMeses(anoNasc){
    var anoAtual = 2022;
    var idadeAnos = anoAtual - anoNasc;
    var idadeMeses = idadeAnos*12;
    console.log("idade em meses: "+idadeMeses);

}
idadeMeses(2003);

function idadeDias(anoNasc){
    var anoAtual = 2022;
    var idadeAnos = anoAtual - anoNasc;
    var idadeDias = idadeAnos*365;
    console.log("idade em dias: "+idadeDias);

}
idadeDias(2003);

function idadeSemanas(anoNasc){
    var anoAtual = 2022;
    var idadeAnos = anoAtual - anoNasc;
    var idadeSemanas = idadeAnos*52;
    console.log("idade em semanas: "+idadeSemanas);

}
idadeSemanas(2003);


console.log("****************************************************");

/*Faça um programa que com duas notas, calcule e mostre a média aritmetica e a mensagem conforme tabela:
    0 até 4 => reprovado
    4 até 7 => exame
    7 até 10 => aprovado*/

function media(n1,n2){
    var media = (n1+n2)/2
    if(media<=4){
        console.log(media + " - reprovado")
    }
    if(media>4 && media<7){
        console.log(media + " - exame")
    } 
    if(media>7){
        console.log(media + " - aprovado")
    } 
}

media(4,4);