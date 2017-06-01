var game = [0,0,0,0,0,0,0,0,0];
var gameWon = false;
var $img = $('<img>').attr({ src: ''
});


// var showWinner =
// get value of name input

var player = 1; //change this depending on what random_boolean chooses

var playerNames = [];




$(document).ready(function () {

// if theme === rel


// player names
$( "#nameEnterButton" ).click(function() {
   nameInput = $('#nameInput').val()
  playerNames.push(nameInput)
  $('#nameInput').val("");
    $('input').attr('placeholder',"Second player's name");
playerNames;
  return;
});

  // who plays first:
$('.button').on('click', function(event) {
  var player1 = playerNames[0] //why does this only work in console
  var player2 = playerNames[1]
  var random_boolean = Math.random() >= 0.5; {
    if (random_boolean) {
      // document.getElementById("demo").innerHTML =
      alert (player1 + " decides who plays first. Start playing!");
    } else {
      // document.getElementById("demo").innerHTML =
      alert (player2 + " decides who plays first. Start playing!");
    } //else
  }//rando bools.
});//button

// reset

  $( ".reset" ).click(function() {

    $('.box img').remove();
    game = [0,0,0,0,0,0,0,0,0]
  });//reset button


  console.log( "Let's Play!" );


var checkWin = function (player) {
// if we called the function as checkWin('x'),
// then our local variable player will have the value 'x'
  if( (game[0] === player && game[1] === player && game[2] === player) || //row1
      (game[3] === player && game[4] === player && game[5] === player) || //row2
      (game[6] === player && game[7] === player && game[8] === player) || //row3
      (game[0] === player && game[3] === player && game[6] === player) || //col1
      (game[1] === player && game[4] === player && game[7] === player) || //col2
      (game[2] === player && game[5] === player && game[8] === player) || //col3
      (game[0] === player && game[4] === player && game[8] === player) || //diag1
      (game[2] === player && game[4] === player && game[6] === player)){ //diag2
        // console.log(player + ' wins');
        return true;

        }//if true do this

  return false; //what does this do again?
};//checkwins



$('.box').on('click', function(event) {
  var id = +event.currentTarget.id //the plus is a quicky way to parseint

  if (game[id] !== 0){
    alert('This square is already occupied');
    console.log();('This square is already occupied');
    return;
  }//if occupied

  console.log(game);
  console.log('player '+player+ ' clicked on Square '+event.currentTarget.id);

  //if player 1:
  if (player === 1){
    game[id]='x';
    gameWon = checkWin('x');
    if (gameWon){
      alert('X marks the spot!... (X wins)');
      console.log('X wins!');

    }

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
      alert('(insert nautical phrase here) o wins');
      console.log(' o wins');
    }
    var $img = $('<img>').attr({
      id: 'img' + id,
      src: 'img/porthole.gif'
    });
    $(this).append( $img );
    // document.getElementById(event.currentTarget.id).innerHTML="<img id=img"+id+" src='/Users/anusharutnam/wdi/projects/tictactoe/img/porthole.gif' />";
    player = 1;
return;
  }//else... p2

  // check for draw
  if ( !gameWon && !game.includes(0) ){
    alert("It's a stalemate. To the poopdeck with all of you!")
    console.log('stalemate'); //this isn't running
  }//check tie



  }); //box


})//doc ready;

// http://i.imgur.com/d6ocn90.png

//if stalemate
//reset button
//upload img
//change player dependng on rando
//no more clicks allowed after win
//diff appearance themes




