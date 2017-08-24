$(function() {
  console.log('loaded');
  var word;
  var firstWord;
  var counterL = 0;
  var counterW = 0;
  var inPlay = false;
  var url = 'https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&includePartOfSpeech=noun&minCorpusCount=8000&maxCorpusCount=-1&minDictionaryCount=3&maxDictionaryCount=-1&minLength=6&maxLength=12&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';



function getRandomWord(){
  $.ajax({
    url: url,
    type: "GET",
    dataType: "json"
  })
  .done(function(res){
    console.log(res.word);
    word = res.word;
    word = word.toUpperCase();
    console.log("variable: ",word);
    createBoard();

  })
}




  if (!inPlay) {
    $('.letter').prop("disabled", true);
  }

  $('.play').on('click', function() {
    inPlay = true;
    $('p').css('display', 'none');
    getRandomWord();
    console.log("global: ",word);
    $('.play').prop("disabled", true);
  });

  window.onkeydown = function(e){
    guess = String.fromCharCode(e.keyCode);
    checkLetter(guess);
}
  $('.letter').on('click',function(e){
      guess = $(this).html();
      $(this).prop("disabled", true).css('background', 'black');
      checkLetter(guess);
   });
  $('.reset').on('click', reset);


  function reset() {
    console.log('something happens');
    word='';
    getRandomWord();
    //ajax call to random word
    //push random word into word
    counterW = 0;
    counterL = 0;
    displayMeeseeks(counterL);
    $('button').prop("disabled", false).css('background', 'lightgray');
    $('#lineRow').empty();
    console.log(word);

    createBoard(word);
    console.log(counterW, counterL);
  }



  function createBoard() {
    console.log("the word is: ", word);
    for (var i = 0; i < word.length; i++) {
      var line = $('<div>').addClass('line col s1').attr('id', word[i]);
      console.log('line', line);
      $('#lineRow').append(line);
    }
  }

  function checkLetter(guess) {

    console.log(guess);
    if (word.indexOf(guess) >= 0) {
      console.log("length", word.length);

      if (counterW === (word.length-1)) {
        swal("Good job!", "You Won!", "success")
      }
      var $lines = $('.line');
      for (var i = 0; i < $lines.length; i++) {
        if ($lines[i].id === guess) {
          counterW++;
          console.log(counterW);
          $lines[i].innerHTML = guess;
          console.log($lines[i]);
        }
      }

    } else {
      counterL++;
      displayMeeseeks(counterL);
      sweetAlert("Exsitance is Pain to a Meeseeks...", "Kill me!", "error");

    }
  }

  function displayMeeseeks(counterL) {
    switch (counterL) {
      case 0:
        $('.meeseeks').css('display', 'none');
        break;
      case 1:
        $('#head').css('display', 'block');
        break;
      case 2:
        $('#body').css('display', 'block');
        break;
      case 3:
        $('#left-arm').css('display', 'block');
        break;

      case 4:
        $('#right-arm').css('display', 'block');
        break;

      case 5:
        $('#left-leg').css('display', 'block');
        break;

      case 6:
        $('#right-leg').css('display', 'block');
        setTimeout(function(){
          swal("You Lose!", "loser!", "error")
        },1000);
        $('.letter').prop("disabled", true);
        break;
      default:
        console.log('keep guessing');
    }
  }






})
