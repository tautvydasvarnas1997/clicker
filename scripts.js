window.addEventListener("load", function() {
    let scoreBlock = this.document.querySelector('.main-game .score');
    let score = 0;

    this.document.querySelector('.main-game .click-zone').onclick = function () {
        score += 10;
        scoreBlock.innerText = score;
    }
});