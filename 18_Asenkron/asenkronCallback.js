// Callback nedir?

// -- timing - event - http istekleri

// ! CALLBACK : bir fonksiyonu bir fonksiyona parametre geçerek asnkron yapıyı senkrona çeviririz.

// böyle çağırırsak önce akıncı sonra hakanı consola yazar.
//  function getName(){
// servisten ismimi getirdi.
//     setTimeout(() => {
//         console.log("Hakan")
//     }, 1000);
//  }

//  function getSurname(){
//     setTimeout(() => {
//         console.log("Akıncı")
//     }, 500);
//  }

//  getName();
//  getSurname();


//CALLBACK kullanırsak

function getName(callback) {
    setTimeout(() => {
        // servisten ismimi getirdi.
        console.log("Hakan")
        callback();
    }, 1000);
}

function getSurname() {
    setTimeout(() => {
        console.log("Akıncı")
    }, 500);
}


getName(getSurname)

