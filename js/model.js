//clase del modelo
export default class Model {
    constructor(){
        this.view = null;
        this.todos = [];
    }

    //metodo que setea la vista
    setView(view) {
        this.view = view;
    }

    //metodo que devuelve las tareas
    getTodos() {
        return this.todos;
    }

    //metodo que añade una tarea
    addTodo(todo){
        console.log(todo);
    }
}