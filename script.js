var button = document.getElementById("addButton");
var input = document.getElementById("input");
var ol = document.querySelector("ol");

function inputLength() {
	return input.value.length;
};


button.addEventListener("click", function(){
       if(input.value.length>0){
	     var li = document.createElement("li");
	     li.appendChild(document.createTextNode(input.value));
	     ol.appendChild(li);
          console.log()
          input.value = "";
     }

 });


var list = document.querySelector('ol');
list.addEventListener('click', function(check) {
  if (check.target.tagName === 'LI') {
    check.target.classList.toggle('checked');
  }
}, false);




var toDoInfo = {
    "task": "Thing I need to do",
    "completed": false
};


const clear = document.getElementById("clearCompletedBtn");

clear.addEventListener("click", function(){
    var checkedItems = document.getElementsByClassName("checked");

    while (checkedItems.length > 0) {
        checkedItems.item(0).remove();
    }

});


const reset = document.getElementById("emptyBtn");

reset.addEventListener("click", function(){
    var toDoItems = ol.children;
    while (toDoItems.length > 0) {
        toDoItems.item(0).remove();
    }

 });


const save = document.getElementById("saveBtn");

save.addEventListener("click", function(){
    var toDos = [];

    for (var i = 0; i < ol.children.length; i++) {
        var toDo = ol.children.item(i);

        var toDoInfo = {
            "task": toDo.innerText,
            "checked": toDo.classList.contains("checked")
        };

        toDos.push(toDoInfo);

    };

    localStorage.setItem("toDo", JSON.stringify(toDos));
});

function loadList() {
    if (localStorage.getItem("toDo") != null) {
        var toDo = JSON.parse(localStorage.getItem("toDo"));

        for (var i = 0; i < ol.length; i++) {
            var toDo = toDo[i];
            newToDoItem(toDo.task, toDo.checked);
        }
    }
};
loadList();