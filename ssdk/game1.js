window.alert("Welcome to Robot Gladiators!");


    
    var playerName = window.prompt("What is your robot's name?");
    var playerHealth = 100;
    var playerAttack = 10;
    var playerMoney = 10;
    alert("Name:" + playerName + "\n Health:" + playerHealth+ "\nAttack:" + playerAttack + "\nMoney:" + playerMoney);

    //declare an array 
    prompt("What is your enemyNane?");
    var enemyNames = ["Robo1"];
    var enemyHealth = 50;
    var enemyAttack = 12;
    alert("Name:" + enemyNames + "\nHealth:" + enemyHealth + "\nAttack" + enemyAttack);    
    var fight = function(enemyNames) {
        // repeat and execute as long as the enemy robot is alive 
    while (enemyHealth  > 0 && playerHealth > 0)  {
          // place fight function code block here . . .
          
        //if FIGHT OR SKIP statement begin ---- 
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        // alert(promptFight);

        // if player choses to fight, then FIGHT
        if (promptFight === "fight" || promptFight === "FIGHT") {
            
            // Fight begin

                    // Remove Enemy's health by subtracting the amount set in the playerAttack variable
                    enemyHealth = enemyHealth - playerAttack;
                        console.log(playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining.");
                    // Check Enemy's health
                    if (enemyHealth <= 0) {
                        window.alert(enemyNames + " has died!");
                        break;
                    } 
                    else {
                        window.alert(enemyNames + " still has " + enemyHealth + " health left.");
                    }
                    // Removes Player's health by subtracting amts set in the enemyAttack variable
                    playerHealth = playerHealth - enemyAttack;
                        console.log(enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
                    // Check Player's health
                    if (playerHealth <= 0) {
                        window.alert(playerName + " has died!");
                        break; //if died, exit out of the game.
                    } 
                    else {
                        window.alert(playerName + " still has " + playerHealth + " health left.");
                    }                
        } 
            // Fight end

            //Skip begin
        
                    // if user picks "skip" confirm and then stop the loop
            if (promptFight === "skip" || promptFight === "SKIP") {
                        // confirm user wants to skip
                        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
                    
                        // if yes (true), leave fight
                        if (confirmSkip) {
                        window.alert(playerName + " has decided to skip this fight. Goodbye!");
                        // subtract money from playerMoney for skipping
                        playerMoney = playerMoney - 10;
                        console.log("playerMoney", playerMoney)
                        break;
                        }
                    }
        
            // Skip end

            /*
            // if no (false), ask question again by running fight() again
                    else {
                        fight();
                    }
            */

    }
}


for (var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i]; // create a var of the index
    enemyHealth = 50; // after enemy1 dies, enemy2 will have fresh new health
    fight(pickedEnemyName);
}