// 이미지 변경 함수
const img_url = [
  'images/img01.jpg',
  'images/img02.jpg',
  'images/img03.jpg',
  'images/img04.jpg',
  'images/img05.jpg',
  'images/img06.jpg',
];

// 작가정보
const author = [
  'Pascal Elpidio',
  'Jennigje Lutfi',
  'Nina Valentína'
]

$(function(){

  // // 년/월/일
  // let d = new Date();
  // let year = d.getFullYear();
  // let month = d.getMonth() + 1;
  // let date = d.getDate();
  // console.log(year, month, date);

  // // html에 날짜 표시하셈
  // $('.year').html(year);
  // $('.month').html(month);
  // $('.date').html(date);


  function changeBg() {
    // 0 ~ 2 랜덤값 생성(이미지 번호)
    let imgNum = Math.floor(Math.random() * 6)
    console.log(imgNum);

    // 이미지 변경
    $('body').css({
      background: `url('images/filter-box.png'),
      url(${img_url[imgNum]})`
    })

    // 작가정보
    $('.author span').html(author[imgNum]);

  }

  // 초기값
  $('.author span').html(author[0]);

  // setInterval(함수, 시간ms)
  setInterval(changeBg, 3000);

});

$(function(){
  //setinterval 함수 이용하여 1초마다 시간 달라지도록
   setInterval(function(){
       let d = new Date();
       let h = d.getHours();
       let m = d.getMinutes()
       let s = d.getSeconds();
       
       $('.hour').html(h);
       $('.min').html(m);
       $('.sec').html(s);
   
   },1000);
})