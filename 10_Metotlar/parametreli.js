// * Parametreli metot tanımlamak

  
// function yazdir(isim,soyisim){
//     document.writeln(isim + " " + soyisim + "<br>")
// }
// yazdir("Hakan","Akıncı")
// yazdir("Ahmet","Salih")


// function topla(a,b){
//     alert(a+b)
// }
// topla(15 , 45)


// function karisik(a,b,c,d){
//     alert(a+b-(c*d))
// }
// karisik(10,10,5,2)


// function kup(sayi){
//     alert(sayi*sayi*sayi)
// }
// kup(3)


var yas = Number(prompt("Yaşınız giriniz : "))

function yasKontrol(yas){
    if(yas > 18){
        document.write("Ehliyet alabilirisniz :) ")
    }else{
        document.write("Ehliyet alamazsınız :( ")
    }
    
}

yasKontrol(yas)