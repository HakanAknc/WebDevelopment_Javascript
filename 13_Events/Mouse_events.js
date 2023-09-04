// Mouse Eventleri

/*

1- DOMContentLoaded: Bu olay, tarayıcının HTML belgesini tamamen ağ ve stil sayfaları gibi bağlantılı kaynaklar yüklenmeden analiz ettiği noktada tetiklenir. Sayfa içeriği, görüntülenmeye hazır olduğunda gerçekleşir.
2- load: Bu olay, tarayıcının tüm içerik (HTML, stil, resimler, vb.) tamamen yüklendiğinde tetiklenir. Bu, sayfanın tamamen yüklendiği ve kullanıcının etkileşime geçmeye hazır olduğu zamanı belirtir.
3- click: Bu olay, bir HTML öğesine tıkladığınızda tetiklenir. Örneğin, bir düğmeye tıkladığınızda veya bir bağlantıya tıkladığınızda bu olay gerçekleşir.
4- dblclick: Bu olay, bir HTML öğesine çift tıkladığınızda tetiklenir. Yani aynı öğeye iki kez hızlı bir şekilde tıkladığınızda gerçekleşir.
5- mouseover: Bu olay, bir HTML öğesinin üzerine fare imleci geldiğinde tetiklenir. Bir öğe üzerine imleci getirdiğinizde bu olay gerçekleşir.
6- mouseout: Bu olay, fare imleci bir HTML öğesinin üzerinden çıktığında tetiklenir. Bir öğeden imleci çıkardığınızda bu olay gerçekleşir.
7- mouseenter: Bu olay, bir HTML öğesinin sınırlarına girildiğinde tetiklenir. Bir öğenin içine girildiğinde, içeriği terk etmeden bu olay gerçekleşir.
8- mousedown: Bu olay, bir HTML öğesine tıkladığınızda, yani fare düğmesine basıldığında tetiklenir. Tıklama işlemi başladığında gerçekleşir.

*/

// 1- DOMContentLoaded
// document.addEventListener("DOMContentLoaded",run);

// function run(){
//     console.log("Sayfa Yüklendi")
// }


// 2- load
// window.addEventListener("load",run);

// function run(){
//     console.log("Sayfa Yüklendi")
// }

const cardTitle = document.querySelectorAll(".card-title")[1];
const cardBody = document.querySelectorAll(".card-body")[1];

// cardBody.addEventListener("mouseover",run);
// cardBody.addEventListener("mouseout",run);

cardBody.addEventListener("mouseenter",run);
cardBody.addEventListener("mouseleave",run);


function run(e){
    console.log(e.type);
}