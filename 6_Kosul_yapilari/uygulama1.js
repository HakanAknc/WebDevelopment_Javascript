// Ehliyet sınavı kontrol yapısı

let yas = Number(prompt("Yaşınız : "))
let para = Number(prompt("Bütçeniz : "))

if(yas>=18 && para>=3000){
    alert("Ehlyet sınavına katılabilirsiniz.")
}
else{
    alert("Ehliyet sınavına katılmazsınız...")
}