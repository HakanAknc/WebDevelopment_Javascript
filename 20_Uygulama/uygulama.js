// fetch('dosya.json')
//     .then(cevap => cevap.json())
//     .then(veri => console.log(veri))

// const btnCek = document.querySelector("#veri-oku");
// btnCek.addEventListener("click",function(){
//     fetch('/.dosya.json')
//     .then(cevap => cevap.json())
//     .then(veri => console.log(veri));
// })


fetch("dosya.json")
    .then(response => {
        console.log(response)
    })