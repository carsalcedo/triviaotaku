export class UI {
    constructor(){}

    showQuestion(text){
        const questionTitle = document.getElementById('question')
        questionTitle.innerText = text;
    }

    showChoices(choices, callback){
        const choicesContainer = document.getElementById('choises');
        choicesContainer.innerHTML = '';

        for (let i = 0; i < choices.length; i++) {
            const button = document.createElement("button");
            button.addEventListener("click", () => callback(choices[i]));
            button.className = "button";
            button.innerText = choices[i];
      
            choicesContainer.append(button);
          }
    }

    showScores(score) {
        const gameOverHTML = `
          <h1>Resultado</h1>
          <h2 id="score">${score} Puntos</h2>
          `;
    
        const element = document.getElementById("quiz");
        element.innerHTML = gameOverHTML;
      }

      showProgress(currentIndex, total) {
        let element = document.getElementById("progress");
        element.innerHTML = `Question ${currentIndex} of ${total}`;
      }
}
