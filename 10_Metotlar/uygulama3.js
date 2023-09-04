// * 10'luk Sayıyı 2'liğe Çevirme Uygulaması

function convertDecimalToBinary(number){
    let binary = "";
    while(true){
        binary+=(number%2).toString();
        number=Math.floor(number/2);
        if(number==1){
            // Artık bölmrk yok döngüden çıkıcaz
            binary+=1;
            break;
        }
    }
    let result = reverse(binary);
    alert("Sonuç : " + result);
}

function reverse(binary){
    let reverseBinary = "";
    for(let i=binary.length-1; i>=0; i--){
        reverseBinary+=binary.charAt(i);
    }
    return reverseBinary;
}

convertDecimalToBinary(10);