left = document.getElementById("3");
right = document.getElementById("1");
let blokada = false;
let score = document.getElementById("score");
let score2 = document.getElementById("n2");
let wynik = 0;
let czas = 100;
let lock = false;
odwroc();
let bar = document.getElementById('bar');
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
    let chop = document.createElement("audio");
    chop.src = "chop.mp3";
    chop.play();
}

document.addEventListener("keypress", e => {
    console.log(e.key);
    let pole = document.getElementById("field");
    if (e.key == "a" && lock==false) {
        addtime();
        sound();
        const el = document.createElement("div");
        el.classList.add("animationR", "tree", "p")
        pole.appendChild(el);
        moveLeft();
    }
    else if (e.key == "d" && lock==false) {
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
    
    sprawdz();
    down();
    sprawdz();
}

function moveRight() {
    point();
    right.classList.add("man");
    left.classList.remove("man");
    
    sprawdz();
    down();
    sprawdz();
}

function down() {
    for (i = 0; i < 7; i++) {
        //console.log(i)
        let k = 1 + i * 3;

        let el1 = document.getElementById(k)
        let el2 = document.getElementById(k + 1)
        let el3 = document.getElementById(k + 2)
        let el4 = document.getElementById(k + 3)
        let el5 = document.getElementById(k + 4)
        let el6 = document.getElementById(k + 5)

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
    let el1 = document.getElementById(24);
    let el2 = document.getElementById(22);
    el1.classList.remove("branch", "tree");
    el2.classList.remove("branch", "tree");
    let x = Math.floor(Math.random() * 11);
    if (x < 7 && blokada == false) {
        let y = Math.floor(Math.random() * 11);
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
    if ((right.classList.item(0) == "man" || right.classList.item(1) == "man" || right.classList.item(2) == "man") && (right.classList.item(0) == "branch" || right.classList.item(1) == "branch" || right.classList.item(2) == "branch" || right.classList.item(3) == "branch")) {
        gameover()
    }
}

function gameover() {
    let window= document.getElementById("gg")
    window.style.visibility="visible"
    lock=true;
    console.log("Game Over!")
}

function odwroc() {
    for (i = 22; i >= 0; i = i - 3) {
        let k = i;
        el = document.getElementById(k);

        if (el.classList.item(0) == "branch" || el.classList.item(1) == "branch" || el.classList.item(2) == "branch" || el.classList.item(3) == "branch") {

            el.classList.add("branchR");
           
        }
    }
}
function point() {
    wynik++
    score.innerText = "Score: " + wynik;
    score2.innerText = "Score: " + wynik;
}

button = document.getElementById("n3");

button.addEventListener("click",()=>{
    window.location.reload(true);
})
