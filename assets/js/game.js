// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min); 

    return value;
};

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);
    //for(var i = 0; i < enemyNames.length; i++) {
        //console.log(enemyNames[i]);
       // console.log(i);
        //console.log(enemyNames[i] + " is at " + i + " index");
   // }

var fight = function(enemyName) {
    while(playerHealth > 0 && enemyHealth > 0) {
    // Alert players that they are starting the round
    //window.alert("Welcome to Robot Gladiators");

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    //Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHeath' variable
    
    if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        // if yes (true); leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            //subract money from playerMoney for skipping
            playerMoney = Math.max(0, playerMoney - 10);
            console.log("playerMoney", playerMoney);
            break; 
        }
    }
       
    var damage = randomNumber(playerAttack - 3, playerAttack);

    enemyHealth = Math.max(0, enemyHealth - damage);

    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
    // check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
        
        playerMoney = playerMoney + 20;
        break;
    }   
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
    //Subtract the value of 'enemyAttack' from the value of 'playerHeatlh' and use that result to update the value in the 'playerHealth' variable.
    var damage = randomNumber(enemyAttack - 3, enemyAttack);

    playerHealth = Math.max(0, playerHealth - damage);
    //Log a resulting message to the console so we know that it worked.
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
    // check player's health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
        break;
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
  }
};
   

var startGame = function() {
    for (var i = 0; i < enemyNames.length; i++) {
        playerHealth = 100;
        playerAttack = 10;
        playerMoney = 10;

        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
    
            var pickedEnemyName = enemyNames[i];
    
            enemyHealth = randomNumber(40, 60);
            // debugger;

            fight(pickedEnemyName);

            if (playerHealth > 0 && i < enemyNames.length - 1) {
                shop();
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round");

                if (storeConfirm) {
                    shop();
                }
            }
        }
        else { 
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }
    endGame();
};

var endGame = function() {
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    }
    else {
    window.alert("You've lost your robot in battle.");
    }
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

var shop = function() {

    var shopOptionPrompt = window.prompt("Would you like to REFILL our health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");

    switch (shopOptionPrompt) {
        case "REFILL": // new case
        case "refill": 
            if (playerMoney >= 7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");

            playerHealth = playerHealth + 20;
            playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You don't have enough money!");
            }
            break;
        case "UPGRADE": // new case
        case "upgrade":
            if (playerMoney >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");

            playerAttack = playerAttack + 6;
            playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You don't have enough money!");
            }
            break;
        case "LEAVE": //new case
        case "leave":
            window.alert("Leaving the store.");
            break;
        default: 
            window.alert("You did not pick a valid option. Try again.");

            shop();
            break;
    }

};
startGame();

//fight(enemyRobot);