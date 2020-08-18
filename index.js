// Your code here
let dodger = document.getElementById('dodger');
  

function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace('px', ''),
        left = parseInt(leftNumbers, 10);
    
    if (left > 0 ) {
        dodger.style.left = `${left -1}px`;
    }

}
function moveDodgerRight() {
    let rightNumber = dodger.style.left,
        right = parseInt(rightNumber);

    if (right > 0) {
        dodger.style.left = `${right + 1}px`;
    };
};

document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            moveDodgerLeft();
        } else if(e.key === 'ArrowRight') {
            moveDodgerRight();
        }
});