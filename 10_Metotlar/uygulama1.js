// * Kelime sayısı bulma uygulaması

let metin = "Şuan İstanbul Üsküdar'da JavaScript eğitimi almaktayım."
let harf = prompt("Harf giriniz : ")

function bul(harf){
    let toplam = 0;
    for(let i=0; i<metin.length; i++){
        if(metin.charAt(i)==harf){    // toLowerCase() = büyük küçük uyumu
            toplam+=1;
        }
    }
    return toplam;
}

let sonuc = bul(harf);
document.write("Harf sayısı : " + sonuc);