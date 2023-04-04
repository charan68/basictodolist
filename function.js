function addtolist() {
  let taskname = document.getElementById("taskname").value;
  let tododiv = document.getElementById("mytodo");
  let newtodoitem = document.createElement("div");
  let todoname = document.createElement("li");
  todoname.innerText = taskname;
  let deletebtn = document.createElement("i");
  deletebtn.classList.add("far");
  deletebtn.classList.add("fa-trash-alt");

  newtodoitem.appendChild(todoname);
  newtodoitem.appendChild(deletebtn);

  tododiv.appendChild(newtodoitem);
  document.getElementById("taskname").value = "";
}

let tododiv = document.getElementById("mytodo");
tododiv.addEventListener("click", deleteitem);

function deleteitem(e) {
  let element = e.target;
  if (element.classList[0] === "far") {
    element.parentElement.remove();
  }
}
