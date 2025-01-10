const palos = ["Corazones", "Diamantes", "Tréboles", "Picas"];
const valores = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A",
];
const cartaDiv = document.getElementById("carta");
const generarCartaBtn = document.getElementById("generarCartaBtn");

generarCartaBtn.addEventListener("click", () => {
  const palo = palos[Math.floor(Math.random() * palos.length)];
  const valor = valores[Math.floor(Math.random() * valores.length)];
  cartaDiv.textContent = `${valor} de ${palo}`;
});
