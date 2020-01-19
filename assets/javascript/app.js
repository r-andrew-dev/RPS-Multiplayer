// At start of game, player will see welcome screen. 
// When button is clicked, player added will need to be established in the database 
// (could this be as simple as a click count?  -- No, refreshing would not change the clickcount, could create discrepencies)
// AND will need to check if there are any players present, and if so how many. 
// If there is one player present, user would be added to current session. +++ AND scren displaying "waiting for another player to join... " would display. A function would run 
// (There also needs to be some piece of code checking if one of the players tries to close out of the session, maybe ask if they really want to leave, and then update the number of players, accordingly)
// If there are two players present, a new session would need to be created. 
// One the next screen, user will see choices. "bird", "apple", "worm".
// User makes a choice. On button click, screen will show user their choice with a picture and also push that choice to the database.
// Then every second a function will run to check wether other choice has been made. 
// Once other choice is made, the computer will need to pull the two choices and run the comparison. 
//  Bird eats worm, worm eats apple, apple crushes bird. 
// Game should display the results to the user, tally them a win or loss appropriately, show them a play again? or Done, button. Selecting Play again should take them back
// to CHOICE screen with wins/losses still displaying whereas selecting Done. should take them back to welcome screen and score is reset and they are removed from the database. (player does not need to see this).


var firebaseConfig = {
    apiKey: "AIzaSyDsuTaxT1Wc8hrJB69jUMwVCJ_M1f8dQow",
    authDomain: "rps-multiplayer-2ee79.firebaseapp.com",
    databaseURL: "https://rps-multiplayer-2ee79.firebaseio.com",
    projectId: "rps-multiplayer-2ee79",
    storageBucket: "rps-multiplayer-2ee79.appspot.com",
    messagingSenderId: "13716466522",
    appId: "1:13716466522:web:2de5b6ea75b0525e852163"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();

  $("#start-button").on("click", function() {

    divClone = $("#container").clone(true);

    $("#start-div").hide();

    chooseDiv = $("<div id='choose-div'>");

    chooseHead = $("<h2 class='font-effect-3d-float' id='choice-text'>");

    chooseHead.text("CHOOSE ... ");

    chooseDiv.append(chooseHead);

    var choices = ["Bird", "Apple", "Worm"];

    for (i = 0; i < choices.length; i++) {
      button = $("<button class='button choice' id='Choice-" + i + "'><br>");
      button.text(choices[i])
      chooseDiv.append(button);
      chooseDiv.append("<br>")

    }

    $("#container").append(chooseDiv);
    
    });