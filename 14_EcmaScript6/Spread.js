// Spread Operatörü ...

// let numbers = [10,20,30,40]
// function add(a,b,c,d){
//     console.log(a+b+c+d)
// }

// Eski Yöntem
// add(numbers[0],numbers[1],numbers[2],numbers[3])

//Yeni yöntem
// add(...numbers)
/*
   ...numbers  ==>  numbers[0],numbers[1],numbers[2],numbers[3]
*/


const numbers = [1,2,3,4,5,6,7,8,9]

let [a,b,...kalanSayilar] = numbers

console.log(a,b,kalanSayilar)