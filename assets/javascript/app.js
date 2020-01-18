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

    chooseDiv = $("<div class='choose-div'>");

    var choices = ["Bird", "Apple", "Worm"];

    for (i = 0; i < choices.length; i++) {
      button = $("<button class='choice button' id=" + i + ">");
      button.text(choices[i])
      chooseDiv.append(button);
      chooseDiv.append("<br>");

    }

    $("#container").append(chooseDiv);
    
    });