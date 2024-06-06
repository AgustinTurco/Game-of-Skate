const botonTruco = document.getElementById('boton-truco');
const taskText = document.getElementById('texto-truco');
const player1Button = document.getElementById('jugador1Button');
const player2Button = document.getElementById('jugador2Button');
const player1Score = document.getElementById('jugador1Score');
const player2Score = document.getElementById('jugador2Score');
const resetButton = document.getElementById('reiniciarButton');

const tasks = [
    "Kick flip",
    "Helflip",
    "Olie",
    "Backside",
    "frontside",
    "Nolie",
    "Pop Shove It",
    "Varial Flip",
    "pressure flip",
    "Half cab flip",
    "Half cab backside",
    "Half cab frontside",
    "Nolie Shove It ",
    "Nolie Backside Shove It",
];

let player1Points = 0;
let player2Points = 0;

function updatePoints() {
    player1Score.textContent = player1Points;
    player2Score.textContent = player2Points;
}

botonTruco.addEventListener('click', () => {
    const randomTask = tasks[Math.floor(Math.random() * tasks.length)];
    taskText.textContent = randomTask;
});

player1Button.addEventListener('click', () => {
    player1Points++;
    updatePoints();
});

player2Button.addEventListener('click', () => {
    player2Points++;
    updatePoints();
});

resetButton.addEventListener('click', () => {
    player1Points = 0;
    player2Points = 0;
    updatePoints();
});

// Inicializar los puntos en el DOM al cargar la página
updatePoints();
