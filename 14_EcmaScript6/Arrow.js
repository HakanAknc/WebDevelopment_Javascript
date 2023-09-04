// function yazdir(){
//     console.log("Merhaba");
// }

// yazdir();


// Arraw Function Kullanımı

//parametresiz
// const yazdir = ()=>{
//     console.log("Merhaba");
// }

// yazdir();

//parametreli
// const yazdir = (name,surname)=>{
//     console.log("Merhaba " ,name,surname);
// }  

// yazdir("Hakan","Akıncı")


// 1- yazılan kod satırı tek satırdan oluşuyorsa kıvırcık parantez kullanılmaya bilir. Aşağdaki gibi
// const yazdir = (name,surname)=> console.log("Merhaba " ,name,surname);
// yazdir("Hakan","Akıncı")


// 2- yazılan kod satırı tek satırdan oluşuyorsa köşeli parantez kullanılmaya bilir. Aşağdaki gibi
// const yazdir = firstname=>{
//     console.log("Merhaba", firstname);
// }

// yazdir("Hakan")


// (1-2) yazılan kod satırı tek satırdan oluşuyorsa köşeli parantez ve kıvırcık parantez kullanılmaya bilir. Aşağdaki gibi
// const yazdir = firstname=> console.log("Merhaba", firstname);
// yazdir("Hakan")


const kupAl = (x)=>{
    return x*x*x;
}
console.log("Değer : ", kupAl(3))

// yukardaki kod aşağdaki gibi de yazılabilir
// const kupAl = x=> x*x*x;
// console.log("Değer : ", kupAl(3))