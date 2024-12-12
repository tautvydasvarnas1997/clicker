window.addEventListener("load", function() {
    let scoreBlock = this.document.querySelector('.main-game .score');
    let score = 0;

    this.document.querySelector('.main-game .click-zone').onclick = function () {
        score += 10;
        scoreBlock.innerText = score;
    }

    this.document.querySelectorAll('.factory').forEach(function(fc) {
        let factory = {
            title: fc.querySelector('.title').innerText
        };
        console.log(factory);
    });
});