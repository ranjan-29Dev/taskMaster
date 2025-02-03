
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");


btn.addEventListener("click", function () {
    let taskText = inp.value.trim();

   
    if (taskText !== "") {
        let item = document.createElement("li");
        item.innerText = taskText;

        let delBtn = document.createElement("button");
        delBtn.innerText = "Delete";
        delBtn.classList.add("delete");

        item.appendChild(delBtn);
        ul.appendChild(item);
        inp.value = ""; 
    } else {
        alert("Please enter a valid task !!");
    }
});


ul.addEventListener("click", function (event) {
    if (event.target && event.target.classList.contains("delete")) {
        let taskItem = event.target.parentElement;
        taskItem.remove(); 
    }
});
