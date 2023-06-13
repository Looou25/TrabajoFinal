
const imagenes = document.querySelectorAll('img');
const btnTodos = document.querySelector('.todos');
const btnEntradas = document.querySelector('.entradas');
const btnEnsaladas = document.querySelector('.ensaladas');
const btnPrincipales = document.querySelector('.principales');
const btnAperitivos = document.querySelector('.aperitivos');
const btnBebidas = document.querySelector('.bebidas');
const btnPostres = document.querySelector('.postres');
const contenedorPlatos = document.querySelector('.platos');
document.addEventListener('DOMContentLoaded',()=>{
    platos();
});
let menuVisible = false;

function mostrarOcultar(){
if(menuVisible){
    document.getElementById("nav").classList ="";
    menuVisible = false;
}else{
    document.getElementById("nav").classList ="responsive";
    menuVisible = true;
}
}


const observer = new IntersectionObserver((entries,observer) =>{
    entries.forEach(entry=>{
    if(entry.isIntersecting){
        const imagen = entry.target;
        observer.unobserve(imagen);
    }
    });
});

imagenes.forEach(imagen=>{
    imagen.src = imagen.dataset.src;
    observer.observe(imagen);
});



const platos = () =>{
    let platosArreglo = [];
    const platos = document.querySelectorAll('.plato');
    
    platos.forEach(platos=> platosArreglo = [...platosArreglo, platos]);

    const entradas = platosArreglo.filter(entrada=> entrada.getAttribute('data-plato') === 'entrada');
    const ensaladas = platosArreglo.filter(ensalada=> ensalada.getAttribute('data-plato') === 'ensalada');
    const principales = platosArreglo.filter(principal=> principal.getAttribute('data-plato') === 'principal');
    const aperitivos = platosArreglo.filter(aperitivo=> aperitivo.getAttribute('data-plato') === 'aperitivo');
    const bebidas = platosArreglo.filter(bebida=> bebida.getAttribute('data-plato') === 'bebida');
    const postres = platosArreglo.filter(postre=> postre.getAttribute('data-plato') === 'postre');

    mostrarPlatos(entradas,ensaladas,principales,aperitivos,bebidas,postres,platosArreglo)
}

const mostrarPlatos =(entradas,ensaladas,principales,aperitivos,bebidas,postres,todos) =>{
    btnEntradas.addEventListener('click', () =>{
        limpiarHtml(contenedorPlatos);
        entradas.forEach(entrada=> contenedorPlatos.appendChild(entrada));
    });
    btnEnsaladas.addEventListener('click', () =>{
        limpiarHtml(contenedorPlatos);
        ensaladas.forEach(ensalada=> contenedorPlatos.appendChild(ensalada));
    });
    btnPrincipales.addEventListener('click', () =>{
        limpiarHtml(contenedorPlatos);
        principales.forEach(principal=> contenedorPlatos.appendChild(principal));
    });
    btnAperitivos.addEventListener('click', () =>{
        limpiarHtml(contenedorPlatos);
        aperitivos.forEach(aperitivo=> contenedorPlatos.appendChild(aperitivo));
    });
    btnBebidas.addEventListener('click', () =>{
        limpiarHtml(contenedorPlatos);
        bebidas.forEach(bebida=> contenedorPlatos.appendChild(bebida));
    });
    btnPostres.addEventListener('click', () =>{
        limpiarHtml(contenedorPlatos);
        postres.forEach(postre=> contenedorPlatos.appendChild(postre));
    });
   btnTodos.addEventListener('click',()=>{
    limpiarHtml(contenedorPlatos);
    todos.forEach(todo=> contenedorPlatos.appendChild(todo));
   })
}

const limpiarHtml = (contenedor) =>{
    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild);
    }
};
function flymetothemoon() 
{
    window.scrollTo({top: 0, behavior: 'smooth'});
    
}