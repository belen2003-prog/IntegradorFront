//===========categoria=====

import { categoriaActiva } from "../../main";
import { handleGetProductoLs } from "../persistence/localStorage";
import { handlerenderlist } from "../views/store";

const handleFilterProductsByCategory =(categoryIn) =>{
    const products= handleGetProductoLs();
    switch(categoryIn){
        case categoriaActiva:
            handlerenderlist(products);
            break;
        case "Todo":
            handlerenderlist(products) 
            break;
        case "Hamburguesas":
        case "Papas":
        case "Gaseosas":
            const result = products.filter((el) =>el.categoria == categoryIn);
            handlerenderlist(result);
            break;
        default:
        break;
        case "mayorPrecio":
            const resultpreciomayor= [...products].sort((a,b) =>b.precio - a.precio);
            handlerenderlist(resultpreciomayor);
            break;
        case "menorPrecio":
            const resulmenorprecio= [...products].sort((a,b)=>  a.precio - b.precio);
            handlerenderlist(resulmenorprecio);
            break;
           
    }
};


//render vista de categorias
//exporto la funcion para poder utilizarla desde cualquier parte de laaplicacion
export const renderCategories=() =>{
    //tomamos elementos de las listas
    const ulList=document.getElementById("listFilter");
    //creamos esos elementos dentro de la lista
    ulList.innerHTML= `
    <li id="Todo">Todos los productos</li>
    <li id="Hamburguesas">Hamburgesas</li>
    <li id="Papas">Papas</li>
    <li id="Gaseosas">Gaseosas</li>
    <li id="mayorPrecio">Mayor precio</li>
    <li id="menorPrecio">Menor precio</li>
    `;
    //añado dinamicamente el evento click
    //dentro de ulList tomo todos los elementos li y le asigno la funcion click
    const liElements=ulList.querySelectorAll("li");
    liElements.forEach((liElement)=>{
        //esto lo veo en la consola 
        liElement.addEventListener("click", () =>{
            handleClick(liElement);
        });
    });
    //verificamos y manejamos el estilo del elemento activo
    const handleClick = (elemento) =>{
        liElements.forEach((el)=>{
            if(el.classList.contains("liActive")){
                el.classList.remove("liActive");
            }else{
                if(elemento == el){
                    el.classList.add("liActive");
                    handleFilterProductsByCategory(el.id);
                }
            }
        });
    };
    
};

