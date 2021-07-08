//Start Now

function rpsGame(yourChoice) {
    // console.log(yourChoice);

    var humanChoice, botchoice;

    humanChoice = yourChoice.id;
    botchoice = numberChoiceTo(randomRpsInt());
    console.log("Compuer Choice: ", botchoice)
    result = decIdWinner(humanChoice, botchoice); //[1,0] human win || bot lost
    console.log(result);
    message = finalMessage(result); //You won!
    console.log(message);
    rpsFronted(yourChoice.id, botchoice, message);
}
// ['rock','papper','scissor'] [Math.floor(Math.random() * 3)]

function randomRpsInt() {
    return Math.floor(Math.random() * 3)
}

function numberChoiceTo(number) {
    return ['rock', 'paper', 'scissor'][number];
}

function decIdWinner(yourChoice, computerChoice) {
    var rpsDatabase = {
        'rock': { 'scissor': 1, 'rock': 0.5, 'paper': 0 },
        'paper': { 'rock': 1, 'paper': 0.5, 'scissor': 0 },
        'scissor': { 'paper': 1, 'scissor': 0.5, 'rock': 0 }
    };
    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore];

}

function finalMessage([yourScore, computerScore]) {
    if (yourScore === 0) {
        return { 'message': "You lost", 'color': 'red' };
    } else if (yourScore === 0.5) {
        return { 'message': "You trit", 'color': 'yellow' };
    } else {
        return { 'message': 'You WON!', 'color': 'green' }
    }
}

function rpsFronted(humanIMAGEChoice, botIMAGEchoice, finalMessage) {
    var imageDataBase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissor': document.getElementById('scissor').src
    }
    //let's remove 
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src=' " + imageDataBase[humanIMAGEChoice] + " 'height=150 width=150 style= 'box-shadow: 0px 10px 50px rgba(11, 212, 212, 0.7);' >"
    messageDiv.innerHTML = "<h1 style= 'color: " + finalMessage['color'] + "; font-size = 55px; padding:30px;'>" +finalMessage['message']  + "</h1"
    botDiv.innerHTML = "<img src = ' " + imageDataBase[botIMAGEchoice] + "'height=150 width=150 style = 'box-shadow: 0px 10px 50px rgba(243, 38, 24, 0.7);'>"


    document.getElementById('flex-rps').appendChild(humanDiv);
    document.getElementById('flex-rps').appendChild(messageDiv);
    document.getElementById('flex-rps').appendChild(botDiv);
    


}

function resetAns(){
   
    location.reload();

    
}
