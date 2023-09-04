/*
1- JavaScript senkron çalışan bir programlama dilidir.

----------ASENKRON ÇALIŞMASINA SEBEP OLANLAR---------------
1- Timing
2- Event(Olay)
3- Http İstekleri
*/

// selamla()
// console.log("1")
// console.log("2")
// console.log("Hakan")

// function selamla(){
//     console.log("Selam")
// }


// Asenkron
// setTimeout(()=>{

// }, timeout);


console.log("Hakan")

setTimeout(() => {
    console.log("1000 sn bitti")
}, 1000);

setTimeout(() => {
    console.log("500 ms bitti")
}, 500);

setTimeout(() => {
    console.log("750 ms bitti")
}, 750);


console.log("Akıncı")