//Esto sirve para que javascript fucione cuando el html este cargado
document.addEventListener("DOMContentLoaded", function(){
    const title = document.getElementById("title");
    const description = document.getElementById("description");
    const table = document.getElementById("table");
    const alert = document.getElementById("alert");

    const buttonAdd = document.getElementById("add");
    let id = 1;

    function removeTodo(id){
        document.getElementById(id).remove();
    }
    
    function addTodo(){
        if(title.value === "" || description.value === ""){
            alert.classList.remove("d-none");
            alert.innerText = "Title and description are required";
            return;
        }

        alert.classList.add("d-none");
        const row = table.insertRow();
        row.setAttribute("id", id++)
        row.innerHTML = 
        `<td>${title.value}</td>
        <td>${description.value}</td>
        <td class="text-center">
            <input type="checkbox">
        </td>
        <td class="text-right">
            <button class="btn btn-primary mb-1 ml-1">
                <i class="fa fa-pencil"></i>
            </button>
        </td>
        `;

        const buttonRemove = document.createElement("button");
        buttonRemove.classList.add("btn", "btn-danger", "mb-1", "ml-1");
        buttonRemove.innerHTML = `<i class="fa fa-trash"></i>`;
        buttonRemove.onclick = function(e){
            removeTodo(row.getAttribute("id"));
        }
        row.children[3].appendChild(buttonRemove);
    }

    buttonAdd.onclick = addTodo;
});
