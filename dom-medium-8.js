let clickCount = 0;

function createImage() {
  const image = document.createElement('div');
  image.src = 'path/to/your/image.jpg';
  image.alt = 'div';
  image.classList.add('shape');

  image.addEventListener('click', function() {
    clickCount++;

    if (clickCount > 3) {
      clickCount = 1;
    }

    if (clickCount === 1) {
      image.style.borderRadius = '0';
    }
    if (clickCount === 2){
        image.style.backgroundColor = 'blue'
    }
     else if (clickCount === 3) {
      image.style.borderRadius = '50%';
    }
    
  });

  image.addEventListener('dblclick', function() {
    image.style.borderRadius = '0';
  });

  document.body.appendChild(image);
}
createImage();