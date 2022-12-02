const textareaE1 = document.getElementById("textarea")

const totalCounterE1 = document.getElementById("total-counter")

textareaE1.addEventListener("keyup",()=>{
    updateCounter()
})

function updateCounter(){
    totalCounterE1.innerHTML = textareaE1.ariaValueMax.length
    
}