// Put this script just before </body> tag on every page

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + 'vw'; // random horizontal start position
  heart.style.animationDuration = (3 + Math.random() * 3) + 's'; // random speed
  heart.style.opacity = Math.random();

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000); // remove heart after animation
}

// Create hearts every 300ms (adjust as you like)
setInterval(createHeart, 300);
