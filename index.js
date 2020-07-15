// Your code here
let dodger = document.getElementById("dodger");

// change color to pink
dodger.style.backgroundColor = "#FF69B4";
dodger.style.bottom = "50px";

// move dodger to left

function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
   
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });

// move dodger to right
function moveDodgerRight() {
    let rightNumbers = dodger.style.right.replace("px", "");
    let right = parseInt(rightNumbers, 10);
   
    // if (right < 0) {
      dodger.style.right = `${right + 1}px`;
    // }
}

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
});

// document.addEventListener("keydown", function(e) {
//     if (e.key === "ArrowRight") {
//       let rightNumbers = dodger.style.right.replace("px", "");
//       let right = parseInt(rightNumbers, 10);
   
//       dodger.style.right = `${right - 1}px`;
//     }
//   });