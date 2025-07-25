document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll('.carousel-images img');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  let index = 0;

  function showImage(i) {
    images.forEach(img => img.classList.remove('active'));
    images[i].classList.add('active');
  }

  prevBtn.addEventListener('click', () => {
    index = (index - 1 + images.length) % images.length;
    showImage(index);
  });

  nextBtn.addEventListener('click', () => {
    index = (index + 1) % images.length;
    showImage(index);
  });

  showImage(index); 
});

  function openPopup(title, text) {
    document.getElementById('popup-title').innerText = title;
    document.getElementById('popup-text').innerText = text;
    document.getElementById('popup').style.display = 'flex';
  }

  function closePopup() {
    document.getElementById('popup').style.display = 'none';
  }
  
   document.querySelectorAll('.popup-container').forEach((container) => {
    const button = container.querySelector('.popup-toggle-button');
    const content = container.querySelector('.popup-content-inside');

    button.addEventListener('mouseenter', () => {
      container.classList.add('active');
    });

    // Ferme quand on clique en dehors
    document.addEventListener('click', (e) => {
      if (!container.contains(e.target)) {
        container.classList.remove('active');
      }
    });
  });