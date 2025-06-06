// Tenemos un li de productos (Creo que este comentario no es correcto)
// Definimos la lista de productos como un arreglo de objetos JSON
const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]

const listaProductos = document.getElementById("lista-de-productos"); //cambie .getElementByName por .getElementById porque antes solo estaba llamando a las propiedades con name y ahora buscara el ID que si esta en filtro.html ademas de  agregar";" 
//También le cambie el nombre para que sea más descriptivo
const inputFiltro = document.querySelector('.input'); //Ya agregue la class en html, hice cambio de nombre para que sea más descriptivo
const botonDeFiltro = document.getElementById("filtrar-productos"); //Añadí esta arriba y no en la línea 34
const botonTodosLosProductos = document.getElementById("todos-los-productos"); //Añadí este para llamar a mi boton de regresar a todos los productos

function displayProductos(productosAMostrar) { //ocupe displayProductos pero la acomode en una función para que sea de utilidad
  listaProductos.innerHTML= ""; // Actualice la información li por listaProductos 
  productosAMostrar.forEach(producto => {
    const d = document.createElement("div");
    d.classList.add("producto");
    
    const titulo = document.createElement("p"); //ti -> por titulo es más descriptivo
    titulo.classList.add("titulo");
    titulo.textContent = producto.nombre;

    const imagen = document.createElement("img");
    imagen.setAttribute("src", producto.img);
    
    d.appendChild(titulo);
    d.appendChild(imagen);
    listaProductos.appendChild(d);
  });
}
//en realidad agregue toda la función displayProductos

//Mostrar todos los productos
displayProductos(productos);

botonTodosLosProductos.onclick =() =>{
  inputFiltro.value =""; //Actualice $i -> inputFiltro que es más descriptivo
  displayProductos(productos);
};
/* const botonDeFiltro = document.querySelector("button");  Elimino esta linea porque ya esta arriba (linea 13) y lo llame por un ID*/


//Actualice mi botón para filtrar para que sea más ordenado y 
botonDeFiltro.onclick = function() {
  const texto = inputFiltro.value.trim().toLowerCase();//cambie $i --> inputFiltro y metí mi const texto en el botón con lo que el usuario escriba en el input utilice .trim y .toLowerCase para que no haya errores en el momento de filtrar ya sea por espacios extras o mayusculas y minisculas 
  listaProductos.innerHTML=""; //cambie li --> listaProductos

const productosFiltrados = filtrado(productos, texto );
 if (productosFiltrados.length === 0){
      const mensaje = document.createElement("p");
      mensaje.textContent= "No se encontraron productos con los datos ingresados, verifica nuestros productos."; //Ocupe esto en dado caso de que el usuario ingrese una busqueda no valida le arroje este mensaje
      listaProductos.appendChild(mensaje);//cambie li --> listaProductos
      
    }else{
      displayProductos(productosFiltrados); //Reutilice mi funcion de todos mis productos
    }
  };
//Esto lo deje tal cual:
const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto)
);
};  



/* Lo que hice con esta parte del codigo fue ejemplificarlo en la parte de arriba porque siento que se estaban poniendo cosas dobles aunque la verdad funcionaba pero se ve más ordenado con la parte de arriba */
 /*  while (li.firstChild) {
    li.removeChild(li.firstChild);
  }
 const texto = $i.value;
  console.log(texto); 
  for (let i = 0; i < productosFiltrados.length; i++) {
    const d = document.createElement("div");
    d.classList.add("producto"); 
  
   const ti = document.createElement("p"); 
    ti.classList.add("titulo"); 
    ti.textContent = productosFiltrados[i].nombre; ";"
    
   const imagen = document.createElement("img");  
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    d.appendChild(ti); 
    d.appendChild(imagen); 
    li.appendChild(d); 
  }
for (let i = 0; i < productos.length; i++) {
  var d = document.createElement("div")
  d.classList.add("producto")

  const ti = document.createElement("p"); 
  ti.classList.add("titulo"); 
  ti.textContent = productos[i].nombre;
  
 const imagen = document.createElement("img");
  imagen.setAttribute('src', productos[i].img);

  d.appendChild(ti); 
  d.appendChild(imagen); 
  li.appendChild(d); 
}
 */