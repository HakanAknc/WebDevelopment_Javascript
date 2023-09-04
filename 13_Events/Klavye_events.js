// Klavye Eventleri

// keypress  : harf ve sayılarda tetiklenen eventtir.

// keydown   : klavyede ki bütün tuşlarda çalışan eventtir.

// keyup     : tuştan elini kaldırdığında çalışan eventtir.


document.addEventListener("keydown",run);

function run(e){
    console.log(e.keyCode);
    if(e.keyCode == 116){
        alert("Sayfa yenileme engellendi.")
    }

    e.preventDefault();
}