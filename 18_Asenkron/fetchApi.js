// ? -------FETCH APİ------------

// function getStudents(url) {
//     fetch(url)
//         .then((response) => {
//             return response.json();
//         })
//         .then((data) => console.log(data))
//         .catch((err) => console.log(err))
// }

// getStudents("students.json")


function getData(url){
    fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
}

getData("dosya.json")