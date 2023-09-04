// * String sınıflarının metotları


// - charAt()      : Belirtilen indeksteki karakteri döndürür.
// - concat()      : Mevcut dizeye diğer dize(ler)i ekler.
// - indexOf()     : Belirtilen değeri bulmak için başlangıç indeksinden itibaren dizede arar ve bulunan indeksi döndürür. Bulunamazsa -1 döner.
// - lastindexOf() : İlk metodu gibi çalışır, ancak sağdan sola doğru tarama yapar.
// - toUpperCase() : Dizinin tüm karakterlerini büyük harfe çevirir.
// - toLowerCase() : Dizinin tüm karakterlerini küçük harfe çevirir.
// - trim()        : Dizenin başındaki ve sonundaki boşlukları kaldırır.
// - slice()       : Belirtilen indeks aralığındaki karakterleri kesip alır.
// - substing()    : Belirtilen indeks aralığındaki karakterleri kesip alır. slice() ile benzerdir, ancak negatif indeksleri desteklemez.
// - replace()     : Belirtilen değeri arar ve bulduğunda yeni bir değerle değiştirir.
// - split()       : Diziyi belirtilen ayraçtan böler ve alt dizeleri içeren bir dizi döndürür.
// - valueOf()     : Dize nesnesinin ilkel değerini döndürür.
// - startWith()   : Belirtilen dizeyle başlayıp başlamadığını kontrol eder. İsteğe bağlı başlangıç ​​pozisyonu belirtebilirsiniz.
// - endWith()     : Belirtilen dizeyle bitip bitmediğini kontrol eder. İsteğe bağlı bir bitiş ​​pozisyonu belirtebilirsiniz.
 

let kurs = "Modern Web Geliştirme Kursu";
// let tarih = " 2023";

// charAt
// let karekter = kurs.charAt(5);
// console.log(karekter);


// concat
// let sonuc = kurs.concat(tarih, " Enes");
// console.log(sonuc);


// indexOf
let index = kurs.indexOf("W")
console.log(index);