// ?  -------PROMİSE-----------

// let check = false;

// const promise1 = new Promise((resolve, reject)=>{
//     if(check){
//         resolve("Promise başarılı")
//     }else{
//         reject("Promise başarısız...")
//     }
// })

// console.log(promise1)


// ------------------------

// let check = true;
// function createPromise(){
//     return new Promise((reslove , reject)=>{
//         if(check){
//             reslove("Promis te herhangi bir sıkıntı yok.")
//         }else{
//             reject("Sıkıntı büyük")
//         }
//     })
// }

// createPromise()
// .then((response)=>{
//     console.log(response);
// })
// .catch((error)=>{
//     console.log(error)
// })
// .finally(()=> console.log("Her zaman çalışır."))


// ------------------------

// ? Promise + XMLHTTPREQUEST

function readStudents(url){
    return new Promise((resolve , reject)=>{
        const xhr = new XMLHttpRequest();
        try {
            xhr.addEventListener("readystatechange", ()=>{
                if(xhr.readyState===4 && xhr.status===200){
                    resolve(JSON.parse(xhr.responseText));
                }
            })
        } catch (error) {
            reject(error);
        }

        xhr.open("GET",url);
        xhr.send();
    })
}

readStudents("students.json")
.then((data)=> console.log(data))
.catch((err)=> console.log(err))