const button = document.getElementById("runaway-button");

button.addEventListener("mouseover", () => {
 
  const maxX = window.innerWidth - button.offsetWidth;
  const maxY = window.innerHeight - button.offsetHeight;

  
  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  
  button.style.transform = `translate(${x}px, ${y}px)`;
});
