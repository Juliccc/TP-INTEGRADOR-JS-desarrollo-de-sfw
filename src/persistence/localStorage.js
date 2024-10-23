//========LOCALSTORAGE

export const handleGetProductLocalStorage = () =>{
    const products = JSON.parse(localStorage.getItem('products'));
    if(products){
        return products
    }else{
        return [];
    }
};

//guardarEn localStorage
//recibir el producto
export const setInLocalStorage = (productIn)=>{
    //traer los elementos
    let productsInLocal = handleGetProductLocalStorage();

    const existingIndex = productsInLocal.findIndex((productsLocal)=>
    productsLocal.id === productsIn.id
    )

//verificar si el elemento existe
    if(existingIndex !== -1){
//si existe debe reemplazarse
        productsInLocal[existingIndex] = productIn;
    }else{
//sino agregarse
        productsInLocal.push(productIn);
    }
//setear el nuevo array
localStorage.setItem('products', JSON.stringify(productsInLocal));
};