//=======localStorage========
//traer productos del ls
export const handleGetProductoLs = () =>{
   const products = JSON.parse(localStorage.getItem("products"));
     if(products){
          return products;
     }else{
         return [];
     }
    /*
     const products = localStorage.getItem("products");
     //console.log("Valor de products:", products);
     if (products) {
         return JSON.parse(products);
     } else {
        // Inicializa localStorage con un array vacío
        localStorage.setItem("products", JSON.stringify([]));
         return [];
     }*/
 } ;
//guardar en el ls
export const setInLs = (productIn) =>{
    //traigo los elementos
    let producsInls =handleGetProductoLs();
   // console.log(productIn);
    const existingIndex =producsInls.findIndex((productsLocal) => productsLocal.id == productIn.id
    );
    //verifico si existe el producto
    if(existingIndex!== -1){
    //si existe debe reemplazarse acediendo al indice
      producsInls[existingIndex] = productIn;
        
    }else{
    //si no existe lo agrega 
        producsInls.push(productIn);
       
    }
 //seteo el nuevo array
 localStorage.setItem("products",JSON.stringify(producsInls));
 
};


