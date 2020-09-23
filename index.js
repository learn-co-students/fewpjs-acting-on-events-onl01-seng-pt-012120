const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";
dodger.style.bottom = "0px"; 

const leftNumbers = dodger.style.left.replace("px", "");

function moveDodgerLeft() {
    leftNumbers
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

function moveDodgerRight() {
    leftNumbers
    let left = parseInt(leftNumbers, 10);
    if (left > 0) {
      dodger.style.left = `${left + 1}px`;
    }
}

  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
   });  