import { setInLocalStorage } from "./src/persistence/localstorage";
import { renderCategories } from "./src/services/categories";
import { handleGetProductsToStore } from "./src/views/store";
import './style.css'

//=====APLICACIÓN

handleGetProductsToStore();
renderCategories();

/* ===product=== */ 
const buttonAdd = document.getElementById("buttonAddElement");

buttonAdd.addEventListener('click', ()=>{
    openModal();
});

/*===POPUP===*/

const cancelButton = document.getElementById("cancelButton");
cancelButton.addEventListener('click',()=>{
    handlecancelButton();
});

const handlecancelButton = ()=>{
    closeModal()
};

//FUNCIONES ABRIR CERRAR MODAL
const openModal = ()=>{
    const modal = document.getElementById("modalPopUp");
    modal.style.display = 'flex';
};

const closeModal = ()=>{
    const modal = document.getElementById("modalPopUp");
    modal.style.display = 'none';
};

//guardar o modificar elementos
const acceptButton = document.getElementById("acceptButton");
acceptButton.addEventListener('click',()=>{
    handleSafeOrModifyElements();
});
const handleSafeOrModifyElements = ()=>{
    const nombre = document.getElementById("nombre").value,
    imagen = document.getElementById("img").value,
    precio = document.getElementById("precio").value,
    categoria = document.getElementById("categoria").value;

    let object = {
        id: new Date().toISOString(),
        nombre,
        imagen,
        precio,
        categoria,
    };
    setInLocalStorage(object);


    closeModal();
};