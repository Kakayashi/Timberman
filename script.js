left = document.getElementById("3");
right = document.getElementById("1");
var blokada = false;
var score = document.getElementById("score");
var wynik = 0;
var czas = 100;
odwroc();
var bar = document.getElementById('bar');
time();

function time() {
    if (czas <= 0) {
        gameover();
    }
    else {
        czas = czas - 1;
        var x = czas + "%";
        bar.style.width = x;
        setTimeout(time, 50);
    }
}
function addtime() {
    if (czas < 95) {
        czas = czas + 5;
    }
    else if (czas > 95 && czas <= 100) {
        czas = 100;
    }
}

for (i = 23; i >= 2; i = i - 3) {
    el = document.getElementById(i);
    el.classList.add("tree");
}

function sound() {
    var chop = document.createElement("audio");
    chop.src = "chop.mp3";
    chop.play();
}

document.addEventListener("keypress", e => {
    console.log(e.key);
    var pole = document.getElementById("field");
    if (e.key == "a") {
        addtime();
        sound();
        const el = document.createElement("div");
        el.classList.add("animationR", "tree", "p")
        pole.appendChild(el);
        moveLeft();
    }
    else if (e.key == "d") {
        addtime();
        sound();
        const el = document.createElement("div");
        el.classList.add("animationL", "tree", "p")
        pole.appendChild(el);
        moveRight();
    }
})

function moveLeft() {
    point();


    left.classList.add("man");
    right.classList.remove("man");
    down();
    sprawdz();
}

function moveRight() {
    point();
    right.classList.add("man");
    left.classList.remove("man");
    down();
    sprawdz();
}

function down() {
    for (i = 0; i < 7; i++) {
        //console.log(i)
        var k = 1 + i * 3;

        var el1 = document.getElementById(k)
        var el2 = document.getElementById(k + 1)
        var el3 = document.getElementById(k + 2)
        var el4 = document.getElementById(k + 3)
        var el5 = document.getElementById(k + 4)
        var el6 = document.getElementById(k + 5)

        el1.classList.remove("branch", "tree");
        el3.classList.remove("branch", "tree");

        if (el4.classList.item(0) == "branch" || el4.classList.item(1) == "branch" || el4.classList.item(2) == "branch") {
            el1.classList.add("branch");
        }
        if (el5.classList.item(0) == "branch" || el5.classList.item(1) == "branch" || el5.classList.item(2) == "branch") {
            el2.classList.add("branch");
        }
        if (el6.classList.item(0) == "branch" || el6.classList.item(1) == "branch" || el6.classList.item(2) == "branch") {
            el3.classList.add("branch");
        }

    }
    var el1 = document.getElementById(24);
    var el2 = document.getElementById(22);
    el1.classList.remove("branch", "tree");
    el2.classList.remove("branch", "tree");
    var x = Math.floor(Math.random() * 11);
    if (x < 7 && blokada == false) {
        var y = Math.floor(Math.random() * 11);
        if (y < 5) {
            el1.classList.add("branch");
            blokada = true;
        }
        else if (y >= 5) {
            el2.classList.add("branch");
            blokada = true;
        }
    }
    else {
        blokada = false;
    }
    odwroc();
}

function sprawdz() {
    if ((left.classList.item(0) == "man" || left.classList.item(1) == "man" || left.classList.item(2) == "man") && (left.classList.item(0) == "branch" || left.classList.item(1) == "branch" || left.classList.item(2) == "branch")) {
        gameover()
    }
    if ((right.classList.item(0) == "man" || right.classList.item(1) == "man" || right.classList.item(2) == "man") && (right.classList.item(0) == "branch" || right.classList.item(1) == "branch" || right.classList.item(2) == "branch")) {
        gameover()
    }
}

function gameover() {
    console.log("Game Over!")
}

function odwroc() {
    for (i = 22; i >= 0; i = i - 3) {
        var k = i;
        el = document.getElementById(k);

        if (el.classList.item(0) == "branch" || el.classList.item(1) == "branch" || el.classList.item(2) == "branch" || el.classList.item(3) == "branch") {

            el.classList.add("branchR");
        }
    }
}
function point() {
    wynik++
    score.innerText = "Score: " + wynik;
}