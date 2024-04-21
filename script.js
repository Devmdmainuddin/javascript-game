let player1L1 = document.querySelector(".p1l1")
let p1l1Input = document.querySelector(".p1l1 input")
let p1l1Error = document.querySelector(".p1l1 span")
let P1L1Button = document.querySelector(".p1l1 button")


let player1L2 = document.querySelector(".p1l2")
let p1Name = document.querySelector(".p1l2 h2")
let p1l2Input = document.querySelector(".p1l2 input")
let p1l2Error = document.querySelector(".p1l2 span")
let P1L2Button = document.querySelector(".p1l2 button")



let player2L1 = document.querySelector(".p2l1")
let p2l1Input = document.querySelector(".p2l1 input")
let p2l1Error = document.querySelector(".p2l1 span")
let P2L1Button = document.querySelector(".p2l1 button")



let player2L2 = document.querySelector(".p2l2")
let remainingcount = document.querySelector(".p2l2 p")
let p2Name = document.querySelector(".p2l2 h2")
let p2l2Input = document.querySelector(".p2l2 input")
let p2l2Error = document.querySelector(".p2l2 span")
let P2L2Button = document.querySelector(".p2l2 button")

let result = document.querySelector(".result")
let winnerName = document.querySelector(".result h1")
let resultscore  = document.querySelector(".result h2")





P1L1Button.addEventListener('click',function(){
    if(!p1l1Input.value == ""){
        console.log(p1l1Input.value)
        player1L1.style.display = "none"
        player1L2.style.display = "flex"
        p1Name.innerHTML = p1l1Input.value
    }else{
        p1l1Error.innerHTML = "Enter your name plz"

    }
    p1l1Input.value = ""
})

P1L2Button.addEventListener('click',function(){
    
    if(p1l2Input.value == ""){
        p1l2Error.innerHTML = "Enter a number between 0 to 9"
       
        console.log(player1scrol)
    }else if(p1l2Input.value >= 0 && p1l2Input.value <= 9){  
        player1scrol = p1l2Input.value
        player1L2.style.display = "none"
        player2L1.style.display = "flex"
        
    }
})

P2L1Button.addEventListener('click',function(){
    if(!p2l1Input.value == ""){
        console.log(p2l1Input.value)
        player2L1.style.display = "none"
        player2L2.style.display = "flex"
        p2Name.innerHTML = p2l1Input.value
    }else{
        p2l1Error.innerHTML = "Enter your name plz"
    }
    
})
let count = 5
P2L2Button.addEventListener('click',function(){
    
   
    if(p2l2Input.value == ""){
        p2l2Error.innerHTML = "Enter a number between 0 to 9"
   
    }else if(p2l2Input.value >= 0 && p2l2Input.value <= 9 && p1l2Input.value === p2l2Input.value){
        player2L2.style.display = "none"
        result.style.display = "flex"
        winnerName.innerHTML =`winner is  ${p2l1Input.value}`
    }else{
        count--
        remainingcount.innerHTML = count
        p2l2Input.value = ""

    }

    if(count <0){
        player2L2.style.display = "none"
        result.style.display = "flex"
        winnerName.innerHTML =`winner is ${p1l1Input.value}`
        resultscore .innerHTML = `winner guess in ${p1l2Input.value}`
    }
    
})