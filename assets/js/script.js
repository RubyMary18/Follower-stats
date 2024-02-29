let num = document.querySelectorAll('.num');
let list = document.querySelectorAll('.follower-container li');
let speed = 100;

num.forEach(number => {
    let displayNum = 0;
    let endNum = parseInt(number.getAttribute("data-value"));
    let duration = endNum / speed;
    
    setInterval(function() {
        displayNum = displayNum + duration;
        
        if(displayNum < endNum) {
            number.textContent = Math.floor(displayNum);
        }
    },10)
})
    