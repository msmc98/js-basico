//importación de las clases de vista y de mdoelo
import Model from "./model.js";
import View from "./view.js";

//Esto sirve para que javascript fucione cuando el html este cargado
document.addEventListener("DOMContentLoaded", function(){
    //creamos un obejto vista y un objeto modelo
    const model = new Model();
    const view = new View();
    //seteamos la vista y el modelo
    model.setView(view)
    view.setModel(model);
});