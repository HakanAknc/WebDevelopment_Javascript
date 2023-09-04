// Math Sınıfı Metotları

/*
1-Floor   : Bir ondalık sayının en büyük tam sayıya yuvarlanmış halini döndürür. Örneğin, Math.floor(3.7) 3 olarak değerlendirilir.
2-Ceil    : Bir ondalık sayının en küçük tam sayıya yuvarlanmış halini döndürür. Örneğin, Math.ceil(3.1) 4 olarak değerlendirilir.
3-Round   : Bir ondalık sayıyı en yakın tam sayıya yuvarlar. Yarıdan fazlasını yukarı yuvarlar. Örneğin, Math.round(3.5) 4 olarak değerlendirilir.

4-Max     : Belirtilen iki veya daha fazla sayı arasındaki en büyük sayıyı döndürür. Örneğin, Math.max(2, 5, 9, 3) 9 olarak değerlendirilir.
5-Min     : Belirtilen iki veya daha fazla sayı arasındaki en küçük sayıyı döndürür. Örneğin, Math.min(2, 5, 9, 3) 2 olarak değerlendirilir.

6-Random  : 0 ile 1 arasında rastgele bir ondalık sayı üretir. Örneğin, Math.random() 0 ile 1 arasında bir değer döndürebilir.
7-Abs     : Bir sayının mutlak değerini (pozitif değerini) döndürür. Örneğin, Math.abs(-5) 5 olarak değerlendirilir.
8-Sqrt    : Bir sayının karekökünü döndürür. Örneğin, Math.sqrt(25) 5 olarak değerlendirilir.
9-Pow     : Bir sayının üssünü alır. İlk argüman tabanı, ikinci argüman ise üssü temsil eder. Örneğin, Math.pow(2, 3) 8 olarak değerlendirilir (2^3 = 8).
--------> PI sayısı
*/


// Random
// console.log(Math.floor(Math.random()*100));

let randomDeger = Math.random();      // doğrulama kodu mantığı
let sonuc = randomDeger*100000;
let sonucYuvarla = Math.floor(sonuc);

console.log(randomDeger);
console.log(sonuc);
console.log(sonucYuvarla);