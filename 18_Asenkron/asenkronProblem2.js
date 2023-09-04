// Asenkron problem1 'in devamıdır.

const users = [
    {
        userId: 5,
        post: "Hakan Post 1"
    },
    {
        userId: 5,
        post: "Hakan Post 2"
    },
    {
        userId: 5,
        post: "Hakan Post 3"
    },
    {
        userId: 6,
        post: "Evren Post 1"
    },
    {
        userId: 7,
        post: "Ensar Post 1"
    },
]


function getUserId(callback) {
    setTimeout(() => {
        //servise gittik ve cevap aldık
        // return 5; 
        let userId = 5;
        callback(userId);
    }, 1000);
}

function getPostByUserId(userId) {
    //Gerçek bir rest api ye istek atıcaksınız
    setTimeout(() => {
        users.forEach((user) => {
            if (user.userId === userId) {
                console.log(user.post);
            }
        })
    }, 500);
}

getUserId(getPostByUserId);

// let UserId = getUserId();
// getPostByUserId(UserId);
