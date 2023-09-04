// Map -----> key(anahtar) , value(değer)



const map1 = new Map();

// ? Set  --> Değer atamak için
// map1.set(1,"Enes")
// map1.set(true,5)
// map1.set([1,2,3],{firstName : "Hakan", lasatName : "Akıncı"})
// map1.set(true,"5")

let value;
map1.set(34,"İstanbul")
map1.set(35,"İzmir")
map1.set(6,"Ankara")
map1.set(1,"Adana")
map1.set(7,"Antalya")
map1.set(56,"Siirt")


// ? Get  --> istenilen değeri çağrmak için kullanılır
// console.log(map1.get(6))
// console.log(map1.get(56))
// console.log(map1.get(7)),


// ? Size  --> toplam eleman sayısını verir.
// value = map1.size;

// ? Delete  --> eleman silmek için kullanılır.
// value = map1.delete(35)
// console.log(map1.size)
// console.log(value);


// ? Has  -->  bir map'in içinde aranan bir değer var mı?
// console.log(map1.has(56))


// For of methodu ile map üzerinde dönme
for(let [key,value] of map1){
    console.log(key,value)
}
