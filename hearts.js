function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";

  const left = Math.random() * 95; // 0% - 95%
  const top = Math.random() * 90;  // 0% - 90%
  heart.style.left = left + "vw";
  heart.style.top = top + "vh";
  heart.innerHTML = `
    <svg viewBox="0 0 32 29.6" width="40" height="40" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.6,0c-2.6,0-5,1.3-6.6,3.3C15.4,1.3,13,0,10.4,0C4.7,0,0,4.7,0,10.4
        c0,5.4,4.4,9.7,11.1,16.2l2.5,2.3c0.6,0.6,1.6,0.6,2.2,0l2.5-2.3C27.6,20.1,32,15.8,32,10.4C32,4.7,27.3,0,23.6,0z"
        fill="#fff" />
    </svg>
  `;

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 1500);
}

setInterval(createHeart, 150 + Math.random() * 200);
