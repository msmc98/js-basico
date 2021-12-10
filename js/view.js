//clase de la vista
export default class View{
    constructor(){
        //asignamos el modelo
        this.model = null;
        //cogemos la tabla como atributo
        this.table = document.getElementById("table");
        //declaramos también el boton de add
        const buttonAdd = document.getElementById("add");
        //Usamos una arrow function para añadir el onclick del boton
        buttonAdd.onclick = () => {
            this.addTodo("Titulo", "Descripcion");
        }
    }

    //metodo para setear el mdoelo
    setModel(model){
        this.model = model;
    }

    //metodo para añadir el titulo y la descripcion
    addTodo(title, description){
        console.log(title, description);
    }
}