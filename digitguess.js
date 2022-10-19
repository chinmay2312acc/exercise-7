let comp_input = 12345678;

for (let count = 1; count <= 4; count = count + 1) {

    let user_input = parseInt(prompt("enter an eight digit number"));
    if (user_input == comp_input) {
        console.log("you are correct")
        break;
    }
    else {
        console.log(" you are incorrect, try again :( ")
    }

    if(count==4){
        console.log("retart the game ") 
        break ;
    }
}