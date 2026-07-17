const letters = document.querySelectorAll(".generative-text span");
letters.forEach((letter) => {
  setInterval(() => {
    letter.style.setProperty("--x", `${Math.random() * 20 - 10}px`);
    letter.style.setProperty("--y", `${Math.random() * 20 - 10}px`);
    letter.style.setProperty("--r", `${Math.random() * 10 - 5}deg`);
    letter.style.setProperty("--s", `${Math.random() * 0.4 + 0.8}`);
    letter.style.setProperty("--nx", `${Math.random() * 20 - 10}px`);
    letter.style.setProperty("--ny", `${Math.random() * 20 - 10}px`);
    letter.style.setProperty("--nr", `${Math.random() * 10 - 5}deg`);
    letter.style.setProperty("--ns", `${Math.random() * 0.4 + 0.8}`);
  }, 3000);
});

let x = document.querySelectorAll(".card");

console.log(x.length);