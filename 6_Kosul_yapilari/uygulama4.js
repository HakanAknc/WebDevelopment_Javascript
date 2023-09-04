// Beden kitle indeksi hesaplama

let kilo = Number(prompt("Kilonuzu giriniz : "));

let boy = Number(prompt("Boyunuzu metre cinsinden giriniz : "));

let sonuc = kilo/(boy*2);

if(sonuc<18.5){
    alert("İdeal kilonun altında");
}
else if(sonuc>=18.5 && sonuc<=24.9){
    alert("İdeal kiloda");
}
else if(sonuc>=25 && sonuc<=29.9){
    alert("İdeal kilonun üstünde");
}
else if(sonuc>=30 && sonuc<=39.9){
    alert("İdeal kilonun üstünda (obez)");
}
else if(sonuc>=40){
    alert("İdeal kilonun çok üstünde (morbid obez)");
}