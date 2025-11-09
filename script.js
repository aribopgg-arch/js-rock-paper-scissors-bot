
let opt = ["rock","paper","scissors"];

let condition = true;

while(condition){
    let mopt = opt[Math.floor(Math.random()*opt.length)];
    let input1 = prompt("enter game");

    if(input1 == "quit"){
        break;
    } 
    
    else if((mopt == "paper" && input1 == "rock") || (mopt == "rock" && input1 == "scissors") || (mopt == "scissors" && input1 == "paper")){
        alert("you lost");
    }
    else if(mopt == input1) {
        alert("Draw");
    }
    else if((mopt == "rock" && input1 == "paper") || (mopt == "scissors" && input1 == "rock") || (mopt == "papet" && input1 == "scissors")){
        
    }


    else{
    alert("worng word idoit! please enter the correct word stupid human");
    }

}