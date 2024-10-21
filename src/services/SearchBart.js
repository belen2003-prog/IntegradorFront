import { handleGetProductoLs } from "../persistence/localStorage";
import { handlerenderlist } from "../views/store";

export const handleSearchProductByName= () =>{
    const inputHeader = document.getElementById("inputHeader");
    const products = handleGetProductoLs()

    const result = products.filter((el) =>
    el.nombre.toLowerCase().includes(inputHeader.value));

    handlerenderlist(result);
}