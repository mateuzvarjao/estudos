const sorteia = [
    "rotateX(0deg) rotateY(0deg)",
    "rotateX(-90deg) rotateY(0deg)",
    "rotateX(0deg) rotateY(90deg)",
    "rotateX(-180deg) rotateY(0deg)",
    "rotateX(90deg) rotateY(0deg)",
    "rotateX(0deg) rotateY(-90deg)"
  ]
  
  const btn = document.querySelector(".botao")
  const dado = document.querySelector(".dado")
  
  btn.addEventListener("click", () => {
    const index = Math.floor(Math.random() * sorteia.length);
    const efeito = sorteia[index]
  
    dado.style.transform = `perspective(7cm) ${efeito}`;
  
  }); 