// Project #0: The Game
//
// Overview
//
// Let's start out with something fun - a game!
//
// We'll be making Tic Tac Toe, a game that takes seconds to learn but minutes to master! Everyone will get a chance to be creative, and work through some really tough programming challenges to get your feet wet in the world of web development.
//
// "hand me your phone," load up the game, and play a quick round!
// You will be working individually for this project, but we'll be guiding you along the process and helping as you go. Show us what you've got!
//
// What You've Learned
//
// By the time you submit this project, you will have covered new ground in many of the big themes of the course:
//
// Command Line: Practice interacting with the computer and navigating the filesystem from the command line.
// Source Control: Manage and interact with a git repository to store changes to code.
// Programming Fundamentals: Work with objects, constructors, events, while learning how to strategically solve problems and resolve errors.
// Web Fundamentals: Learn how communication happens over the internet, and how to structure, style, and animate documents within a browser. Also learn how to respond to actions your users take and the data they input into the browser.
// Browser Applications: Dive into CSS, Sass, and how to use libraries and frameworks to get lots of style for free.
// Deployment: Host a static web site in a managed hosting environment.
// Products and Teams: Document your code and your code repository so others understand what you've built.
// Big Goals
//
// Build a web application from scratch, without a starter codebase
// Use your programming skills to map out the game logic for a simple game like Tic Tac Toe
// Separate HTML, CSS, and JavaScript files in your application
// Build an application to a spec that someone else gives you
// Build a dynamic game that allows two players to compete
// Craft a readme.md file that explains your app to the world
// Technical Requirements
//
// Your app must:
//
// Render a game board in the browser
// Switch turns between X and O (or whichever markers you select)
// Visually display which side won if a player gets three in a row or show a draw/"cat’s game" if neither wins
// Include separate HTML / CSS / JavaScript files
// Stick with KISS (Keep It Simple Stupid) and DRY (Don't Repeat Yourself) principles
// Use Javascript for DOM manipulation
// Deploy your game online, where the rest of the world can access it
// Use semantic markup for HTML and CSS (adhere to best practices)
// Bonus
//
// These are for extra credit! Don't focus on these until you've hit the core requirements.
//
// Keep track of multiple game rounds with a win counter
// Allow players to customize their tokens (X, O, name, picture, etc)
// Get inventive with your styling, e.g. use hover effects or animations to spiff things up
// Use LocalStorage to persist data locally to allow games to continue after page refresh or loss of internet connectivity
// Support custom board sizes: default is 3x3 but you could allow users to choose a larger board
// Support networked multiplayer: https://www.firebase.com/ has a nice quickstart guide
// TRICKIEST: Create an AI opponent: teach Javascript to play an unbeatable game against you
// Necessary Deliverables
//
// A working game, built by you, hosted somewhere on the internet
// A link to your hosted working game in the URL section of your Github repo
// A git repository hosted on Github, with a link to your hosted game, and frequent commits dating back to the very beginning of the project
// A readme.md file with explanations of the technologies used, the approach taken, installation instructions, unsolved problems, etc.
// Suggested Ways to Get Started
//
// Break the project down into different components (data, presentation, views, style, DOM manipulation) and brainstorm each component individually. Use whiteboards!
// Use your Development Tools (console.log, inspector, alert statements, etc) to debug and solve problems
// Work through the lessons in class, ask questions and come to office hours when you need to. Think about adding relevant code to your Tic Tac Toe game each night, instead of, you know... procrastinating.
// Commit early, commit often. Don’t be afraid to break something because you can always go back in time to a previous version.
// Check out Tutorial and Documentation resources (jQuery tutorial) at home to better understand what you’ll be getting into.
// Don’t be afraid to write code that you know you will have to remove later. Create temporary elements (buttons, links, etc) that trigger events if real data is not available. For example, if you’re trying to figure out how to change some text when the game is over but you haven’t solved the win/lose game logic, you can create a button to simulate that until then.
// Useful Resources
//
// MDN Javascript Docs (a great reference for all things Vanilla Javascript)
// jQuery Docs
// Github Pages (for hosting your game)
// If You Finish Early
//
// We invite you to work on any or all of the following:
//
// A more advanced game (Memory? Battleship? Connect Four?)
// Your Github portfolio site
// Any other front-end project that interests you
// Use Firebase for something
