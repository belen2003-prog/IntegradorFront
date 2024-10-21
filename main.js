//importo la clase para poder usar las funciones que contiene 

// Limpia el localStorage al iniciar chatgpt
//localStorage.clear();
import { handleGetProductsToStorage } from "./src/views/store";
import { renderCategories } from "./src/services/categories"; 
//importo los estilos
import './style.css'
import { closemodal, openmodal } from "./src/views/modal";
import { handleSearchProductByName } from "./src/services/SearchBart";

//===aplication===
export let categoriaActiva= null;
export const SetCategoriaActiva = (categoriaIn) => {
  categoriaActiva = categoriaIn
};
export let productoActivo=null;
export const setproductoActivo =(prductoIn)=>{
  productoActivo=prductoIn;
}

renderCategories();
handleGetProductsToStorage();

//header
const buttonadd= document.getElementById("buttonaddelement");
buttonadd.addEventListener('click',()=>{
openmodal();
})

//button search
const buttonSearch = document.getElementById("buscar");
buttonSearch.addEventListener('click',()=>{
  handleSearchProductByName();
  })