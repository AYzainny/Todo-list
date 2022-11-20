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
    alert("clear button clicked");
});


const reset = document.getElementById("emptyBtn");

reset.addEventListener("click", function(){
    alert("reset button clicked");
});



const save = document.getElementById("saveBtn");

save.addEventListener("click", function(){
    alert("save button clicked");
});
