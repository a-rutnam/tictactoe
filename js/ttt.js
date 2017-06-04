var game = [0,0,0,0,0,0,0,0,0];
var gameWon = false;
var $img = $('<img>').attr({ src: ''});

var player = 1
var playerNames = [];

var firstPlayer = [];
var secondPlayer = [];
var xScore = [];
var oScore = [];

$(document).ready(function () {

  //PLAYER NAMES
  $( "#nameEnterButton" ).click(function() {

    if (playerNames.length === 2) { //too many names entered
      alert("Only two players, you scoundrel! This isn't 'Naughts and Cross and Another Thing!'");
      return;
    }
    // return;

    $('.scoreBox').fadeIn('slow'); //score box appears

    nameInput = $('#nameInput').val() //string typed to input box saved

    playerNames.push(nameInput)//name 1st or 2nd is pushed to array

    $('#nameInput').val("");//gets rid of name input in box after click

    $('input').attr('placeholder',"Enter Player 2's name");//adds p2 prompt placeholder


    if (playerNames.length === 1){ //after one name entered
      $( "#b" ).html( "<p>"+"The S.S. " + playerNames[0]+"</p>" );
      //1st name entered appears on ship
      $("#b").animate({left: "+=1500"}, 2000);
      //1st ship slides in
      $( ".vs" ).html( "<p>"+ "Vs." + "</p>" );
      //vs appears beneath ship1
    }

    if (playerNames.length === 2) {//after two names entered
      $('input').attr('placeholder',"Click 'Who Plays First' below.");
      //placeholder changes to prompt to click 'who plays first button'

      $( "#c" ).html( "<p>"+"HMAS " + playerNames[1]+"</p>" );
      //2nd name entered appears on 2nd ship

      $("#c").animate({left: "+=1500"}, 2000);
      //2nd ship slides in

      alert("Now click 'Who plays first' below.")
      // alert prompt to click 'who plays first button'
    }

  });//name button clicked


  // WHO PLAYS FIRST:
  $('#whoFirst').on('click', function(event) {


    var random_boolean = Math.random() >= 0.5; {
      if (random_boolean) {
        alert (playerNames[0] + " plays first. Anchors aweigh - Start Playing!");
        firstPlayer.push(playerNames[0]);
        secondPlayer.push(playerNames[1]);

      } else {
        alert (playerNames[1] + " plays first. Anchors aweigh - Start Playing!");
        firstPlayer.push(playerNames[1]);
        secondPlayer.push(playerNames[0]);

      } //if second name entered wins
        console.log('first:'+ firstPlayer);
      }//rando bools.
    });//who plays first button. Ideally now picked player picks their token and goes



  console.log( "Let's Play!" );

  var checkWin = function (player) {
    if( (game[0] === player && game[1] === player && game[2] === player) || //row1
        (game[3] === player && game[4] === player && game[5] === player) || //row2
        (game[6] === player && game[7] === player && game[8] === player) || //row3
        (game[0] === player && game[3] === player && game[6] === player) || //col1
        (game[1] === player && game[4] === player && game[7] === player) || //col2
        (game[2] === player && game[5] === player && game[8] === player) || //col3
        (game[0] === player && game[4] === player && game[8] === player) || //diag1
        (game[2] === player && game[4] === player && game[6] === player)){ //diag2
          return true;
        }//if true do this
    return false; //what does this do again?
  };//checkwins

//IF OCCUPIED
  $('.box').on('click', function(event) {
    var id = +event.currentTarget.id //the plus is a quicky way to parseint
    if (game[id] !== 0){
      alert('This square is already occupied');
      console.log();('This square is already occupied');
      return;
    }//if occupied

  console.log('player '+player+ ' clicked on Square '+event.currentTarget.id);

  //if player 1 clicks:
  if (player === 1){
    game[id]='x';

    var $img = $('<img>').attr({
      id: 'img' + id,
      src: 'img/x.gif'
    });
    $(this).append( $img );
    player = 2

    //if x wins://doesn't work when 2nd entered name goes first
    gameWon = checkWin('x');
    if (gameWon){
      player = 1;
      alert(playerNames[(player)-1]+ ' wins! X marks the spot!');
      console.log(playerNames[(player)-1]+ ' wins! X marks the spot!');
      xScore.push(1);
      $( ".score"+(player-1)+"b" ).html( "<p>"+ xScore.length + "</p>" );

    }//if x won
    return;

    //if player 2 clicks
  } else {
    game[id]='o';
    var $img = $('<img>').attr({
      id: 'img' + id,
      src: 'img/porthole.gif'
    });
    $(this).append( $img );
    player = 1;

    //if o wins
    gameWon = checkWin('o');
    if( gameWon ){
      player = 2

      alert( playerNames[parseInt(player-1)]+' wins!'+' [insert O-related nautical phrase here]');

      console.log( playerNames[parseInt(player-1)]+' wins!'+' [insert O-related nautical phrase here]');

      oScore.push(1);
      $( ".score"+[player-1]+"b" ).html( "<p>"+ oScore.length + "</p>" );

        return;
    }//if o won
  }//if player 2 clicks

  // check for draw
    if ( !gameWon && !game.includes(0) ){
      alert("It's a stalemate. To the poopdeck with all of you!")
      console.log('stalemate'); //this isn't running
    }//check tie

  }); //box


    // RESET
    $( "#reset" ).click(function() {
      $('.box img').remove();
      game = [0,0,0,0,0,0,0,0,0]
      // player = 1;
      firstPlayer = [];
      secondPlayer = [];





    });//reset button

})//doc ready;
