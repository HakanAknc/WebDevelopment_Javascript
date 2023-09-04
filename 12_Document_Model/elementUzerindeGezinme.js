// * HTML Elementleri Üzerinde Gezinme

const todo = document.querySelector(".list-group-item");
const todoList = document.querySelector(".list-group");
// const card = document.getElementsByClassName("card")[0];
const card = document.querySelector(".card");

const row = document.querySelector(".row")

let value;

// Anneden çoçuklara erişmek
value = todoList;
value = todoList.children[0];
value = todoList.children[3];
value = todoList.children[todoList.children.length-1];
value = todoList.children[3].textContent = "Değişti";


// Çoçuktan Anneye erişmek
value = todo;
value = todo.parentElement;
let ul = todo.parentElement;
let cardBody = ul.parentElement;
// let row = cardElement.parentElement;


value = row.children[0].children[3].children[0].textContent="Todo Listesi Başlığı Değişti";

let todo3 = row.children[0].children[3].children[2].children[2];
todo3.textContent = "Todo3 Değişti";
todo3.style.backgroundColor = "red";
todo3.style.color = "white";



console.log(value);