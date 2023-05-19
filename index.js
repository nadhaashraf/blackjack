
let player={
    name: "Nadha",
    chips : 190
}

let sum = 0
let cards=[]
let hasBlackJack = false
let isAlive = false
let message = ""


//let sumEl=document.getElementById("sum-el")
let messageEl= document.getElementById("message-el")
let sumEl=document.querySelector("#sum-el")
let cardsEl=document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + " : $"+ player.chips



function getRandomCard(){
    let randNum=Math.floor(Math.random()*13)+1
    if (randNum===1){
        return 11
    }
    else if(randNum>10){
        return 10
    }
    else{
        return randNum
    }
    
}




function startGame(){
    isAlive=true
    sum=0
    let firstCard = getRandomCard()
    let secondCard =getRandomCard()

    cards=[firstCard,secondCard]
    sum=firstCard+secondCard
    renderGame()
}




function renderGame(){
    sumEl.textContent="Sum: "+sum
    cardsEl.textContent="Cards: "
    for(let i=0; i<cards.length; i++){
        cardsEl.textContent+=cards[i]+"  "
    }
    if (sum <= 20) {   
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent=message;
}



function newCard(){
   if (hasBlackJack === false && isAlive === true)
   {let newCard=getRandomCard()
   sum+=newCard
   cards.push(newCard)
   renderGame()}
   
}

