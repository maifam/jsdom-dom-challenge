
// minusBtn.addEventListener('click', decreaseTimer)
// plusBtn.addEventListener('click', increaseTimer)
// heartBtn.addEventListener('click', increaseLike)
// pauseBtn.addEventListener('click', pauseTimer)

let counter = document.querySelector('#counter')
let plusBtn = document.querySelector('#plus')
let minusBtn = document.querySelector('#minus')
let heartBtn = document.querySelector('#heart')
let pauseBtn = document.querySelector('#pause')
let likesList = document.querySelector('.likes')
let commentInput = document.querySelector('#comment-input')
let submitBtn = document.querySelector('#submit')

let timerInterval = setInterval(function () {
    counter.innerHTML = parseInt(counter.innerHTML) + 1
}, 1000)

function pauseTimer() {
    clearInterval(timerInterval)
    minusBtn.disabled = true
    plusBtn.disabled = true 
    heartBtn.disabled = true
    submitBtn.disabled = true 

    pauseBtn.innerText ="resume"
    pauseBtn.id = "resume"
}

function resumeTimer() {
    minusBtn.disabled = false
    plusBtn.disabled = false 
    heartBtn.disabled = false
    submitBtn.disabled = false 

    pauseBtn.innerText = "pause"
    pauseBtn.id =="pause"
   
    setInterval(function (){
        counter.innerHTML = parseInt(counter.innerHTML) + 1
    }, 1000)  
}

document.addEventListener('click', function(event){
    const addValue = parseInt(counter.innerHTML) + 1
    const subtractValue = parseInt(counter.innerHTML) - 1

    if (event.target.matches('#plus')){
        counter.innerHTML = addValue 
    }else if (event.target.matches('#minus')) {
        counter.innerHTML = subtractValue 
    }else if (event.target.matches('#pause')){
        pauseTimer()
    }else if (event.target.matches('#resume')){
        resumeTimer()
    }
})



