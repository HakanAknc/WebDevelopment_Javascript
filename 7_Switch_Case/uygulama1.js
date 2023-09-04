//Hafta seçme

let yeniSatır = "\r\n";
let metin = "1-Pazartesi"+yeniSatır
           +"2-Salı"+yeniSatır
           +"3-Çarşamba"+yeniSatır
           +"4-Perşembe"+yeniSatır
           +"5-Cuma"+yeniSatır
           +"6-Cumartesi"+yeniSatır
           +"7-Pazar"+yeniSatır
           +"Lütfen bir seçim yapınız : ";

let deger = prompt(metin);
switch(deger){

    case "1":
        alert("Pazartesi günü");
        break;

    case "2":
        alert("Salı günü");
        break;
    
    case "3":
        alert("Çarşamba günü");
        break;
    
    case "4":
        alert("Perşembe günü");
        break;

    case "5":
        alert("Cuma günü");
        break;

    case "6":
        alert("Cumartesi günü");
        break;

    case "7":
        alert("Pazar günü");
        break;
    
    default:
        alert("Hatalı değer girdiniz.");
        break;
}