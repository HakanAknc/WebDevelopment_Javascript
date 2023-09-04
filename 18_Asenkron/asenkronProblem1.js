// Asenkron Problemi 1

// http istekleri

const users = [
    {
        UserId : 5,
        post : "Hakan Post 1"
    },
    {
        UserId : 5,
        post : "Hakan Post 2"
    },
    {
        UserId : 5,
        post : "Hakan Post 3"
    },
    {
        UserId : 6,
        post : "Evren Post 1"
    },
    {
        UserId : 7,
        post : "Ensar Post 1"
    },
]

// user id
// post by user id

function getUserId(){
    setTimeout(() => {
        //servise gittik ve cevap aldık
        return 5;  
    }, 1000);
}

function getPostByUserId(UserId){
    console.log(UserId)
    //Gerçek bir rest api ye istek atıcaksınız
    setTimeout(() => {
        users.forEach((user)=>{
            if(user.UserId===UserId){
                console.log(user.post);
            }
        })
    }, 500);
}

// aynı anda çalıştığı için consol çıktı vermedi 
// o yüzden asenkrondan senkrona çevirmeliyiz
// calback - promise - async await
let UserId = getUserId(); 
getPostByUserId(UserId);