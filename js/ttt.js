var game = [0,0,0,0,0,0,0,0,0];
var gameWon = false;
var $img = $('<img>').attr({ src: ''});
//maybe a separate player 1 and 2 $img
var player = 1;
var playerNames = [];

$(document).ready(function () {




    // player names
    $( "#nameEnterButton" ).click(function() {
      nameInput = $('#nameInput').val() //string typed to input box

      playerNames.push(nameInput)//name 1st or 2nd is pushed to array

      $('#nameInput').val("");//gets rid of input after click

      $('input').attr('placeholder',"Enter Player 2's name");//adds p2 prompt placeholder

      playerNames;//why is this here

      if (playerNames.length === 1)
        {$( ".vs" ).html( "<h1>"+playerNames[0]+" Vs. "+"</h2>" );//first name entered appears beneath board
      }

      if (playerNames.length === 2) {
        alert("Now click 'Who plays first' below.")

        $('input').attr('placeholder',"Click 'Who Plays' below.");//who plays prompt after 2 names entered

        $( ".vs" ).html( "<h1>"+playerNames[0]+" Vs. "+playerNames[1]+"</h2>" );
      }

      if (playerNames.length === 3) {
          // playerNames[2] = null;// not Necessary for rando below to work so need i worry?
          alert("Only two players, you scoundrel! This isn't 'Naughts and Cross and Another Thing!'");
          return;
        }
      return;
    });//name button clicked




    // who plays first:
    $('#whoFirst').on('click', function(event) {
      var firstNameEntered = playerNames[0]
      var secondNameEntered = playerNames[1]

      var random_boolean = Math.random() >= 0.5; {
        if (random_boolean) {
          alert (firstNameEntered + " decides who plays first. Anchors aweigh - Start Playing!");
        } else {
          alert (secondNameEntered + " decides who plays first. Anchors aweigh - Start Playing!");
        } //else. make shorter
      }//rando bools.
    });//who plays first button. Ideally now picked player picks their token and goes


// Jim and Jerry.
// Jerry is picked by rando to go first. Therefore player 1 is Jerry.
//Jerry clicks on a token image and the src of it becomes what is appended when he click a square

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

  //if player 1: this makes player 1 always x, change that
  if (player === 1){
    game[id]='x';

    gameWon = checkWin('x');
    if (gameWon){
      alert('X marks the spot!... (X wins)');
      console.log('X wins!');
    }//if x won
    var $img = $('<img>').attr({
      id: 'img' + id,
      src: 'img/x.gif'
    });
    $(this).append( $img );
    player = 2;
    return;

  } else {
    game[id]='o';
    gameWon = checkWin('o');
  if( gameWon ){
      alert('[insert nautical phrase here] O wins!');
      console.log(' O wins!');
    }//if o won
    var $img = $('<img>').attr({
      id: 'img' + id,
      src: 'img/porthole.gif'
    });
    $(this).append( $img );
    player = 1;
    return;
  }//else... p2

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
      player = 1;


    $("#b").animate({left: "+=500"}, 2000);
    


    });//reset button

})//doc ready;
