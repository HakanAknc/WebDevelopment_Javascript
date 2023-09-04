// * Date(Tarih) Kullanımı

let tarih = new Date();

// get işlemleri
console.log(tarih);   // tarihi verir
console.log(tarih.getTime());
console.log(tarih.getFullYear());  // yıl
console.log(tarih.getDate());  // gün
console.log(tarih.getDay());  // haftanın gününü alır pazartesi=1, salı=2
console.log(tarih.getHours());  //saat
console.log(tarih.getMilliseconds());  // milisaniye
console.log(tarih.getMinutes());  // dakka
console.log(tarih.getMonth());  // aylar
console.log(tarih.getSeconds());  // saniye

console.log(tarih.toLocaleDateString());  // gün ay yıl şeklinde yazar
console.log(tarih.toLocaleTimeString());  // saat dakika saniye
console.log(tarih.toLocaleString());  // gün ay yıl ve saat dakka saniyeyi birlikte yazar

console.log("----------------------------------")

// set işlemleri  ileri alma geri alma işlemleri
console.log(tarih);
tarih.setDate(24);
console.log(tarih);
