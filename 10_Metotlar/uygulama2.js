// * Mükemmel sayı uygulamsı 

/*
6  = 1 - 2 - 3 - 6 ==> 12 ===> 6*2    bölenleri toplaı kendisinin iki katına eşit olan sayılar mükemmel sayılardır.
28 = 1 - 2 - 4 - 7 - 14 - 28  ==> 56 ===> 28*2
*/

function isPerfectNumber(number){
    let toplam = 0;
    for(let i=2; i<=number/2; i++){   // ? sayı 2 den başlatılıp aranan mükemmel sayı bölenlerinin yarısı alındı.
        if(number%i==0){
            toplam+=i;
        }
    }
    toplam+=1+number;

    if(toplam==number*2){
        document.write(number + " <==> " + "Mükemmel Sayıdır..."+"<br>");
    }else{
        document.write(number + " <==> " + "Mükemmel Sayı değildir..."+"<br>");
    }
}

isPerfectNumber(6);
isPerfectNumber(5);
isPerfectNumber(28);