// * Ürün arama uygulaması

let urun1 = {
    isim: "ACER Swift",
    kategori: "Teknoloji",
    fiyat: 6.219 + " TL"
}

let urun2 = {
    isim: "ACER Nitro 5",
    kategori: "Teknoloji",
    fiyat: 15.475 + " TL"
}

let urun3 = {
    isim: "LENOVA V15",
    kategori: "Teknoloji",
    fiyat: 10.999 + " TL"
}

let urun4 = {
    isim: "LENOVA V14",
    kategori: "Teknoloji",
    fiyat: 4.399 + " TL"
}

let urun5 = {
    isim: "LENOVA Ideapad",
    kategori: "Teknoloji",
    fiyat: 4.510 + " TL"
}

let urunler = [urun1, urun2, urun3, urun4, urun5];
let filtreliUrunler = [];
let kullaniciUrunIsmi = prompt("Bir ürün ismi giriniz : ");


function filtreliUrunleriDoldur(urunler) {  // ürünleri fonksiyonda topluyorum
    urunler.forEach(function (urun) {       // her ürün üzerinde dönüyorum ve tutuyorum
        if (urun.isim.toUpperCase().includes(kullaniciUrunIsmi.toUpperCase(), 0)) {  // ürün ismini al (toUpperCase) büyük küçük harf hassasiyetine bak ve ürün içeriyormu yani var mı (includes)
            filtreliUrunler.push(urun);   // true dönen yani aranan ve olan ürünleri filtreliUrunler'e ekle
        }
    });
}

function filtreliUrunleriYazdir(urunler) {
    urunler.forEach(function (urun) {
        console.log("------------------------------------------------------");
        console.log("Ürün Adı" + "   |   " + "Ürün Fiyatı" + "  |   " + "Ürün Kategori");
        console.log(urun.isim + " | " + urun.fiyat + " | " + urun.kategori);
        console.log("------------------------------------------------------")
    });
}

filtreliUrunleriDoldur(urunler);
filtreliUrunleriYazdir(filtreliUrunler);