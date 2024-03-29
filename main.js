const container = document.createElement("div");
container.setAttribute("id", "container");
document.body.prepend(container)

const headContainer = document.createElement("section");
headContainer.setAttribute("id", "headContainer");
container.appendChild(headContainer);

const btn = document.createElement("button");
btn.setAttribute("id", "btn");
btn.setAttribute("class", "btn-font");
btn.textContent = "Again!";
headContainer.appendChild(btn);

const info = document.createElement("sup");
info.setAttribute("id", "info");
info.setAttribute("class", "game-font");
info.textContent = "(Between 1 & 20)";
headContainer.appendChild(info);

const titleContainer = document.createElement("section");
titleContainer.setAttribute("id", "titleContainer");
container.appendChild(titleContainer);

const title = document.createElement("p");
title.setAttribute("id", "title");
title.setAttribute("class", "game-font title-font");
title.textContent = "Guess My Number";
titleContainer.appendChild(title);

const markRule = document.createElement("section");
markRule.setAttribute("id", "markRule");
titleContainer.after(markRule)

const hrRule = document.createElement("hr");
hrRule.setAttribute("id", "hrRule");
markRule.appendChild(hrRule)

const mark = document.createElement("p");
mark.setAttribute("id", "mark");
mark.setAttribute("class", "mark-font");
mark.textContent = "?";
markRule.appendChild(mark);

const checkScoreContainer = document.createElement("section");
checkScoreContainer.setAttribute("id", "checkScoreContainer");
container.appendChild(checkScoreContainer);

const checkContainer = document.createElement("div");
checkContainer.setAttribute("id", "checkContainer");
checkScoreContainer.appendChild(checkContainer);

const checkNumber = document.createElement("input");
checkNumber.setAttribute("id", "checkNumber");
checkNumber.setAttribute("class", "game-font no-spinner");
checkNumber.setAttribute("type", "number");
checkNumber.setAttribute("value", "00");
checkContainer.appendChild(checkNumber);

const checkBtn = document.createElement("button");
checkBtn.setAttribute("id", "checkBtn");
checkBtn.setAttribute("class", "btn-font");
checkBtn.textContent = "Check!";
checkContainer.appendChild(checkBtn);

const scoreContainer = document.createElement("div");
scoreContainer.setAttribute("id", "scoreContainer");
checkScoreContainer.appendChild(scoreContainer);

const startContainer = document.createElement("p");
startContainer.setAttribute("id", "startContainer");
startContainer.setAttribute("class", "game-font");
startContainer.textContent = "start guessing...";
scoreContainer.appendChild(startContainer);

const playerScore = document.createElement("p");
playerScore.setAttribute("id", "playerScore");
playerScore.setAttribute("class", "game-font");
playerScore.textContent = " Score: "
scoreContainer.appendChild(playerScore);

const playerScoreIcon = document.createElement("span");
playerScoreIcon.setAttribute("id", "playerScoreIcon");
playerScoreIcon.setAttribute("class", "material-symbols-outlined");
playerScoreIcon.textContent = "license";
playerScore.prepend(playerScoreIcon);

const playerScoreValue = document.createElement("span");
playerScoreValue.setAttribute("id", "playerHighScoreValue");
playerScoreValue.textContent = "000000000000";
playerScore.appendChild(playerScoreValue);

const playerHighScore = document.createElement("p");
playerHighScore.setAttribute("id", "playerHighScore");
playerHighScore.setAttribute("class", "game-font");
playerHighScore.innerHTML = " Highscore: "
scoreContainer.appendChild(playerHighScore);

const playerHighScoreIcon = document.createElement("span");
playerHighScoreIcon.setAttribute("id", "playerHighScoreIcon");
playerHighScoreIcon.setAttribute("class", "material-symbols-outlined");
playerHighScoreIcon.textContent = "military_tech";
playerHighScore.prepend(playerHighScoreIcon);

const playerHighScoreValue = document.createElement("span");
playerHighScoreValue.setAttribute("id", "playerHighScoreValue");
playerHighScoreValue.textContent = "000000000000";
playerHighScore.appendChild(playerHighScoreValue);