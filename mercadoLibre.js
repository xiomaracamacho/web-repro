let inputBusqueda = document.getElementById("inputBusqueda");

class Automovil {
    constructor(marca, modelo, precio, imagen, fecha, kilometraje, ubicacion) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.imagen = imagen;
        this.fecha = fecha;
        this.kilometraje = kilometraje;
        this.ubicacion = ubicacion;
        this.favorito = false; // Inicialmente, el automóvil no es un favorito
    }
}

let autos = [
    new Automovil("Chevrolet", "Fox", 115000000, "img/chevrolet.avif", "2023", "10.000 km", "Bogotá - Colombia"),
    new Automovil("Toyota", "TXL", 75000000, "img/Toyota.png", "2023", "30.000 km", "Cali - Colombia"),
    new Automovil("Mitsubishi", "4x4", 95000000, "img/mishu.jpg", "2022", "70.000 km", "Medellín - Colombia"),
    new Automovil("Mitsubishi", "Full", 120000000, "img/mitsubishi1.jpg", "2021", "20.000 km", "Cali - Colombia"),
    new Automovil("Mazda", "2023", 135000000, "img/mazda.jpg", "2022", "30.000 km", "Bogotá - Colombia"),
    new Automovil("Mazda", "2024", 145000000, "img/mazda1.jpg", "2023", "15.000 km", "Medellín - Colombia"),
    new Automovil("Mazda", "Corolla", 65000000, "img/mazda.jpg", "2022", "80.000 km", "Bogotá - Colombia")
];

// Función para mostrar los productos que coinciden con la búsqueda
function mostrarProductos(terminoBusqueda) {
    let mainContent = document.getElementById("mainContent");
    mainContent.innerHTML = ''; // Limpiar el contenido principal antes de mostrar resultados

    autos.forEach(auto => {
        if (auto.marca.toLowerCase().includes(terminoBusqueda.toLowerCase()) || auto.modelo.toLowerCase().includes(terminoBusqueda.toLowerCase())) {
            // Código para mostrar el producto según los criterios de búsqueda
            let boxproducto = document.createElement("div");
            mainContent.appendChild(boxproducto);
            boxproducto.setAttribute("class", "box-producto");

            let boximg = document.createElement("div");
            boxproducto.appendChild(boximg);
            boximg.setAttribute("class", "box-img");

            let imgAuto = document.createElement("img");
            boximg.appendChild(imgAuto);
            imgAuto.setAttribute("src", auto.imagen);
            imgAuto.setAttribute("class", "img-auto");

            let boxInfo = document.createElement("div");
            boxproducto.appendChild(boxInfo);
            boxInfo.setAttribute("class", "box-info");

            let marcaL = document.createElement("label");
            boxInfo.appendChild(marcaL);
            let txtNodeMarca = document.createTextNode(auto.marca + " " + auto.modelo);
            marcaL.appendChild(txtNodeMarca);
            marcaL.setAttribute("class", "marca");

            let precio = document.createElement("label");
            boxInfo.appendChild(precio);

            let precioFormateado = auto.precio.toLocaleString();
            let txtNodePrecio = document.createTextNode("$" + precioFormateado);
            precio.appendChild(txtNodePrecio);
            precio.setAttribute("class", "precio");

            let infoAdicional = document.createElement("label");
            boxInfo.appendChild(infoAdicional);

            // Utilizamos los valores individuales de fecha, kilometraje y ubicación para cada automóvil
            let infoText = document.createTextNode(`${auto.fecha} - ${auto.kilometraje},  ${auto.ubicacion}`);
            infoAdicional.appendChild(infoText);
            infoAdicional.setAttribute("class", "info-adicional");

            let boxCorazon = document.createElement("div");
            boximg.appendChild(boxCorazon);
            boxCorazon.setAttribute("class", "box-corazon");

            let iconoCorazon = document.createElement("i");
            boxCorazon.appendChild(iconoCorazon);
            iconoCorazon.setAttribute("class", "icon-corazon fa-regular fa-heart");

            // Agregamos un evento de clic al icono del corazón
            boxCorazon.addEventListener("click", function () {
                if (auto.favorito) {
                    iconoCorazon.classList.remove("fas");
                    iconoCorazon.classList.add("far");
                    auto.favorito = false;
                } else {
                    iconoCorazon.classList.remove("far");
                    iconoCorazon.classList.add("fas");
                    auto.favorito = true;
                }
            });

            let lineaDiv = document.createElement("hr");
            boxproducto.appendChild(lineaDiv);
            lineaDiv.setAttribute("class", "linea-div");
        }
    });
}

window.addEventListener("load", function () {
    mostrarProductos(''); // Mostrar todos los productos al cargar la página

    inputBusqueda.addEventListener('input', function () {
        mostrarProductos(inputBusqueda.value);
    });
});

//Filtros
function cargarFiltro(){
let boxFiltro = document.createElement("div");
mainContent.appendChild(boxFiltro);
boxFiltro.setAttribute("class", "box-filtro");
}
/*toggle*/
let boxToggle = document.getElementById("boxToggle");
let buttonToggle = document.getElementById("buttonToggle");

boxToggle.addEventListener("click", () => {
 if(boxToggle.classList.contains("box-toggle-off")){
    boxToggle.classList.add("box-toggle-on");
    boxToggle.classList.remove("box-toggle-off");
    buttonToggle.classList.add("button-toggle-on");
    buttonToggle.classList.remove("button-toggle-off");
 }
 else{
    boxToggle.classList.remove("box-toggle-on");
    boxToggle.classList.add("box-toggle-off");
    buttonToggle.classList.remove("button-toggle-on");
    buttonToggle.classList.add("button-toggle-off");
 }
})