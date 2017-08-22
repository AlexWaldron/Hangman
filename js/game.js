$(function() {
  console.log('loaded');
  var words = ["Foosball"];
  var counter = 0;
  var firstWord = words[0].toUpperCase();
  var inPlay = false;

  if(!inPlay){
    $('.letter').prop("disabled", true);

  }


  $('.play').on('click', function() {
    inPlay = true;
    createBoard();
    $('img').css('display', 'inline-block');
    $('.letter').prop("disabled", false);
  });

    $('.letter').on('click', checkLetter);



    function createBoard() {
      console.log(inPlay);
      for (var i = 0; i < firstWord.length; i++) {
        var line = $('<div>').addClass('line col s1').attr('id', firstWord[i]);
        console.log('line', line);
        $('#lineRow').append(line);
      }
    }

    function checkLetter() {
      counter++;
      console.log('counter',counter);

        if(counter === 6){
          alert('game over');
          $('.letter').prop("disabled", true);


        }
      var guess = $(this).html()
      console.log(guess);
      $(this).prop("disabled", true);
      if (firstWord.indexOf(guess) >= 0) {
        var $lines = $('.line');
        for (var i = 0; i < $lines.length; i++) {
          if ($lines[i].id === guess) {
            $lines[i].innerHTML = guess;
            console.log($lines[i]);
          }
        }

      } else {
        console.log(('WRONG! YOU ARE DUMB'));
      }
      return counter;
    }




})
