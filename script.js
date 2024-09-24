let gameSeq=[];
let userSeq=[];

let btns=["yellow","red","purple","green"];

let started=false;
let level=0;
let h2=document.querySelector("h2");

document.addEventListener("keypress", function() {
    // console.log("game start");
    if(started == false) {
        console.log("game is started");
        started == true;
        levelUp();
    }
});
function gameFlash(btn) {
  btn.classList.add("flash");  
  setTimeout(function() {
    btn.classList.remove("flash");
  },150);
}
function userFlash(btn) {
    btn.classList.add("userflash");  
    setTimeout(function() {
      btn.classList.remove("userflash");
    },150);
  }
  

function levelUp() {
    userSeq=[];
    level++;
    h2.innerText=`level ${level}`;
//random btn choose
let randIdx=Math.floor(Math.random() * 3);
let randColor=btns[randIdx];
let randBtn=document.querySelector(`.${randColor}`);
// console.log(randIdx);
gameSeq.push(randColor);
console.log(gameSeq);
    gameFlash(randBtn);

}

function checkAns(idx) {
    // console.log("current lever :" ,level);
    // let idx=level-1;

    if(userSeq[idx] === gameSeq[idx]) {
        if(userSeq.length == gameSeq.length) {
            setTimeout(levelUp,1000)
             }
        console.log("same value");
    } else {
        h2.innerHTML=`game over! your score was <b>${level}</b> <br> press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout( function() {
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}


  



//adding event listeners
function btnPress() {
    // console.log("btn was predded");
     console.log(this);
    let btn=this;
    userFlash(btn);

    userColor=btn.getAttribute("id");
    userSeq.push(userColor);

    
    console.log(userColor);
    checkAns(userSeq.length - 1);
}


let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    sterted=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}