(function(){

  var track = '';
  var position = '';
  var audioElem = '';

  $(window).on('load', function(){
    audioElem = document.getElementById('theaudio');
    track = localStorage.getItem('track');
    position = localStorage.getItem('position');

    if(track !== undefined && position !== undefined){
      audioElem.src = track;
      audioElem.currentTime = position;
      $('#txturl').val(track);
      audioElem.play();
    }
  });

  $('#btnload').on('click', function(){
    track = $('#txturl').val();
    position = 0;

    audioElem.src = track;
    audioElem.play();
  });

  $('#advanceTenSeconds').on('click', function(){
    if(track !== ''){
      audioElem.currentTime = Math.min(audioElem.currentTime + 10, audioElem.duration);
    }
  });

  $('#rewindTenSeconds').on('click', function(){
    if(track !== ''){
      audioElem.currentTime = Math.max(audioElem.currentTime - 10, 0);
    }
  });

  $('#goFaster').on('click', function(){
    if(track !== ''){
      audioElem.playbackRate += 0.25;
    }
  });

  $('#goSlower').on('click', function(){
    if(track !== ''){
      audioElem.playbackRate -= 0.25;
    }
  });

  function recordTrackAndPosition(){
    if(track !== '' && position !== '') {
      track = audioElem.src;
      position = audioElem.currentTime;

      localStorage.setItem('track', track);
      localStorage.setItem('position', position);
    }
  }

  function contRecording(){
    setInterval(recordTrackAndPosition, 500);
  }

  contRecording();
})();
