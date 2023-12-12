<<<<<<< HEAD
let calificaciones = {
    
    calificacion1: {
      input: document.getElementById("calificacion-1"),
      barra: document.getElementById("barra-1"),
    },
    calificacion2: {
      input: document.getElementById("calificacion-2"),
      barra: document.getElementById("barra-2"),
    },
    calificacion3: {
      input: document.getElementById("calificacion-3"),
      barra: document.getElementById("barra-3"),
    },
    calificacion4: {
      input: document.getElementById("calificacion-4"),
      barra: document.getElementById("barra-4"),
    },
    calificacion5: {
      input: document.getElementById("calificacion-5"),
      barra: document.getElementById("barra-5"),
    },
  };
  
  let btnGraficar = document.getElementById("btnGraficar");
  
  btnGraficar.addEventListener("click", function () {
    let sumaCalificacion = 0;
  
    for (let key in calificaciones) {
      sumaCalificacion += Number(calificaciones[key].input.value);
    }
  
    for (let key in calificaciones) {
      let promedio = (Number(calificaciones[key].input.value) * 100) / sumaCalificacion;
  
      calificaciones[key].barra.style.width = `${promedio}%`;
  
      let spanElement = document.createElement("span");
      spanElement.textContent = `${promedio.toFixed(2)}%`;
      spanElement.style.position = "absolute";
      spanElement.style.right = "5px";
      spanElement.style.top = "50%";
      spanElement.style.transform = "translateY(-50%)";
  
      while (calificaciones[key].barra.firstChild) {
        calificaciones[key].barra.removeChild(calificaciones[key].barra.firstChild);
      }
  
      calificaciones[key].barra.appendChild(spanElement);
    }
  });
=======
document.addEventListener('DOMContentLoaded', function () {
  const stars = document.querySelectorAll('.stars span');
  const percentageContainer = document.getElementById('percentage-container');
  const totalVotesContainer = document.createElement('div');
  totalVotesContainer.id = 'total-votes';
  document.querySelector('.container').appendChild(totalVotesContainer);

  const descriptions = [
    "1 Estrella",
    "2 Estrella",
    "3 Estrella",
    "4 Estrella",
    "5 Estrella"
  ];

  let selectedRatings = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  };

  stars.forEach((star, index) => {
    star.addEventListener('click', function () {
      const rating = parseInt(this.getAttribute('data-rating'));
      selectedRatings[rating]++;

      stars.forEach((star, i) => {
        star.classList.remove('active');
        if (i < rating) {
          star.classList.add('active');
        }
      });

      updatePercentage();
    });
  });

  function updatePercentage() {
    let totalRatings = 0;

    for (let key in selectedRatings) {
      totalRatings += selectedRatings[key];
    }

    for (let key in selectedRatings) {
      const percentage = (selectedRatings[key] / totalRatings) * 100 || 0;
      const description = descriptions[key - 1];
      const votes = selectedRatings[key];

      document.getElementById(`percentage-${key}`).innerHTML = `Porcentaje ${description}: ${percentage.toFixed(2)}%`;
    }

    totalVotesContainer.innerHTML = `Calificaciones globales: ${totalRatings}`;
  }
});
>>>>>>> 32a99f7fe6fa09440831fbf39b4e8a21fd9a7ec2
