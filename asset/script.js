$('.tombol').click(function () {
  // animate content
  $('.halaman').addClass('animate_content');
  $('.dalemnya_halaman').fadeOut(100).delay(2800).fadeIn();

  setTimeout(function () {
    $('.halaman').removeClass('animate_content');
  }, 3200);

  //remove fadeIn class after 1500ms
  setTimeout(function () {
    $('.halaman').removeClass('fadeIn');
  }, 1100);
});

$('.tombol2').click(function () {
  // animate content
  $('.halaman').addClass('animate_content');
  $('.dalemnya_halaman').fadeOut(100).delay(2800).fadeIn();

  setTimeout(function () {
    $('.halaman').removeClass('animate_content');
  }, 3200);

  //remove fadeIn class after 1500ms
  setTimeout(function () {
    $('.halaman').removeClass('fadeIn');
  }, 1100);
});

$('.kehome').click(function () {
  setTimeout(function () {
    $('.home').addClass('fadeIn');
  }, 1100);

  PuterLagu();
});

$('.kehalaman2').click(function () {
  let name = document.getElementById('nama').value;
  name = name.toLowerCase().replace(/^\s+|\s+$/gm, '');
  if (
    name === 'nguyễn thị thu' ||
    name === 'nguyễn thu' ||
    name === 'nguyen thi thu' ||
    name === 'nguyen thu'
  ) {
    setTimeout(function () {
      $('.halaman2').addClass('fadeIn');
    }, 1100);

    var i = 0;
    var txt =
      'Ribuan malam ku termenung sendiri, Menunggu seseorang untuk memelukku, Lewati ratusan mimpi tersimpan dalam sanubari, Sendiri di tengah kegelapan yang semu. Terimakasih engkau telah hadir untukku,\nmenemani kesepianku dan telah menjadi penerang dalam gelapku,  I Love You';
    var speed = 150;

    function JalaninTeks() {
      if (i < txt.length) {
        document.getElementById('tekss').innerHTML += txt.charAt(i);
        i++;
        setTimeout(JalaninTeks, speed);
      }
    }

    function PuterLagu() {
      var lagu = document.getElementById('lagu');
      return lagu.paused ? lagu.play() : lagu.pause();
    }

    function Ambilnama() {
      var x = document.getElementById('nama').value;
      document.getElementById('tampilnama').innerHTML = x;
    }
    JalaninTeks();
    PuterLagu();
    Ambilnama();
  } else {
    console.log(name);
    alert('Please enter again');
    document.getElementById('nama').value = '';
    document.getElementById('nama').focus();
  }
});
