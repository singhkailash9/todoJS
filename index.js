let i=1;
function addTask() {
    let title = document.getElementById("title").value
    let description = document.getElementById("description").value
    if(!title){
        alert("Add title")
    } else if(!description){
        alert("Add description")
    } else{
        let ctable = document.createElement("tr")
        ctable.setAttribute("id", `${i}`);
        ctable.innerHTML = (`<td onclick="onComplete(${i})">${title}</td><td onclick="onComplete(${i})">${description}</td><td><button class="listbtn" onclick="editRow(${i})">Edit</button></td><td class="Delete"><button class="listbtn" onclick="deleteRow(${i})">Delete</button></td>`)
        document.getElementById("todolist").appendChild(ctable);
        i=i+1;
        document.getElementById("title").value = "";
        document.getElementById("description").value = "";
    }
}
function deleteRow(n) {
    let del = document.getElementById(`${n}`)
    del.remove();
}
function editRow(n){
    let edit = document.getElementById(`${n}`);
    let edited = prompt("Enter a text");
    const date = new Date();
    const day = date.toDateString();
    const time = date.toLocaleTimeString();
    if (edited != null) {
        edit.innerHTML =
        `<tr id=${n}><td onclick="onComplete(${n})">${edited}</td><td onclick="onComplete(${n})">Edited at ${time} on ${day}</td><td><button class="listbtn" onclick="editRow(${n})">Edit</button></td><td class="Delete"><button class="listbtn" onclick="deleteRow(${n})">Delete</button></td></tr>`;
      }
}
function onComplete(n){
    let task = document.getElementById(`${n}`);
    if(task.classList.contains('incomplete')){
        task.classList.remove('incomplete')
    } else{
        task.classList.add('incomplete')
    }
}