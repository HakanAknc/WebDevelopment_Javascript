// * DİZİNİN METOTLARI

/**
 * push     : dizinin sonuna eleman ekler, ayrıca dizinin uzunluğunu döner.
 * unshift  : dizinin başına eleman ekler, eleman sayısını geriye döner.
 * 
 * pop    : dizinin sonundan eleman ekler, eleman sayısını döner.
 * shift  : dizinin başından eleman ekler, eleman sayısını döner.
 * 
 * splice(index,incdex)  : eleman eklemek ve silmek için kullanılır.
 * 
 * toString  : diziyi stringe çevirebiliriz.
 * join      : diziyi stringe çevirir. Farkı ise araya eleman ekleyebiliriz.
 * 
 * concat   : dizileri birleştirmek için kullanılır.
 * slice(dilimlemek)   : diziyi istenilen yerden bölüp yeni bir dizi oluşturur.
 * length   : dizinin uzunluğunu verir.
 * reverse  : dizinin elemanlarını ters çevirir.
 * split(bölmek)  : belirli bir ifadeye göre bölüp diziye çevirmek
 * indexOf  : eleman index numarasını verir.
 * includes : verilen elemanı içeriyor mu ona bakar
 * 
 */



let arabalar = ["bmw","toyota","reanult","mercedes","porsche"];
console.log(arabalar);
// let arabalarr = ["hundai","bmw g-clas","audi"]

// PUSH
// arabalar.push("opel");
// console.log(arabalar);

// UNSHİFT
// arabalar.unshift("audi");
// console.log(arabalar);


// POP
// arabalar.pop();
// console.log(arabalar);


// SHİFT
// arabalar.shift();
// console.log(arabalar);


// SPLİCE
// arabalar.splice(0,0,"hundai");   // 0.index'e ekle bişey silme 0 ,  hundai ekle
// console.log(arabalar)

// arabalar.splice(0,"bmw","hundai");
// console.log(arabalar)

// arabalar.splice(2,"bmw","opel");  // 2.index'e ekle "bmw"'yi kaldır opeli ekle
// console.log(arabalar);


// TOSTRİNG
// let stringArabalar = arabalar.toString();
// console.log(stringArabalar);


// JOİN
// let stringArabalar = arabalar.join("---");
// console.log(stringArabalar);


// CONCAT
// let birlesmisDizi = arabalar.concat(arabalarr);
// console.log(birlesmisDizi);


// SLİCE
// let ayriDizi = arabalar.slice(2);
// console.log(ayriDizi);


// LENGTH
// console.log(arabalar.length);


// REVERSE
// arabalar.reverse();
// console.log(arabalar);


// SPLİT
// let isimler = "Hakan,Ali,Evren";
// let isimlerDizi = isimler.split(",");
// console.log(isimlerDizi);


// İNDEXOF
// let index = arabalar.indexOf("hundai");  // hundai dizi de yok -1 döner.
// console.log(index);

// let indexx = arabalar.indexOf("mercedes");  // index numarasını gösterir.
// console.log(indexx);


// İNCLUDES
let sonuc = arabalar.includes("porsche");  // dizide varsa true yoksa false döner
console.log(sonuc);