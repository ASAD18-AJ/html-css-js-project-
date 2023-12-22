var timer = 60;
var score = 0;
var hitrn = '';

function increaseScore() {

    score += 10;
    document.querySelector("#scoreval").textContent = score;
}


function getNewHit() {
    hitrn = Math.floor(Math.random() * 10);
    console.log(hitrn);
    document.querySelector("#hitval").textContent = hitrn;
}



function makeBubble() {
    var clutter = "";

    for (let index = 1; index <= 90; index++) {
        var aa = Math.floor(Math.random() * 10)
        clutter += `<div class="Bubble">${aa}</div> `;
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else {
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>GAME OVER</h1>`;
        }
    }, 1000);
}

document.querySelector("#pbtm").addEventListener("click", function (dets) {
    console.log(Number(dets.target.textContent));
    var clicked = Number(dets.target.textContent);
    if (clicked === hitrn) {
        increaseScore();
        makeBubble();
        getNewHit();
    }
});

runTimer();
makeBubble();
getNewHit();
// increaseScore();
