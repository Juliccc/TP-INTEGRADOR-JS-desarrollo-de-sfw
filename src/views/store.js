//==========STORE

import { handleGetProductLocalStorage } from "../persistence/localstorage"

export const handleGetProductsToStore = () =>{
    const products =  handleGetProductLocalStorage();
    handleRenderList(products);
}

//se encarga de filtrar y de renderizar la seccion con todos sus respectivos elementos
export const handleRenderList = (productosIn) =>{
    //filtrado de arrays por categoria 
    const burgers = productosIn.filter((el)=> el.categoria ==="Hamburguesas");
    const papas = productosIn.filter((el)=> el.categoria ==="Papas");
    const gaseosas = productosIn.filter((el)=> el.categoria ==="Gaseosas");

    //renderiza los elementos de la seccion
    const rederProductGroup = (productos, title)=>{
        if(productos.length > 0){
            const productosHTML = productos.map((producto, index)=>{
                return`<div id="product-${element.categoria}-${index}">
                <div>
                <img src=${producto.imagen}/>
                <div>
                <h2>${prducto.nombre}</h2>
                </div>
                <div>
                <p><b>Precio:</b> $ ${producto.precio}</p>
                <p><b>Categoria:</b> $ ${producto.categoria}</p>
                </div>
                </div>

                </div>`;
            });
            //retorna la seccion con todos los elementos dentro 
            return `
                <section>
                <h3>${title}</h3>
                <div>
                ${productosHTML.join("")}
                </div>
                </section>
            `
        }else{
            return ""
        }
    };

    //renderizar cada uno de los productos dentro de su categoria
    const appContainer = document.getElementById("storeContainer");
    appContainer.innerHTML = `
    ${rederProductGroup(burgers, "hamburguesas")}
    ${rederProductGroup(papas, "Papas")}
    ${rederProductGroup(gaseosas, "Gaseosas")}
    `;

    //añaden los eventos de manera dinamica
    const addEvents = (productosIn)=>{
        productosIn.array.forEach((element, index) => {
            const productContainer = document.getElementById(`
                product-${element.categoria}-${index}
                `);
                productContainer.addEventListener('click',()=>{
                    console.log("productoActivo", element);
                });
        });

    };

    addEvents(burgers)
    addEvents(papas)
    addEvents(gaseosas)
};