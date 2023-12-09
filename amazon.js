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
