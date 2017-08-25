$(function() {
  console.log('loaded');
  var word;
  var firstWord;
  var counterL = 0;
  var counterW = 0;
  var score = 0;
  var guesses = [];
  var sample = new Audio('js/Meeseeks.mp3');
  var url = 'https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&includePartOfSpeech=noun&minCorpusCount=8000&maxCorpusCount=-1&minDictionaryCount=3&maxDictionaryCount=-1&minLength=6&maxLength=12&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';



  function getRandomWord() {
    $.ajax({
        url: url,
        type: "GET",
        dataType: "json"
      })
      .done(function(res) {
        console.log(res);
        word = res.word;
        word = word.toUpperCase();
        createBoard();

      }).fail(function(err) {
        console.log(err);
      })
  }



  $('.play').on('click', function() {
    $('p').css('display', 'none');
    getRandomWord();
    word = word.toUpperCase();
    $('.play').prop("disabled", true);
  });

  $('.reset').on('click', reset);

  window.onkeydown = function(e) {
    guess = String.fromCharCode(e.keyCode);
    console.log(guess);
    if (!guesses.includes(guess)) {
      guesses.push(guess);
      checkLetter(guess);
    } else {
      swal("You Already Guessed That!", "guess again!", "error")
    }
  }

  $('.letter').on('click', function(e) {
    guess = $(this).html();
    $(this).prop("disabled", true).css('background', 'black');
    checkLetter(guess);
  });


  function createBoard() {

    console.log("the word is: ", word);
    for (var i = 0; i < word.length; i++) {
      // firstWord = words.pop();
      // console.log(firstWord);
      var line = $('<div>').addClass('line center-align col s1 l6').attr('id', word[i]);
      $('#lineRow').append(line);
    }
  }

  function reset() {
    guesses = [];
    counterW = 0;
    counterL = 0;
    displayMeeseeks(counterL);
    $('.letter').prop("disabled", false).css('background', 'lightgray');
    $('#lineRow').empty();
    $('.wrongGuess').empty();
    createBoard(word);
  }

  function keepScore() {
    score += 1
    $('.scores').html(score)
  }




  function checkLetter(guess) {
    if (word.indexOf(guess) >= 0) {
      if (counterW === (word.length - 1)) {
        keepScore();
        swal("Good job!", "You Won!", "success")
      }
      let $lines = $('.line');
      for (var i = 0; i < $lines.length; i++) {
        if ($lines[i].id === guess && $lines[i].innerHTML != guess) {
          counterW++;
          $lines[i].innerHTML = guess;
        }
      }

    } else {
      counterL++;
      sample.play();
      $('.wrongGuess').append(`${guess}, `);
      displayMeeseeks(counterL);
    }
  }

  function displayMeeseeks(counterL) {
    switch (counterL) {
      case 0:
        $('.meeseeks').css('display', 'none');
        break;
      case 1:
        $('#head').css('display', 'block');
        $('#x').css({
          opacity: 0,
          display: 'block'
        }).animate({
          opacity: 1
        }, 1000).fadeOut(1000);

        break;
      case 2:
        $('#body').css('display', 'block');
        $('#x').css({
          opacity: 0,
          display: 'block'
        }).animate({
          opacity: 1
        }, 1000).fadeOut(1000);
        break;
      case 3:
        $('#left-arm').css('display', 'block');
        $('#x').css({
          opacity: 0,
          display: 'block'
        }).animate({
          opacity: 1
        }, 1000).fadeOut(1000);
        break;

      case 4:
        $('#right-arm').css('display', 'block');
        $('#x').css({
          opacity: 0,
          display: 'block'
        }).animate({
          opacity: 1
        }, 1000).fadeOut(1000);
        break;

      case 5:
        $('#left-leg').css('display', 'block');
        $('#x').css({
          opacity: 0,
          display: 'block'
        }).animate({
          opacity: 1
        }, 1000).fadeOut(1000);
        break;

      case 6:
        $('#right-leg').css('display', 'block');

        setTimeout(function() {
          swal("You Lose!", "loser!", "error")
        }, 300);
        let $lines = $('.line');
        for (var i = 0; i < $lines.length; i++) {
          if ($lines[i].innerHTML === '') {
            $lines[i].innerHTML = $lines[i].id;
          }
        }
        $('.letter').prop("disabled", true);
        break;
    }
  }

})
