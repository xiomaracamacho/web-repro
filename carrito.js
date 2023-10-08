let numRestar = document.getElementById("numRestar");
let numView = document.getElementById("numView");
let numSumar = document.getElementById("numSumar");
let cantProductos = document.getElementById("cantProductos");
let boton= document.getElementById("boton");
let valorUnitarioProducto = 48000;
let valorUnitarioProductoStr = new Intl.NumberFormat('de-DE').format
(valorUnitarioProducto);
document.getElementById("valorUnitarioProducto").innerHTML = valorUnitarioProductoStr;

numRestar.addEventListener("click", function(){
    let aux = numView.innerHTML.toString();
    let auxInt = parseInt(aux);
    if(auxInt){
        auxInt--;
    document.getElementById("numView").innerHTML = auxInt.toString();
    if (auxInt ==1 ){
    document.getElementById("cantProductos").innerHTML = auxInt.toString() + " producto";
    }
    else if (auxInt == 0 || auxInt > 1){
        document.getElementById("cantProductos").innerHTML = auxInt.toString() + " productos";
    }
    let auxSobtotal=auxInt*valorUnitarioProducto;
    let auxSobtotalStr= new Intl.NumberFormat("de-DE").format(auxSobtotal);
    document.getElementById("valorSubTotal").innerHTML = auxSobtotalStr.toString();
    }
  
   
})
numSumar.addEventListener("click", function(){
    let aux = numView.innerHTML.toString();
    let auxInt = parseInt(aux);
    if(auxInt < 10){
    auxInt++;
    document.getElementById("numView").innerHTML = auxInt.toString();
    if (auxInt ==1 ){
        document.getElementById("cantProductos").innerHTML = auxInt.toString() + " productos";
        }
        else if (auxInt == 0 || auxInt > 1){
            document.getElementById("cantProductos").innerHTML = auxInt.toString() + " producto";
        }
        let auxSobtotal=auxInt*valorUnitarioProducto;
        let auxSobtotalStr= new Intl.NumberFormat("de-DE").format(auxSobtotal);
        document.getElementById("valorSubTotal").innerHTML = auxSobtotalStr.toString();
    }

    boton.addEventListener("click", function(){
        document.getElementById("numView").innerHTML="0";
        document.getElementById("cantProductos").innerHTML="0";
        document.getElementById("valorSubTotal").innerHTML="0";

    })
})

