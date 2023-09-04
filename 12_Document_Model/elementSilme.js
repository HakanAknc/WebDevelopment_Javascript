// * Element Silme

// const todoList = document.querySelector(".list-group");
// const todos = document.querySelectorAll(".list-group-item");

// todos[0].remove();
// todos[1].remove();


// todos[todos.length-1].remove();

// --------------------------------------

// todoList.removeChild(todos[0]);



// * Eleman Yer değiştirme

const cardBody = document.querySelectorAll(".card-body")[1];

// <h5 class="card-title">Todo Listesi</h5>

const newTitle = document.createElement("h2");
newTitle.className = "card-title";
newTitle.textContent = "Todo Listesi - Yeni";

cardBody.replaceChild(newTitle,cardBody.childNodes[1]);