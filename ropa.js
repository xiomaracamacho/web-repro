let rightArrow = document.getElementById("rightArrow");
let leftArrow = document.getElementById("leftArrow");
let motoxtz = document.getElementById("motoxtz");
let motopulsar = document.getElementById("motopulsar");
let motoninja = document.getElementById("motoninja");
let numeroImagen = 1;

leftArrow.addEventListener("click", function() {
    if (numeroImagen === 2) {
        motopulsar.classList.add("moto-pulsar-hidden-right");
        motopulsar.classList.remove("moto-pulsar-visible");
        motoxtz.classList.add("moto-xtz-visible");
        motoxtz.classList.remove("moto-xtz-hidden");
        numeroImagen--;
    }
    else if (numeroImagen === 3) {
        motopulsar.classList.add("moto-pulsar-visible");
        motopulsar.classList.remove("moto-pulsar-hidden-right");
        motopulsar.classList.remove("moto-pulsar-hidden-left");
        motoninja.classList.remove("moto-ninja-visible");
        motoninja.classList.add("moto-ninja-hidden");
        numeroImagen--;
    }
    
});
rightArrow.addEventListener("click", function() {
    if (numeroImagen === 1) {
        motoxtz.classList.remove("moto-xtz-visible");
        motoxtz.classList.add("moto-xtz-hidden");
        motopulsar.classList.remove("moto-pulsar-hidden-right");
        motopulsar.classList.add("moto-pulsar-visible");
        numeroImagen++;
    }
    else if (numeroImagen === 2) {
        motopulsar.classList.add("moto-pulsar-hidden-left");
        motopulsar.classList.remove("moto-pulsar-visible");
        motoninja.classList.add("moto-ninja-visible");
        motoninja.classList.remove("moto-ninja-hidden");
        numeroImagen++;
    }
});
