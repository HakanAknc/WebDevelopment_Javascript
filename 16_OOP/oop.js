// OOP GİRİŞİ

class Insan{  //sınıf
    /*
        1- Özellikler
        2- Yapıcı metot
        3- Function
    */
    constructor(isim,soyisim,yas,maas){  // yapıcı metot
        this.isim = isim;
        this.soyisim = soyisim;
        this.yas = yas;
        this.maas = maas;
    }
    bilgileriGoster(){
        console.log(
           `İsim : ${this.isim} 
            Soyisim : ${this.soyisim} 
            Yaş : ${this.yas} 
            Maaş : ${this.maas}`
        )
    }
}

// nesne oluşturmak
const insan1 = new Insan("Hakan","Akıncı",22,7000);
console.log(insan1.isim,insan1.soyisim,insan1.yas,insan1.maas);
insan1.bilgileriGoster();

const insan2 = new Insan("Yunus","Ensar",25,8500);
console.log(insan2.isim,insan2.soyisim,insan2.yas,insan2.maas);
insan2.bilgileriGoster();

console.log(insan1.maas)