

document.addEventListener("DOMContentLoaded", function () {
  const carta = document.getElementById("carta");
  const mensaje = document.getElementById("mensaje");

  const mensajes = [
    "¡Hi, cutiepie!",
    "¡You are loved!",
    "¡Keep praying!",
    "¡You are worthy!",
    "¡God loves you!",
    "¡Blessed! ✨"
  ];

  carta.addEventListener("click", function () {
    // Girar la carta
    carta.classList.toggle("girada");

    // Cambiar mensaje aleatorio
    const aleatorio = mensajes[Math.floor(Math.random() * mensajes.length)];
    mensaje.textContent = aleatorio;
  });
});