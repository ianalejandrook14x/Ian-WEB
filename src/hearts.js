function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.style.left = Math.random() * 98 + "vw";
  heart.style.top = (Math.random() * 80 + 10) + "vh";
  heart.style.animationDuration = (2 + Math.random() * 2) + "s";
  heart.innerHTML = `
    <svg viewBox="0 0 32 29.6" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.6,0c-2.6,0-5,1.3-6.6,3.3C15.4,1.3,13,0,10.4,0C4.7,0,0,4.7,0,10.4
        c0,5.4,4.4,9.7,11.1,16.2l2.5,2.3c0.6,0.6,1.6,0.6,2.2,0l2.5-2.3C27.6,20.1,32,15.8,32,10.4C32,4.7,27.3,0,23.6,0z"
        fill="#FF5CA7" />
    </svg>
  `;

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 4000);
}

setInterval(createHeart, 300 + Math.random() * 400);
