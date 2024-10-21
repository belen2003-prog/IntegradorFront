import Swal from "sweetalert2";
import { productoActivo } from "../../main";
import { handleGetProductoLs, setInLs } from "../persistence/localStorage";
import { closemodal } from "../views/modal";
import { handleGetProductsToStorage, handlerenderlist } from "../views/store";

  //=======PRODUCTOS======
 
 
  export const handleSaveOfModifyProduct = () => {
  const nombre =document.getElementById("nombre").value;
  const imagen =document.getElementById("img").value;
  const precio =document.getElementById("precio").value;
  const categoria =document.getElementById("categoria").value;
  //mostrar alerta si no completa todos los campos
  if (!nombre || !imagen || !precio || categoria === "Seleccione una categoria") {
    alert("Por favor, completa todos los campos.");
    return;
  }
  let object =null
  if(productoActivo){
    object={
    ...productoActivo,
    nombre,
    imagen,
    precio,
    categoria,
    };
  }else{
    object= {
      id: new Date().toISOString(),
      nombre,
      imagen,
      precio,
      categoria,
    };
  }
  
  Swal.fire({
    title: "correcto",
    text: "producto guardado correctamente !",
    icon: "success",
   })
 

  setInLs(object);
  // Agrega el console.log aquí
  console.log("Guardando producto:", object);
  handleGetProductsToStorage(); // Vuelvo a cargar la lista de productos después de agregar uno nuevo
  closemodal();
  };

  //eliminar producto del storage
  export const handleDeleteProduct = () => {
    Swal.fire({
      title: "¿Desea eliminar el rpoducto?",
      text: "Si lo eliminas sera permanente!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "si,eliminar!"
    }).then((result) => {
      if (result.isConfirmed) {
        const products = handleGetProductoLs();
        const result = products.filter((el) => el.id != productoActivo.id);
         //seteo el nuevo array
         closemodal();
        localStorage.setItem("products",JSON.stringify(result));
        const newproducts = handleGetProductsToStorage();
        handlerenderlist(newproducts);
        
      }else{
        closemodal();
      }
    });


  };
