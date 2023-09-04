const getDataButton = document.getElementById("getDataButton");
const resultDiv = document.getElementById("result");

getDataButton.addEventListener('click', () => {
    fetch("http://127.0.0.1:8000/data") // FastAPI endpointine istek gönder
        .then(response => response.json())
        .then(data => {
            resultDiv.innerText = JSON.stringify(data);
        })
        .catch(error => {
            console.error("API isteği hatası: ", error);
        });
})


