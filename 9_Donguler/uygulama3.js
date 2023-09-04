// FAKTORİYEL HESAPLAMA

let sayi = Number(prompt("Bir sayı giriniz : "))
let carpim = 1;

for(let i=1; i<=sayi; i++){
    carpim=carpim*i;
}
document.write("Sonuç : "+carpim)