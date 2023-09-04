// Template Literals

// function write(firstName , lastName){
    // console.log("İsim : " + firstName + " " + " Soyisim : " + lastName)
    // Template Listerals
    // Alt gr + iki kez noktalı virgül --> ``
//     console.log(`İsim : ${firstName} Soyisim : ${lastName}`)
// }

// write("Hakan" , "Akıncı")


function getUserById(userId){
    console.log(`http://localhost:8000/users/${userId}`)
}

getUserById(10)