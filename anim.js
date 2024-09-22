// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
            { text: "Hey, baby, baby", time: 10.7 },
            { text: "Your heart's too big to be treated small", time: 13.7 },
            { text: "So please don’t blame me, blame me", time: 15.7 },
            { text: "For trying to be the one who could have it all", time: 20.7 },
            { text: "You know that it's stupid, stupid", time: 23.7 },
            { text: "Telling you it's dark when you see the light", time: 26.7 },
            { text: "And I know you ain't foolish, foolish", time: 29.7 },
            { text: "Just give me one chance I could treat you right", time: 32.7 },
            { text: "So I say", time: 33.7 },
            { text: "Will I ever be too far away when you feel alone?", time: 37.7 },
            { text: "No way, no!", time: 41.7 },
            { text: "Will I ever back down my sword to protect our home?", time: 44.7 },
            { text: "No way, no!", time: 45.7 },
            { text: "Will I ever spend a day not telling you you're beautiful?", time: 50.7 },
            { text: "No way, no!", time: 52.7 },
            { text: "No way, no way, no", time: 54.7 },
            { text: "No way, no way, no", time: 57.7 },
            { text: "My sister, sister", time: 61.7 },
            { text: "Told me that love ever hits your eyes", time: 63.7 },
            { text: "I promise you'll miss her, miss her", time: 66.7 },
            { text: "The second that she walks right out your sight", time: 70.7 },
            { text: "So we should just do it, do it, do it", time: 74.7 },
            { text: "Cause I don't want to risk her being right", time: 76.7 },
            { text: "Let's not be foolish", time: 79.7 },
            { text: "Don't you know that family never lies?", time: 82.7 },
            { text: "I promise that", time: 84.7 },
            { text: "Will I ever be too far away when you feel alone?", time: 87.7 },
            { text: "No way, no!", time: 90.7 },
            { text: "Will I ever back down my sword to protect our home?", time: 93.7 },
            { text: "No way, no!", time: 97.7 },
            { text: "Will I ever spend a day not telling you you're beautiful?", time: 100.7 },
            { text: "No way, no!", time: 105.7 },
            { text: "No way, no way, no", time: 107.7 },
            { text: "No way, no way, no", time: 109.7 },
            { text: "Hey, lady, lady", time: 140.7 },
            { text: "Life's too short to be waiting long", time: 142.7 },
            { text: "So let's not waste it, waste it", time: 145.7 },
            { text: "When we both know you're the one", time: 148.7 },
            { text: "Will I ever be too far away when you feel alone?", time: 152.7 },
            { text: "No way, no!", time: 159.7 },
            { text: "Will I ever back down my sword to protect our home?", time: 163.7 },
            { text: "No way, no!", time: 167.7 },
            { text: "Will I ever spend a day not telling you you're beautiful?", time: 171.7 },
            { text: "No way, no!", time: 175.7 },
            { text: "No way, no way, no", time: 179.7 },
            { text: "No way, no way, no", time: 183.7 },
            { text: "No way, no way, no", time: 187.7 },
            { text: "No way, no way, no", time: 191.7 },
            { text: "No way, no way, no", time: 195.7 },
            { text: "No way, no way, no", time: 199.7 },
            { text: "No way, no way, no", time: 203.7 },
            { text: "No way, no way, no", time: 207.7 },
            { text: "No way, no way, no", time: 211.7 },
            { text: "No way, no way, no", time: 215.7 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 4);

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);