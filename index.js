function clickTracker(){
  let counter=0;
  $('.clicker').on('click', function(){
    counter++;

    if(counter % 5===0){
      $('img').css('display', 'block');
    }
    else{
      $('img').css('display', 'none');
    }

    $('.clickTrack').text(counter);
  });

  $('.clearCount').on('click', function(){
    $('.clickTrack').text(0);
    counter=0;
    $('img').css('display', 'none');
  })
}




$(clickTracker)