let hamburguesa = document.querySelector(".hamburguesa");
let mainMenu = document.getElementById("mainMenu");

hamburguesa.addEventListener("click", function(){
   if (mainMenu.classList.contains("menu-media-hidden")) {
    mainMenu.classList.add("menu-media-visible");
    mainMenu.classList.remove("menu-media-hidden");
   } else if(mainMenu.classList.contains("menu-media-visible")) {
      mainMenu.classList.add("menu-media-hidden");
      mainMenu.classList.remove("menu-media-visible");
   }
});
