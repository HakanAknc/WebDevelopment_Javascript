// Static nedir?
// bir sınıfın içinde ki metot veya özellik stattic olarak tanımlamışsa nesne referansı üzerinden erişilmez
// staticlere sınıf ismi üzerinden erişilir.

// ? Bir function veya özellik static ise CLASS'a özgüdür değilse nesneye özgüdür.

class Matematik{

    static topla(a,b){
        console.log(a+b)
    }

    cikar(a,b){
        console.log(a-b)
    }

    carp(a,b){
        console.log(a*b)
    }

    bol(a,b){
        console.log(a/b)
    }
}

// ! Static olarak tanımlanmamışsa NESNE üzerinden erişilir aşağdaki gibi
// const matematik = new Matematik()
// matematik.topla(45,50)


// ! Static olarak tanımlanmışsa CLASS ismi üzerinden erişilir aşağdaki gibi
Matematik.topla(45,50)