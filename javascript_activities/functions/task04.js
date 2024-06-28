//Crie uma função que receba três números como parâmetros e determine qual é o maior entre eles. Utilize estruturas condicionais (if, else) para comparar os valores e determinar o maior. Imprima o maior valor no console.

function ordenaNumeros(num1, num2, num3) {
    if(num1 > num2 && num1 > num3) {
        console.log(num1);
    } else if (num2 > num1 && num2 > num3) {
        console.log(num2);
    } else {
        console.log(num3);
    }
}

ordenaNumeros(2,5,8);

//easy way
//function encontraMaiorValor(num1, num2, num3) {
//    let maior = num1; // Assumindo inicialmente que num1 é o maior
  
//    if (num2 > maior) {
//        maior = num2;
//    }
  
//    if (num3 > maior) {
//        maior = num3;
//    }
  
//   return maior;
//  }
  
//  console.log(encontraMaiorValor(12, 56, 32)); 