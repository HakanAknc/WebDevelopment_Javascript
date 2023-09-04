// Set
// key-value mantığı ile çalışmaz tek değer alırlar.

const set = new Set();

// add methodu ile yazdırılır.

set.add(true)
set.add(3.14)
set.add("Hakan") 
// set.add("Hakan")  --> hakan değeri önceden bir kez ekendiği için bir daha eklenmedi 
// set.add("Hakan")
// set.add("Hakan")
// set.add("Hakan")
set.add(7)
set.add({username : "Hakan", password : "123"})
set.add([1,2,3,4])

//size
// console.log(set.size);


// delelte
// set.delete("Hakan")
// console.log(set.size)


//has
console.log(set.has("Ali"))