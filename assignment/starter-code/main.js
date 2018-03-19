console.log("JS file is connected to HTML! Woo!")

// all the cards you have on the screen
document.addEventListener('DOMContentLoaded', function() {

var cards = ['king', 'king', 'queen', 'queen'];

// shuffle function
// This is the "fisher-yates shuffle". 
// You can read more about it here: https://bost.ocks.org/mike/shuffle/
function shuffle(array) {
  var currentIndex = array.length;
  // we don't want to assign these yet; we will later on these yet
  var temporaryValue = null;
  var randomIndex = null;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}















/*

For each card in the shuffled array,
- create a new div with class card,
- give it the innerText of the card
- and append it to the div of class board.
When two cards are clicked on,
- compare the innerText of the cards
- and alert "You are a winner!" if they match.


You'll need to keep track of the card that has been clicked on, and
whether or not it's the first or second card. What you might do is
create two variables, firstCard and secondCard, and at first assign them
to `null`. Then, when the card is clicked, if there's nothing stored in
firstCard, that one gets the value of the card that has been clicked.
Otherwise, secondCard gets the value of the card that has been clicked.
If both firstCard and secondCard have values -- that is, if two cards have
been clicked, we will need to compare them, and cause the alert.


**BONUS**: Keep track of what the card is _without_ using `innerHTML`.
Maybe you can use a class, or something. This way, you can make the player
match them without seeing the text.
*/

var shuffledCards = shuffle(cards);

var firstCard = null;
var secondCard = null;



 
  var $firstCard = $('<div>');
  $firstCard.attr('class', 'card');
  $firstCard.val(firstCard);
  var $secondCard = $('<div>');
  $secondCard.attr('class', 'card');
  $secondCard.val(secondCard);




    for (var i = 0; i <= cards.length; i++) {
      $firstCard.attr('class', cards[i]);
      $secondCard.attr('class', cards[i]);
      // $secondCard.html(cards[i]);

      }


  



  $('.board').append($firstCard);   
  $('.board').append($secondCard);
  $('.board').click(function(){
    if ($firstCard = $secondCard) {
    alert('You win!');
   
    // $document.alert('You win');
  }

  });


  //Questions: How do I add a reset so you dont have to refresh the page?
  //Console.log the value of $firstcard to let player know what they won?




     // var $cards = ['king', 'king', 'queen', 'queen'];
     // // for (var i = 0; i <=$cards; i++); {
        
     //    var $card = $('<div>');
     //    $card.attr('class', 'card')

     //      // $landArticle.attr('id',lands[i]);
     //   //  $card.attr('class', card[i]);
     //   // $('#allCards').append(cards);
     //   // $('#allCards').append($cards);


     //  } 



 

// put everything before this
})
