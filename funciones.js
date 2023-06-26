var world = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 1],
    [1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 2, 1, 2, 1, 2, 2, 1, 2, 1, 2, 1, 1, 1, 2, 1],
    [1, 2, 1, 0, 1, 2, 1, 0, 1, 2, 2, 1, 2, 1, 2, 3, 1, 2, 1, 2, 1, 0, 1, 2, 1],
    [1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 2, 2, 1, 2, 1, 2, 1, 1, 1, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 1, 1, 2, 2, 1, 2, 2, 1],
    [1, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 1, 1, 1, 0, 2, 1, 1, 3, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 1, 1, 2, 1],
    [1, 2, 2, 2, 2, 2, 0, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 1],
    [1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 1],
    [0, 0, 0, 0, 0, 1, 2, 1, 1, 2, 1, 1, 1, 0, 0, 1, 1, 1, 3, 2, 2, 1, 2, 2, 1],
    [0, 0, 0, 0, 0, 1, 2, 2, 1, 2, 2, 2, 1, 0, 0, 1, 2, 2, 2, 2, 2, 1, 2, 2, 1],
    [1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 1, 2, 1, 0, 0, 1, 2, 2, 2, 1, 1, 1, 2, 2, 1],
    [1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 1, 2, 1, 0, 0, 1, 1, 2, 2, 1, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 1, 1, 2, 2, 2, 1, 2, 1, 3, 2, 2, 2, 3, 1, 2, 1, 2, 2, 1, 2, 1],
    [1, 2, 1, 2, 1, 2, 2, 2, 1, 1, 2, 1, 2, 1, 2, 2, 2, 1, 2, 1, 2, 2, 1, 2, 1],
    [1, 2, 1, 2, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 1, 2, 2, 1, 2, 1],
    [1, 2, 1, 2, 1, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 3, 1, 2, 2, 2, 2, 1, 2, 1],
    [1, 2, 2, 2, 1, 1, 1, 2, 1, 2, 1, 2, 2, 2, 1, 1, 1, 1, 2, 3, 2, 1, 1, 2, 1],
    [1, 2, 2, 2, 2, 3, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];
var worldDict = {
    0: 'empty',
    1: 'brick',
    2: 'coin',
    3: 'cherry'
}
var pacman = {
    x: 1,
    y: 1,
}
var score = 0;

function displayWorld() {
    output = "";

    for (var row = 0; row < world.length; row++) {
        output += "<div class = 'row'>"
        for (var x = 0; x < world[row].length; x++) {
            output += "<div class = " + worldDict[
                world[row][x]] + "></div>"
        }
        output += "</div>"
    }

    document.getElementById('world').innerHTML = output;
}
displayWorld();

function displayPacman() {
    document.getElementById('pacman').style.top = pacman.y * 20 + 'px'
    document.getElementById('pacman').style.left = pacman.x * 20 + 'px'
}
displayPacman();

var ghost = {
    x: 10,
    y: 10
};
var lives = 3;

function moveGhost() {
    var pacmanX = pacman.x;
    var pacmanY = pacman.y;

    if (ghost.x < pacmanX) {
        if (world[ghost.y][ghost.x + 1] !== 1) {
            ghost.x++;
        }
    } else if (ghost.x > pacmanX) {
        if (world[ghost.y][ghost.x - 1] !== 1) {
            ghost.x--;
        }
    }

    if (ghost.y < pacmanY) {
        if (world[ghost.y + 1][ghost.x] !== 1) {
            ghost.y++;
        }
    } else if (ghost.y > pacmanY) {
        if (world[ghost.y - 1][ghost.x] !== 1) {
            ghost.y--;
        }
    }

    // Verificar si el fantasma atrapa a Pacman
    if (ghost.x === pacmanX && ghost.y === pacmanY) {
        lives--;

        if (lives > 0) {
            document.getElementById("lives").textContent = "Vidas: " + lives;
            resetGame();
        } else {
            gameOver();
        }

    }

    displayGhost();
}
function resetGame() {
    pacman.x = 1;
    pacman.y = 1;
    ghost.x = 10;
    ghost.y = 10;
    displayPacman();
}

function gameOver() {
    alert("GAME OVER");
    stopSound();
}

function displayGhost() {
    document.getElementById("ghost").style.top = ghost.y * 20 + "px";
    document.getElementById("ghost").style.left = ghost.x * 20 + "px";
}

// Llamar a la función moveGhost en un intervalo de tiempo para actualizar el movimiento del fantasma
setInterval(moveGhost, 500);



document.onkeydown = function (e) {
    if (e.keyCode == 37) {
        if (world[pacman.y][pacman.x - 1] != 1) {
            pacman.x--;
        }
    }
    if (e.keyCode == 39) {
        if (world[pacman.y][pacman.x + 1] != 1) {
            pacman.x++;
        }
    }
    if (e.keyCode == 40) {
        if (world[pacman.y + 1][pacman.x] != 1) {
            pacman.y++;
        }
    }
    if (e.keyCode == 38) {
        if (world[pacman.y - 1][pacman.x] != 1) {
            pacman.y--;
        }
    }
    if (world[pacman.y][pacman.x] == 2) {
        score += 10;
        document.getElementById('score').innerHTML = score;
    }

    else if (world[pacman.y][pacman.x] == 3) {
        score += 50;
        document.getElementById('score').innerHTML = score;
    }
    world[pacman.y][pacman.x] = 0;

    displayPacman();
    displayWorld();
}
var sound = document.getElementById("sound");

// Función para reproducir el sonido
function playSound() {
    sound.currentTime = 0; // Reinicia el audio al inicio
    sound.play();
}

// Función para detener el sonido
function stopSound() {
    sound.pause();
    sound.currentTime = 0; // Reinicia el audio al inicio
}

sound.addEventListener("ended", playSound);
playSound();


