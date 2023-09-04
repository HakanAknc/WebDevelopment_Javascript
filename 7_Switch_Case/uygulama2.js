// ATM Uygulaması
/*
    1- Bakiye görüntüleme
    2- Para çekme
    3- Para yatırma
    4- Çıkış

*/

let yeniSatir = "\r\n";
let bakiye = 1000;

let metin = "1-Bakiye Görüntüleme"+yeniSatir
           +"2-Para Çekme"+yeniSatir
           +"3-Para Yatırma"+yeniSatir
           +"4-Çıkış"+yeniSatir
           +"Lütfen bir değer seçiniz : ";

let secim = prompt(metin);
switch(secim){
    case "1":
        alert("Bakiyeniz : "+bakiye)
        break;

    case "2":
        let cekilecekTutar = Number(prompt("Çekmek istediğiniz tutarı giriniz : "));
        if(cekilecekTutar<bakiye){
            //başarılıdır
            bakiye = bakiye-cekilecekTutar;
            alert("Kalan bakiye : "+bakiye);
        }else{
            alert("Bakiyenizden fazla para çekemezsinz!"+yeniSatir
                 +"Bakiyeniz : "+bakiye+ " " +"Çekilecek tutar : "+cekilecekTutar);
        }
        break;
    
    case "3":
        let yatirilacakTutar = Number(prompt("Yatırılacak tutar giriniz : "));
        bakiye = bakiye+yatirilacakTutar;
        alert("Güncel bakiyeniz : "+bakiye);
        break;

    case "4":
        alert("Çıkış yapılıyor...");
        break;

    default:
        alert("Hatalı değer giridiniz.");
        break;

}