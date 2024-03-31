const container = document.createElement("div");
container.id = "container";
document.body.prepend(container)

const headContainer = document.createElement("section");
headContainer.id = "headContainer";
container.appendChild(headContainer);

const btn = document.createElement("button");
btn.id = "btn";
btn.setAttribute("class", "btn-font");
btn.textContent = "Again!";
headContainer.appendChild(btn);

const info = document.createElement("sup");
info.id = "info";
info.setAttribute("class", "game-font");
info.textContent = "(Between 1 & 20)";
headContainer.appendChild(info);

const titleContainer = document.createElement("section");
titleContainer.id = "titleContainer";
container.appendChild(titleContainer);

const title = document.createElement("p");
title.id = "title";
title.setAttribute("class", "game-font title-font");
title.textContent = "Guess My Number";
titleContainer.appendChild(title);

const markRule = document.createElement("section");
markRule.id = "markRule";
titleContainer.after(markRule)

const hrRule = document.createElement("hr");
hrRule.id = "hrRule";
markRule.appendChild(hrRule)

const mark = document.createElement("p");
mark.id = "mark";
mark.setAttribute("class", "mark-font");
mark.textContent = "?";
markRule.appendChild(mark);

const checkScoreContainer = document.createElement("section");
checkScoreContainer.id = "checkScoreContainer";
container.appendChild(checkScoreContainer);

const checkContainer = document.createElement("div");
checkContainer.id = "checkContainer";
checkScoreContainer.appendChild(checkContainer);

const checkNumber = document.createElement("input");
checkNumber.id = "checkNumber";
checkNumber.setAttribute("class", "game-font no-spinner");
checkNumber.type = "number";
checkNumber.placeholder = "00"
checkContainer.appendChild(checkNumber);

const checkBtn = document.createElement("button");
checkBtn.id = "checkBtn";
checkBtn.setAttribute("class", "btn-font");
checkBtn.textContent = "Check!";
checkContainer.appendChild(checkBtn);

const scoreContainer = document.createElement("div");
scoreContainer.id = "scoreContainer";
checkScoreContainer.appendChild(scoreContainer);

const startContainer = document.createElement("p");
startContainer.id = "startContainer";
startContainer.setAttribute("class", "game-font");
startContainer.textContent = "start guessing...";
scoreContainer.appendChild(startContainer);

const playerScore = document.createElement("p");
playerScore.id = "playerScore";
playerScore.setAttribute("class", "game-font");
playerScore.innerHTML = " Score&nbsp;&nbsp;&nbsp;&nbsp;: "
scoreContainer.appendChild(playerScore);

const playerScoreIcon = document.createElement("span");
playerScoreIcon.id = "playerScoreIcon";
playerScoreIcon.setAttribute("class", "material-symbols-outlined");
playerScoreIcon.textContent = "license";
playerScore.prepend(playerScoreIcon);

const playerScoreValue = document.createElement("span");
playerScoreValue.id = "playerScoreValue";
playerScoreValue.textContent = "000000000000";
playerScore.appendChild(playerScoreValue);

const playerHighScore = document.createElement("p");
playerHighScore.id = "playerHighScore";
playerHighScore.setAttribute("class", "game-font");
playerHighScore.innerHTML = " Highscore: "
scoreContainer.appendChild(playerHighScore);

const playerHighScoreIcon = document.createElement("span");
playerHighScoreIcon.id = "playerHighScoreIcon";
playerHighScoreIcon.setAttribute("class", "material-symbols-outlined");
playerHighScoreIcon.textContent = "workspace_premium";
// playerHighScoreIcon.textContent = "military_tech";
// playerHighScoreIcon.textContent = "social_leaderboard";
playerHighScore.prepend(playerHighScoreIcon);

const playerHighScoreValue = document.createElement("span");
playerHighScoreValue.id = "playerHighScoreValue";
playerHighScoreValue.textContent = "000000000000";
playerHighScore.appendChild(playerHighScoreValue);

function generateNumber() {
    return Math.trunc((Math.random() * 20) + 1);
}

let guessNumber = generateNumber();

let oldGuess = "0";

let guessCount = 0;

btn.addEventListener("click",
    () => {
        playerScoreIcon.style.color = "red"
        checkNumber.disabled = "";
        checkBtn.disabled = "";
        container.style.backgroundColor = "#222222";
        playerScoreValue.textContent = "000000000000";
        mark.textContent = "?";
        startContainer.textContent = "start guessing...";
        repeatedTask();
    }
)

function gameOver() {
    setTimeout(() => {
        startContainer.textContent = "Game Lost.Try Again.";
    }, 1001);
    repeatedTask()
    playerScoreIcon.style.color = "#222222"
    checkNumber.disabled = "true";
    checkBtn.disabled = "true";
    container.style.backgroundColor = "red";
    mark.textContent = guessNumber;
    guessCount = 0;

}

function repeatedTask() {
    checkNumber.value = "";
    guessNumber = generateNumber();
}

function scoreUpdate(scoreVal) {
    scoreVal.textContent = `${+scoreVal.textContent + 1}`;
    const score = "000000000000";
    const scoreLength = scoreVal.textContent.length;
    const lastScore = score.slice(scoreLength);
    const actualScore = lastScore + scoreVal.textContent;
    if (scoreVal.textContent > playerHighScoreValue.textContent) {
        playerHighScoreValue.textContent = actualScore;
    }
    return actualScore;
}

function guessStatus(tempStatus, guessIncrement = 1) {
    startContainer.textContent = tempStatus;
    setTimeout(() => {
        startContainer.textContent = "start guessing...";
    }, 1000);
    guessCount += guessIncrement;
}

checkBtn.addEventListener("click",
    () => {
        if (guessCount > 4) {
            gameOver();
            return;
        }
        if (checkNumber.value > 20 || checkNumber.value < 0 || checkNumber.value == "") {
            checkNumber.value = "";
            guessStatus("Invalid Number");
        }
        else if (guessNumber == +checkNumber.value) {
            playerScoreValue.textContent = scoreUpdate(playerScoreValue);
            repeatedTask();
            oldGuess = "0";
            checkNumber.value = "";
            guessCount = 0;
        }
        else {
            const Oldabs = Math.abs(guessNumber - oldGuess);
            const Cheabs = Math.abs(guessNumber - checkNumber.value);
            if (Oldabs > Cheabs) {
                guessStatus("Getting Closer.");
            }
            else if (Oldabs < Cheabs) {
                guessStatus("Going Away.");
            }
            else if (oldGuess === checkNumber.value) {
                guessStatus("Same Number.")
            }
            oldGuess = checkNumber.value;
            checkNumber.value = "";
        }
    }
)