# Nautical Naughts and Crosses
## Play the classic game with a Maritime Twist.

here is [my live site](https://a-rutnam.github.io/tictactoe/)

###Libraries used
- JQuery


###Game instructions
1. Begin by writing player 1 and then player 2's names into the input box.
2. By clicking the 'who will play first' button, the website will choose at random who will use the symbol 'x' and therefore play first.
3. Play turn by turn and the game will detect and announce whether there has been a win or a draw.



###If I had more time
- Prevent squares from being filled after win.
- Have on option for existing players to 'play again' (and run random player chooser without having to renter names)
- Develop multiple visual themes e.g. space, crafty, Monopoly and other games better than T3, etc. Plus a way for players to upload an image and choose their own token.
- Fix weird-ass dual colored border
- Checking for the same name entered twice


```JavaScript
if (player1 === player2){
  playerNames = [];
  alert("You entered the same name twice - start over");
  return;
}
```
- Checking for either name not entered
```JavaScript
if (player1 === "" || player2 === "" ){
  playerNames = [];
  alert("You entered the same name twice - start over");
  return;
}
```
- Check if too many names entered
```JavaScript
if (playerNames.length === > 2 ){
  playerNames = [];
  alert("Only two players, fool! This isn't 'Naughts and Cross and Another Thing!'");
  return;
}
```
