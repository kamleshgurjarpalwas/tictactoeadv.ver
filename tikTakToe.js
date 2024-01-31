//start code for full screen toggele
const myDoc = document.documentElement;
const toggleBtn = document.querySelector(".toggle_btn");
toggleBtn.addEventListener("click", () => {
  if (toggleBtn.textContent === "FS") {
    myDoc.requestFullscreen();
    toggleBtn.textContent = "S";
  } else {
    document.exitFullscreen();
    toggleBtn.textContent = "FS";
  }
});
//end code
let turn0 = true;
let boxes = document.querySelectorAll(".box");
let newGameBtn = document.querySelector("#newGame");
let msgContainer = document.querySelector(".msg");
let msg = document.querySelector("#resl");

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turn0 = true;
  enableBoxes();
  msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");
    if (turn0) {
      box.innerText = "O";
      turn0 = false;
    } else {
      box.innerText = "X";
      turn0 = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
    msg.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `Badhai ho ,Vijeta ${winner}`;
  // msgContainer.classList.remove("hide");
  disableBoxes();
};

//in the condition of dro
const dro = () => {
  msg.innerText = "Khiladiyo match dro ho gya....!";
  // msgContainer.classList.remove("hide");
  disableBoxes();
};

//let win = false;
const checkWinner = () => {
  for (let pattern of winPatterns) {
    let posVal1 = boxes[pattern[0]].innerText;
    let posVal2 = boxes[pattern[1]].innerText;
    let posVal3 = boxes[pattern[2]].innerText;

    if (posVal1 != "" && posVal2 != "" && posVal3 != "") {
      if (posVal1 === posVal2 && posVal2 === posVal3) {
        gana.play();
        console.log("Winner", posVal1);
        showWinner(posVal1);
      } else {
        let sum = 0;
        for (let box of boxes) {
          console.log(box.innerText);
          if (box.innerText != "") {
            sum++;
          }
        }
        if (sum === 9) {
          dro();
        }
      }
    }
  }
};

newGameBtn.addEventListener("click", resetGame);

const audio = new Audio();
audio.src = "tup.mp3";

const gana = new Audio("bholaMere.mp3");


let stop=document.querySelector("#puse");
stop.addEventListener("click",()=>{
  gana.pause();
  audio.currentTime=0;
});