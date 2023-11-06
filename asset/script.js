let i = 0;
let j = 0;
let k = 0;
let l = 0;
let z = 0;
let c = 0;
const result = ['nguyễn thị thu', 'nguyễn thu', 'nguyen thi thu', 'nguyen thu'];
// $('.tombol').click(function () {
//   $('.halaman').addClass('animate_content');
//   $('.dalemnya_halaman').fadeOut(100).delay(2800).fadeIn();

//   setTimeout(function () {
//     $('.halaman').removeClass('animate_content');
//   }, 3200);

//   //remove fadeIn class after 1500ms
//   setTimeout(function () {
//     $('.halaman').removeClass('fadeIn');
//   }, 1100);
// });

$('.tombol2').click(function () {
  // animate content
  i = 0;
  j = 0;
  k = 0;
  l = 0;
  z = 0;
  c = 0;
  document.getElementById('tekss').innerHTML = '';
  document.getElementById('text1').innerHTML = '';
  document.getElementById('text2').innerHTML = '';
  document.getElementById('text3').innerHTML = '';
  document.getElementById('text4').innerHTML = '';
  document.getElementById('text5').innerHTML = '';

  $('.halaman').addClass('animate_content');
  $('.dalemnya_halaman').fadeOut(100).delay(2800).fadeIn();
  document.getElementById('lagu').pause();
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
});

$('.kehalaman2').click(function () {
  let name = document.getElementById('nama').value;
  name = name.toLowerCase().replace(/^\s+|\s+$/gm, '');
  document.getElementById('tekss').innerText = '';
  if (result.includes(name)) {
    $('.halaman').addClass('animate_content');
    $('.dalemnya_halaman').fadeOut(100).delay(2800).fadeIn();

    setTimeout(function () {
      $('.halaman').removeClass('animate_content');
    }, 3200);

    //remove fadeIn class after 1500ms
    setTimeout(function () {
      $('.halaman').removeClass('fadeIn');
    }, 1100);
    setTimeout(function () {
      $('.halaman2').addClass('fadeIn');
    }, 1100);
    let txt =
      'Em hãy nhắm mắt lại đi, trong vòng 5 giây. Không đc ăn gian đâu nha 😤';
    const timeText = '5 4 3 2 1 0';
    const lastText = 'Em hãy cho anh biết, em nhìn thấy gì?';
    const loveText = 'Không gì cả, đúng chứ?';
    const loveText2 = `Đó chính là cuộc sống của anh khi không có em😊`;
    const iLoveYouText = 'I Love You🥰';
    let speed = 100;
    function JalaninTeks() {
      if (i < txt.length) {
        document.getElementById('tekss').innerHTML += txt.charAt(i);
        i++;
        setTimeout(JalaninTeks, speed);
      } else {
        if (j < timeText.length) {
          document.getElementById('text1').innerHTML += timeText.charAt(j);
          j++;
          setTimeout(JalaninTeks, 1000);
        } else {
          if (k < lastText.length) {
            document.getElementById('text2').innerHTML += lastText.charAt(k);
            k++;
            setTimeout(JalaninTeks, speed);
          } else {
            if (l < loveText.length) {
              document.getElementById('text3').innerHTML += loveText.charAt(l);
              l++;
              setTimeout(JalaninTeks, speed);
            } else {
              if (z < loveText2.length) {
                document.getElementById('text4').innerHTML +=
                  loveText2.charAt(z);
                z++;
                setTimeout(JalaninTeks, speed);
              } else {
                if (c < iLoveYouText.length) {
                  document.getElementById('text5').innerHTML +=
                    iLoveYouText.charAt(c);
                  c++;
                  setTimeout(JalaninTeks, speed);
                }
              }
            }
          }
        }
      }
    }
    // const music = new Audio('./lagu.mp3');
    // music.play();

    function Ambilnama() {
      var x = document.getElementById('nama').value;
      document.getElementById(
        'tampilnama'
      ).innerHTML = `<span style="text-transform: capitalize">${x}😳</span>`;
    }
    document.getElementById('tekss').innerText = '';
    document.getElementById('text1').innerText = '';
    document.getElementById('text2').innerText = '';
    document.getElementById('text3').innerText = '';
    document.getElementById('text4').innerText = '';
    document.getElementById('text5').innerText = '';

    JalaninTeks();
    Ambilnama();
    document.getElementById('lagu').currentTime = 0;
    document.getElementById('lagu').play();
  } else {
    console.log(name);
    alert('Please enter again');
    document.getElementById('nama').value = '';
    document.getElementById('nama').focus();
  }
});
document.getElementById('lagu').addEventListener('ended', function () {
  document.getElementById('lagu').play();
});
