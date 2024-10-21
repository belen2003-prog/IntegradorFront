//===========store=========
import {  setproductoActivo } from "../../main";
import { handleGetProductoLs } from "../persistence/localStorage";
import { openmodal } from "./modal";

//funcion que trae los elementos y lama al reder 
export const handleGetProductsToStorage = () =>{
    const products= handleGetProductoLs();
    handlerenderlist(products);
    
};
//funcion que renderisa y filtra la seccion con sus respect elementos
export const handlerenderlist = (productosIn) =>{
    //filtrado por categoria
   // console.log("Productos a renderizar:", productosIn);
    const burgers = productosIn.filter((el)=> el.categoria == "Hamburguesas");
    const papas = productosIn.filter((el)=> el.categoria == "Papas");
    const gaseosas = productosIn.filter((el)=> el.categoria == "Gaseosas")
   
   //define cada seccion (seccion de hamburguesas , papas ,...)
    const renderProductGroup = ( productos, title) => {
        if(productos.length >0){
            const productosHTML =productos.map((producto,index) =>{
                return  ` 
                <div class='containerTargetitem' id='product-${producto.categoria}-${index}'>
                <div>
                <img src ='${producto.imagen}'/>
                <div>
                <h2>${producto.nombre}</h2>
                </div>
                <div class='targetprops'>
                <p><b>Precio:</b> $ ${producto.precio}</p>
                </div>
                </div>
                </div>
                `;
            });
            //retorna la funcion con todoslos elementos dentro de su categoria
            return `
            <section class='sectionstore'>
            <div class='containerTitleSection'>
            <h3>${title}</h3>
            </div>
            <div class='containerProductStore'>
            ${productosHTML.join("")}
            </div>
            </section>
            `;
        }else{
            return ""
        };
        
     } ;

      //renderizar cada uno de los productos dentro de su categoria
      const appContainer =document.getElementById("storecontainer");
      appContainer.innerHTML= `
      ${renderProductGroup(burgers,"Hamburguesas")}
      ${renderProductGroup(papas,"Papas")}
      ${renderProductGroup(gaseosas,"Gaseosas")}
      
      `;
      
      //añade los eventos de manera dinamica(nse cuantos productos voy a tener)
     //esto es lo que me muestra el pop cargado cuando toco algun elemento del store 
      const addEvents = (productsIn) => {
            console.log(productsIn);
         if(productsIn){
             productsIn.forEach((element, index) => {
                 const productContainer = document.getElementById(`product-${element.categoria}-${index}`);
                // if (productContainer) {    
                 productContainer.addEventListener('click',  () =>{
                   setproductoActivo(element);
                    // setproductoActivo(element);
                    console.log(element);
                    openmodal();
                 
                     });
                   // }
             });
         }
         
     };
     addEvents(burgers);
     addEvents(papas);
     addEvents(gaseosas);

};    



/*


export const handlerenderlist = (productosIn) =>{
    const burgers = productosIn.filter((el)=> el.categoria == "Hamburgesas");
    const papas = productosIn.filter((el)=> el.categoria == "Papas");
    const gaseosas = productosIn.filter((el)=> el.categoria == "Gaseosas")
    
   
      //define cada seccion (seccion de hamburguesas , papas ,...)
    const renderProductGroup = ( productos, title) => {
        if(productos.length >0){
            const productosHTML =productos.map((producto,index) =>{
                return  ` 
                <div id="product-${producto.categoria}-${index}">
                <div>
                <img src =${producto.imagen}/>
                <div>
                <h2>${producto.nombre}</h2>
                </div>
                <div>
                <p><b>Precio:</b> $ ${producto.precio}</p>
                <p><b>Categoria:</b> $ ${producto.categoria}</p>
                </div>
                </div>
                </div>
                `;
            });
            return `
            <section>
            <h3>${title}</h3>
            <div>
            ${productosHTML.join("")}
            </div>
            </section>
            `;
        }else{
            return ""
        };
        
     } ;
     //renderizar cada uno de los productos dentro de su categoria
     const appContainer =document.getElementById("storecontainer");
     appContainer.innerHTML= `
     ${renderProductGroup(burgers,"Hamburgesas")}
     ${renderProductGroup(papas,"Papas")}
     ${renderProductGroup(gaseosas,"Gaseosas")}
     
     `;
     //añade los eventos de manera dinamica

     const addEvents = (productsIn) => {
        if(productsIn){
            productsIn.forEach((element, index) => {
                const productContainer = document.getElementById(`product-${element.categoria}-${index}`);
                    productContainer.addEventListener('click',  () =>{
                        console.log("productoActivo", element)
                    })
            });
        }
        
    }
    addEvents(burgers);
    addEvents(papas);
    addEvents(gaseosas);

};
*/
