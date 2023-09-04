// -------- BREAK VE CONTİNUE --------

// -- break

// 1'den 10 a kadar sayıların yazdıralım 8'e geldiğinde dögüden çıksın

// let sayac = 1;

// while(sayac<=10){
//     document.write(sayac+"<br>")
//     if(sayac==8){
//         break;
//     }
//     sayac++;
// }


// -- continue

// 1'den 10 a kadar sayıların yazdıralım 8'e geldiğinde 8'i yazmadan devam etsin

let sayac = 1;

while(sayac<=10){
    sayac++;
    document.write(sayac+"<br>")
    if(sayac==8){
        continue;
    }
    
}
