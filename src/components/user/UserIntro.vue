<template>
  <div class="nav_bar">
    <div class="logo_box">
      <a href="#"><img src="../../assets/logo.png" /></a>
    </div>
    <!--div class="mbox" :class="{ active: isMenu }">
      <ul class="menu1">
        <li><a href="#">서비스 소개</a></li>
        <li><a href="#">회사 소개</a></li>
      </ul>
      <ul class="menu2">
        <li><a href="#">로그인</a></li>
        <li><a href="#">회원가입</a></li>
      </ul>
      <button class="more-btn">
      <i class="icon" @click="showMenu"></i>
    </button>
    </div-->

    <div
      class="home_btn"
      :class="{ active: isMenu }"
      onclick="location.href='https://nicepick.co.kr/'"
    >
      <a href="https://nicepick.co.kr/">홈페이지 바로가기</a>
    </div>
  </div>
  <!--nav e-->
  <!--main s-->
  <div class="main_banner">
    <h1>브랜드 한 번에 비교하고 편리하게 창업하자!</h1>
    <img src="../../assets/market.png" />
    <div class="blue_bar"></div>
  </div>
  <div class="logo_slide">
    <Swiper
      :slides-per-view="7"
      :space-between="20"
      :loop="true"
      :autoplay="{
        delay: 1000,
        disableOnInteraction: false,
      }"
    >
      <SwiperSlide :swiperRef="UserSwiper">
        <img src="../../assets/slide_logo1.jpg" class="slide-img" />
      </SwiperSlide>
      <SwiperSlide :swiperRef="UserSwiper">
        <img src="../../assets/slide_logo2.jpg" class="slide-img" />
      </SwiperSlide>
      <SwiperSlide :swiperRef="UserSwiper">
        <img src="../../assets/slide_logo3.jpg" class="slide-img" />
      </SwiperSlide>
      <SwiperSlide :swiperRef="UserSwiper">
        <img src="../../assets/slide_logo4.jpg" class="slide-img" />
      </SwiperSlide>
      <SwiperSlide :swiperRef="UserSwiper">
        <img src="../../assets/slide_logo5.jpg" class="slide-img" />
      </SwiperSlide>
      <SwiperSlide :swiperRef="UserSwiper">
        <img src="../../assets/slide_logo6.jpg" class="slide-img" />
      </SwiperSlide>
      <SwiperSlide :swiperRef="UserSwiper">
        <img src="../../assets/slide_logo7.jpg" class="slide-img" />
      </SwiperSlide>
      <SwiperSlide :swiperRef="UserSwiper">
        <img src="../../assets/slide_logo8.jpg" class="slide-img" />
      </SwiperSlide>
      <SwiperSlide :swiperRef="UserSwiper">
        <img src="../../assets/slide_logo9.jpg" class="slide-img" />
      </SwiperSlide>
      <SwiperSlide :swiperRef="UserSwiper">
        <img src="../../assets/slide_logo10.png" class="slide-img" />
      </SwiperSlide>
      <SwiperSlide :swiperRef="UserSwiper">
        <img src="../../assets/slide_logo11.jpg" class="slide-img" />
      </SwiperSlide>
      <SwiperSlide :swiperRef="UserSwiper">
        <img src="../../assets/slide_logo12.jpg" class="slide-img" />
      </SwiperSlide>
    </Swiper>
  </div>
  <!--main e-->
  <!--chatting s-->
  <div class="chatting">
    <div class="img1 test">
      <img src="../../assets/1.png" />
    </div>
    <div class="img2 test">
      <img src="../../assets/2.png" />
    </div>
  </div>
  <!--chatting e-->
  <!--point1 s-->
  <div class="point1">
    <ul>
      <li class="test">
        <img src="../../assets/point1_img-1.png" />
        <h2>지역별 상권 분석</h2>
        <br />
        <p>지역별 상권분석시스템</p>
        <p>반경내 입점브랜드 리스트 상권별</p>
        <p>입점가능 브랜드 리스트</p>
      </li>
      <li class="test">
        <img src="../../assets/point1_img-2.png" />
        <h2>상가 부동산 정보</h2>
        <br />
        <p>지역내 업종별 부동산 물건 노출</p>
        <p>입지 선택 과정에서</p>
        <p>추천 부동산 서비스</p>
      </li>
    </ul>
  </div>
  <!--point1 e-->
  <!--point2 s-->
  <div class="point2">
    <div class="brand">
      <h1>브랜드 비교·분석 정보 제공</h1>
      <p>국내 등록 브랜드 정보 제공</p>
      <p>최근 3개년 매출 추이</p>
      <p>지역별 매장/매출 증감 현황</p>
      <img src="../../assets/laptop1.png" />
    </div>
    <div class="brand_logo_box test">
      <div class="brand_logo_1">
        <img src="../../assets/brand_logo1.png" />
      </div>
      <div class="brand_logo_2">
        <img src="../../assets/brand_logo2.png" />
      </div>
      <div class="brand_logo_3">
        <img src="../../assets/brand_logo3.png" />
      </div>
      <div class="brand_logo_4">
        <img src="../../assets/brand_logo4.png" />
      </div>
    </div>
  </div>
  <!--point2 e-->
  <!--point3 s-->
  <div class="point3">
    <ul class="point3_box test">
      <li>
        <div class="top_bar"></div>
        <div class="list">
          <h3>인테리어 비교견적</h3>
          <p>상업용 중심의 인테리어 비교견적 서비스와</p>
          <p>도면 첨부를 통한 시공업체 비교견적 제공합니다</p>
          <div class="imgbox1"></div>
        </div>
      </li>
      <li>
        <div class="top_bar"></div>
        <div class="list">
          <h3>실시간 1:1 소통</h3>
          <p>궁금했던 사항들은 하나부터 열까지</p>
          <p>실시간으로 소통 할 수 있습니다</p>
          <div class="imgbox2"></div>
        </div>
      </li>
      <li>
        <div class="top_bar"></div>
        <div class="list">
          <h3>업체 평점/리뷰 제공</h3>
          <p>업체별로 평점과 리뷰를 제공합니다</p>
          <p>업체별로 평점과 리뷰를 제공합니다</p>
          <div class="imgbox3"></div>
        </div>
      </li>
    </ul>
  </div>
  <!--point3 e-->
  <!--point4 s-->
  <div class="point4">
    <div class="sns_box">
      <h1>효율적 마케팅</h1>
      <p>마케팅 채널의 다양화로 효율적인 마케팅까지</p>
      <ul class="sns test">
        <li><img src="../../assets/sns1.png" /></li>
        <li><img src="../../assets/sns2.png" /></li>
        <li><img src="../../assets/sns3.png" /></li>
        <li><img src="../../assets/sns4.png" /></li>
        <li><img src="../../assets/sns5.png" /></li>
      </ul>
    </div>
  </div>
  <!--point4 e-->
  <!--point5 s-->
  <div class="point5">
    <h1>창업 사후 관리 서비스</h1>
    <ul class="service">
      <li>
        <div class="service_img1">
          <h4 class="test">소상공인 서비스 제공</h4>
        </div>
        <p>소상공인 세무, 노무, 법률,<br />마케팅 서비스를 제공합니다</p>
      </li>
      <li>
        <div class="service_img2">
          <h4 class="test">창업주 소통 커뮤니티</h4>
        </div>
        <p>
          지역별/업종별 커뮤니티를 조성하여<br />
          창업주님들의 소통 채널을 제공합니다
        </p>
      </li>
    </ul>
  </div>
  <!--point5 e-->
  <!--download s-->
  <div class="download test">
    <h1>창업의 시작을 편리하게!</h1>
    <p>흩어져 있던 창업정보를 창업PICK에서 한 번에 해결하세요</p>
    <ul class="download_list">
      <li>
        <a href="#"><img src="../../assets/google_play.png" /> Google Play</a>
      </li>
      <li>
        <a href="#"><img src="../../assets/apple_logo.png" /> APP Store</a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import UserSwiper, { Autoplay } from 'swiper'
import 'swiper/swiper.min.css'
import { ref } from 'vue'

/*모바일 메뉴 클릭*/
const isMenu = ref<boolean>(false)

UserSwiper.use([Autoplay])

function reveal() {
  var reveals = document.querySelectorAll('.test')

  for (var i = 0; i < reveals.length; i++) {
    var elementTop = reveals[i].getBoundingClientRect().top

    if (elementTop < 800) {
      //창 top에서 800이하로 스크롤을 내렸을 때
      reveals[i].classList.add('active')
    } else {
      reveals[i].classList.remove('active')
    }

    // if (elementTop < windowHeight - elementVisible) {
    //   reveals[i].classList.add('active')
    // } else {
    //   reveals[i].classList.remove('active')
    // }
  }
}

window.addEventListener('scroll', reveal)

//const showMenu = () => {
//  if (isMenu.value) {
//    window.document.body.removeAttribute('style')
//    isMenu.value = false
//  } else {
//    isMenu.value = true
//    window.document.body.setAttribute('style', 'overflow: hidden;')
//  }
//}
</script>

<style lang="scss" scoped>
@import '@/scss/main';
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  color: black;
  font-family: 나눔스퀘어, 'NanumSquare', sans-serif;
}
p {
  color: rgb(105, 105, 105);
}
// 320 ~
@media (min-width: 0px) and (max-width: 767px) {
  .nav_bar {
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo_box {
      margin-left: 30px;
      img {
        width: 100px;
      }
    }
    .home_btn {
      height: 25px;
      width: 25px;
      line-height: 25px;
      text-align: center;
      margin-top: 5px;
      margin-right: 30px;
      background: url(../../assets/icon_home_blue.png) no-repeat center;
      background-size: contain;
      cursor: pointer;
      a {
        display: none;
      }
    }
    /*.mbox {
      z-index: 5;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgb(255, 255, 255);
      opacity: 0;
      visibility: hidden;
      .menu1 {
        margin-top: 100px;
      }
      li {
        padding: 30px;
        font-size: 20px;
        font-weight: 500;
      }
      li:hover {
        background-color: aliceblue;
        a {
          color: rgb(16, 92, 255);
        }
      }
    }
    .mbox.active {
      opacity: 1;
      visibility: visible;
    }

    .more-btn {
      z-index: 10;
      display: block;
      position: absolute;
      right: 12px;
      top: 40px;
      width: 50px;
      height: 50px;
      border: 0;
      background-color: transparent;
      .icon {
        display: block;
        width: 30px;
        height: 30px;
        margin: 0 auto;
        background: url(../../assets/list.svg) no-repeat center;
        background-size: contain;
      }
    }

    .more-btn.active .icon {
      background: url(../../assets/x-lg.svg) no-repeat center;
      background-size: contain;
    }*/
  }

  .main_banner {
    width: 100%;
    height: 30%;
    text-align: center;
    background-color: rgb(226, 244, 255);

    h1 {
      font-size: 18px;
      font-weight: 700;
      padding-top: 60px;
    }
    img {
      position: relative;
      max-width: 60%;
      bottom: -30px;
    }
    .blue_bar {
      height: 10vh;
      background-color: rgb(16, 92, 255);
    }
  }
  .logo_slide {
    width: 100%;
    height: 90px;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-around;
    ul {
      li {
        text-align: center;
      }
    }
    .slide-img {
      width: 100%;
    }
  }
  .chatting {
    text-align: center;
    margin: auto;
    .img1 {
      margin-top: 100px;
      width: 100%;
      transform: translateY(-30px);
      opacity: 0;
      transition: 1s all ease;
      img {
        width: 80%;
      }
      &.active {
        transform: translateY(0);
        opacity: 1;
      }
    }
    .img2 {
      margin-bottom: 100px;
      transform: translateY(30px);
      opacity: 0;
      transition: 1s all ease;
      img {
        width: 80%;
      }
      &.active {
        transform: translateY(0);
        opacity: 1;
      }
    }
  }
  .point1 {
    height: 800px;
    display: flex;
    background-color: rgb(228, 241, 255);
    ul {
      width: 100%;
      height: 900px;
      margin-top: 50px;
      text-align: center;
      li {
        flex: 1;
        height: 350px;
        line-height: 20px;
        font-size: 15px;
        position: relative;
        transform: translateY(50px);
        opacity: 0;
        transition: 1s all ease;
        &.active {
          transform: translateY(0);
          opacity: 1;
        }
        h2 {
          margin-top: 20px;
          font-size: 28px;
          font-weight: 800;
        }
        p {
          font-weight: 500;
        }
      }
    }
    img {
      margin-top: 40px;
      width: 170px;
    }
  }
  .point2 {
    display: flex;
    text-align: center;
    width: 100%;
    .brand {
      width: 100%;
      margin-top: 100px;
      align-items: center;
      position: relative;
      h1 {
        font-size: 30px;
        font-weight: 800;
        padding-bottom: 25px;
      }
      p {
        font-size: 16px;
        line-height: 25px;
      }
      img {
        padding-top: 50px;
        width: 80%;
        margin-bottom: 100px;
      }
    }
    .brand_logo_box {
      width: 100%;
      height: 200px;
      position: absolute;
      margin-top: 270px;
      transform: translateY(100px);
      opacity: 0;
      transition: 1s all ease;
      &.active {
        transform: translateY(0);
        opacity: 1;
      }
    }
    .brand_logo_1 {
      display: flex;
      justify-content: flex-start;
      img {
        margin-left: 10%;
        width: 10%;
        transform: rotate(-20deg);
        transform-origin: left top;
      }
    }
    .brand_logo_2 {
      display: flex;
      justify-content: flex-end;
      margin-top: -20px;
      img {
        width: 10%;
        margin-right: 10%;
        transform: rotate(30deg);
        transform-origin: left top;
      }
    }
    .brand_logo_3 {
      display: flex;
      margin-top: 60px;
      justify-content: flex-start;
      img {
        width: 10%;
        margin-left: 7%;
        transform: rotate(-30deg);
        transform-origin: left top;
      }
    }
    .brand_logo_4 {
      display: flex;
      justify-content: flex-end;
      margin-top: -60px;
      img {
        width: 10%;
        margin-right: 30px;
        transform: rotate(30deg);
        transform-origin: left top;
      }
    }
  }
  .point3 {
    height: 900px;
    background-color: rgb(243, 243, 243);
    .point3_box {
      width: 100%;

      li {
        display: flex;
        align-items: center;
        height: 300px;

        .list {
          margin-left: 30px;
          h3 {
            font-size: 28px;
            font-weight: 800;
            padding-bottom: 20px;
          }
          p {
            font-size: 15px;
            line-height: 25px;
          }
        }
      }
      li:nth-child(1) {
        background-image: url(../../assets/point3_img_1.png);
        background-size: cover;
      }
      li:nth-child(2) {
        background-image: url(../../assets/point3_img_2.png);
        background-size: cover;
      }
      li:nth-child(3) {
        background-image: url(../../assets/point3_img_3.jpg);
        background-size: cover;
      }
    }
  }
  .point4 {
    width: 100%;
    height: 500px;
    .sns_box {
      width: 100%;
      padding-top: 140px;
      text-align: center;
      height: 400px;
      h1 {
        font-size: 30px;
        font-weight: 800;
        padding-bottom: 25px;
      }
      p {
        font-size: 16px;
      }
      .sns {
        width: 100%;
        height: 180px;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0;
        transition: 1s all ease;
        &.active {
          opacity: 1;
        }
        li {
          width: 90%;
          img {
            width: 80%;
          }
        }
      }
    }
  }
  .point5 {
    height: 1000px;
    text-align: center;
    background-color: rgb(243, 243, 243);
    h1 {
      padding-top: 100px;
      font-size: 30px;
      font-weight: 800;
      padding-bottom: 25px;
    }
    .service {
      li {
        width: 100%;
        height: 400px;
        p {
          font-size: 16px;
          margin-top: 20px;
          line-height: 30px;
        }
        h4 {
          font-size: 25px;
          line-height: 280px;
          font-weight: 700;
          color: white;
          transform: translateY(50px);
          opacity: 0;
          transition: 1s all ease;
          &.active {
            transform: translateY(0);
            opacity: 1;
          }
        }
      }
      .service_img1 {
        margin-top: 20px;
        width: 100%;
        height: 280px;
        background-image: url(../../assets/service_img01.png);
        background-size: cover;
      }
      .service_img2 {
        width: 100%;
        height: 280px;
        background-image: url(../../assets/service_img02.png);
        background-size: cover;
        background-position-y: -50px;
      }
    }
  }
  .download {
    height: 350px;
    background-color: rgb(16, 92, 255);
    text-align: center;
    h1 {
      padding-top: 100px;
      font-size: 30px;
      font-weight: 800;
      padding-bottom: 25px;
      color: white;
    }
    p {
      margin: auto;
      width: 90%;
      color: white;
      font-size: 14px;
    }
    .download_list {
      height: 150px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: auto;
      li {
        width: 100%;
        height: 50px;
        margin: 10px;
        background-color: white;
        border-radius: 15px;

        a {
          color: rgb(150, 150, 150);
          font-weight: 600;
        }
        img {
          width: 30px;
          padding-top: 10px;
          vertical-align: -8px;
        }
      }
    }
  }
}

// 768 ~
@media (min-width: 768px) and (max-width: 1024px) {
  .nav_bar {
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo_box {
      margin-left: 30px;
      img {
        width: 100px;
      }
    }
    .home_btn {
      height: 25px;
      width: 25px;
      line-height: 25px;
      text-align: center;
      margin-top: 5px;
      margin-right: 30px;
      background: url(../../assets/icon_home_blue.png) no-repeat center;
      background-size: contain;
      cursor: pointer;
      a {
        display: none;
      }
    }
    /*.mbox {
      display: flex;
    }
    .menu1 {
      display: flex;
      align-items: center;
      li {
        width: 150px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 30px;
        font-size: 18px;
        a {
          color: rgb(0, 0, 0);
        }
        a:hover {
          color: rgb(16, 92, 255);
        }
      }
    }
    .menu2 {
      display: flex;
      li {
        width: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 30px;
        a {
          color: rgb(160, 160, 160);
        }
        a:hover {
          color: rgb(16, 92, 255);
        }
      }
    }*/
  }
  .main_banner {
    height: 450px;
    text-align: center;
    background-color: rgb(226, 244, 255);
    h1 {
      font-size: 35px;
      font-weight: 700;
      padding-top: 60px;
    }
    img {
      width: 450px;
      position: relative;
      bottom: -50px;
    }
    .blue_bar {
      height: 100px;
      background-color: rgb(16, 92, 255);
    }
  }
  .logo_slide {
    height: 100px;
    margin-top: 130px;
    ul {
      display: flex;
      align-items: center;
      justify-content: space-around;
      height: 100px;
      li {
        flex: 1;
        text-align: center;
      }
    }
    .slide-img {
      width: 80%;
    }
  }
  .chatting {
    height: 700px;
    text-align: center;

    .img1 {
      height: 280px;
      margin: auto;
      padding-top: 150px;
      position: relative;
      transform: translateY(-50px);
      opacity: 0;
      transition: 1s all ease;
      img {
        width: 80%;
        margin-left: -100px;
      }
      &.active {
        transform: translateY(0);
        opacity: 1;
      }
    }

    .img2 {
      position: relative;
      transform: translateY(50px);
      opacity: 0;
      transition: 1s all ease;
      img {
        width: 75%;
        margin-right: -100px;
      }
      &.active {
        transform: translateY(0);
        opacity: 1;
      }
    }
  }
  .point1 {
    height: 900px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(228, 241, 255);
    ul {
      width: 768px;
      height: 900px;
      display: flex;
      text-align: center;
      align-items: center;
      li {
        flex: 1;
        line-height: 30px;
        font-size: 20px;
        position: relative;
        transform: translateY(50px);
        opacity: 0;
        transition: 1s all ease;
        &.active {
          transform: translateY(0);
          opacity: 1;
        }
        h2 {
          margin-top: 20px;
          font-size: 35px;
          font-weight: 800;
        }
        p {
          font-weight: 500;
        }
      }
    }
    img {
      width: 250px;
    }
  }

  .point2 {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;
    height: 1000px;
    .brand {
      width: 100%;
      height: 900px;
      align-items: center;
      h1 {
        font-size: 40px;
        font-weight: 800;
        padding-bottom: 25px;
        margin-top: 150px;
      }
      p {
        font-size: 19px;
        line-height: 30px;
      }
      img {
        padding-top: 100px;
        width: 750px;
      }
    }
    .brand_logo_box {
      margin-top: 250px;
      width: 750px;
      position: absolute;
      transform: translateY(100px);
      opacity: 0;
      transition: 1s all ease;
      &.active {
        transform: translateY(0);
        opacity: 1;
      }
      .brand_logo_1 {
        display: flex;
        justify-content: flex-start;
        img {
          margin-left: 30px;
          width: 10%;
          transform: rotate(-20deg);
          transform-origin: left top;
        }
      }
      .brand_logo_2 {
        display: flex;
        justify-content: flex-end;
        img {
          margin-top: -30px;
          width: 10%;
          transform: rotate(40deg);
          transform-origin: left top;
        }
      }
      .brand_logo_3 {
        display: flex;
        margin-top: 60px;
        justify-content: flex-start;
        img {
          width: 10%;
          transform: rotate(-30deg);
          transform-origin: left top;
        }
      }
      .brand_logo_4 {
        display: flex;
        justify-content: flex-end;
        img {
          margin-top: -80px;
          width: 10%;
          transform: rotate(30deg);
          transform-origin: left top;
        }
      }
    }
  }
  .point3 {
    width: 100%;
    height: 500px;
    .point3_box {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      transform: translateY(50px);
      opacity: 0;
      transition: 1s all ease;
      &.active {
        transform: translateY(0);
        opacity: 1;
      }
      li {
        width: 33.3%;
        height: 550px;
        background-color: rgb(255, 255, 255);
        box-shadow: 1px 1px 15px rgb(209, 209, 209);
        .top_bar {
          height: 20px;
          background-color: rgb(9, 96, 241);
        }
        .list {
          padding-top: 70px;
          text-align: center;
          h3 {
            font-size: 25px;
            font-weight: 800;
            padding-bottom: 20px;
          }
          p {
            font-size: 13px;
            line-height: 25px;
          }
          .imgbox1 {
            width: 90%;
            height: 250px;
            margin-top: 80px;
            margin-left: 10px;
            background-color: rgb(245, 250, 225);
            border: 1px solid rgb(165, 165, 165);
            background-image: url(../../assets/point3_img_1.png);
            background-size: cover;
          }
          .imgbox2 {
            width: 90%;
            height: 250px;
            margin-top: 80px;
            margin-left: 10px;
            background-color: rgb(245, 250, 225);
            border: 1px solid rgb(165, 165, 165);
            background-image: url(../../assets/point3_img_2.png);
            background-size: cover;
          }
          .imgbox3 {
            width: 90%;
            height: 250px;
            margin-top: 80px;
            margin-left: 10px;
            background-color: rgb(245, 250, 225);
            border: 1px solid rgb(165, 165, 165);
            background-image: url(../../assets/point3_img_3.jpg);
            background-size: cover;
          }
        }
      }
    }
  }
  .point4 {
    height: 900px;
    .sns_box {
      width: 100%;
      text-align: center;
      margin: auto;
      h1 {
        padding-top: 300px;
        font-size: 40px;
        font-weight: 800;
        padding-bottom: 25px;
      }
      p {
        font-size: 19px;
      }
      .sns {
        height: 250px;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0;
        transition: 1s all ease;
        &.active {
          opacity: 1;
        }
        li {
          padding: 5px;
          img {
            width: 120px;
          }
        }
      }
    }
  }
  .point5 {
    height: 900px;
    text-align: center;
    background-color: rgb(243, 243, 243);
    h1 {
      padding-top: 200px;
      font-size: 40px;
      font-weight: 800;
      padding-bottom: 25px;
    }
    .service {
      display: flex;
      justify-content: center;
      align-items: center;
      li {
        width: 500px;
        height: 400px;
        p {
          font-size: 20px;
          margin-top: 30px;
          line-height: 30px;
        }
      }

      .service_img1 {
        margin-top: 50px;
        width: 100%;
        height: 280px;
        background-image: url(../../assets/service_img01.png);
        background-size: cover;
        h4 {
          font-size: 30px;
          line-height: 280px;
          font-weight: 700;
          color: white;
          transform: translateY(50px);
          opacity: 0;
          transition: 1s all ease;
          &.active {
            transform: translateY(0);
            opacity: 1;
          }
        }
      }

      .service_img2 {
        margin-top: 50px;
        width: 100%;
        height: 280px;
        background-image: url(../../assets/service_img02.png);
        background-size: cover;
        background-position-y: -50px;
        h4 {
          font-size: 30px;
          line-height: 280px;
          font-weight: 700;
          color: white;
          transform: translateY(50px);
          opacity: 0;
          transition: 1s all ease;
          &.active {
            transform: translateY(0);
            opacity: 1;
          }
        }
      }
    }
  }
  .download {
    height: 500px;
    background-color: rgb(16, 92, 255);
    text-align: center;
    h1 {
      padding-top: 150px;
      font-size: 50px;
      font-weight: 800;
      padding-bottom: 25px;
      color: white;
    }
    p {
      color: white;
      font-size: 30px;
    }
    .download_list {
      height: 200px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: auto;
      li {
        width: 300px;
        height: 50px;
        margin: 10px;
        background-color: white;
        border-radius: 15px;

        a {
          color: rgb(150, 150, 150);
          font-weight: 600;
        }
        img {
          width: 30px;
          padding-top: 10px;
          vertical-align: -8px;
        }
      }
    }
  }
}

// 1024 ~
@media (min-width: 1024px) {
  .nav_bar {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 130px;
    .logo_box {
      img {
        width: 150px;
      }
    }
    .home_btn {
      width: 150px;
      height: 40px;
      line-height: 40px;
      margin-top: 15px;
      border-radius: 10px;
      background-color: rgb(16, 92, 255);
      text-align: center;
      a {
        color: white;
      }
    }
  }

  /*.mbox {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 50%;
  }
  .menu1 {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 800px;
    margin-left: -100px;
    li {
      width: 130px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 30px;
      font-size: 18px;
      a {
        color: black;
      }
      a:hover {
        color: rgb(16, 92, 255);
      }
    }
  }

  .menu2 {
    display: flex;
    justify-items: flex-end;
    li {
      width: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 30px;
      a {
        color: rgb(160, 160, 160);
      }
      a:hover {
        color: rgb(16, 92, 255);
      }
    }
  }*/
  .main_banner {
    height: 500px;
    text-align: center;
    background-color: rgb(226, 244, 255);
    h1 {
      font-size: 40px;
      font-weight: 700;
      padding-top: 60px;
    }
    img {
      width: 450px;
      position: relative;
      bottom: -50px;
    }
    .blue_bar {
      height: 100px;
      background-color: rgb(16, 92, 255);
    }
  }
  .logo_slide {
    height: 100px;
    margin-top: 130px;
    ul {
      display: flex;
      align-items: center;
      justify-content: space-around;
      height: 100px;
      li {
        flex: 1;
        text-align: center;
      }
    }
    .slide-img {
      width: 70%;
    }
  }
  .chatting {
    width: 100%;
    height: 800px;
    text-align: center;

    .img1 {
      width: 100%;
      height: 300px;
      margin: auto;
      padding-top: 200px;
      position: relative;
      transform: translateY(-100px);
      opacity: 0;
      transition: 1s all ease;
      img {
        margin-left: -200px;
      }
    }
    .img1.active {
      transform: translateY(0);
      opacity: 1;
    }

    .img2 {
      width: 100%;
      height: 400px;
      margin: auto;
      position: relative;
      transform: translateY(100px);
      opacity: 0;
      transition: 1s all ease;
      img {
        margin-right: -200px;
      }
      &.active {
        transform: translateY(0);
        opacity: 1;
      }
    }
  }
  .point1 {
    height: 900px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(228, 241, 255);
    ul {
      width: 1280px;
      height: 900px;
      display: flex;
      text-align: center;
      align-items: center;
      li {
        flex: 1;
        line-height: 30px;
        font-size: 20px;
        position: relative;
        transform: translateY(50px);
        opacity: 0;
        transition: 1s all ease;
        &.active {
          transform: translateY(0);
          opacity: 1;
        }
        h2 {
          margin-top: 20px;
          font-size: 35px;
          font-weight: 800;
        }
        p {
          font-weight: 500;
        }
      }
    }
    img {
      width: 300px;
    }
  }

  .point2 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 1200px;
    .brand {
      height: 800px;
      width: 100%;
      text-align: center;
      h1 {
        font-size: 50px;
        font-weight: 800;
        padding-bottom: 25px;
      }
      p {
        font-size: 20px;
        line-height: 30px;
      }
      img {
        padding-top: 50px;
        width: 1000px;
      }
    }
    .brand_logo_box {
      width: 1000px;
      position: absolute;
      transform: translateY(100px);
      opacity: 0;
      transition: 1s all ease;
      &.active {
        transform: translateY(0);
        opacity: 1;
      }
      .brand_logo_1 {
        display: flex;
        justify-content: flex-start;
        img {
          margin-left: 60px;
          width: 80px;
          transform: rotate(-20deg);
          transform-origin: left top;
        }
      }
      .brand_logo_2 {
        display: flex;
        justify-content: flex-end;
        img {
          margin-top: -30px;
          width: 100px;
          transform: rotate(40deg);
          transform-origin: left top;
        }
      }
      .brand_logo_3 {
        display: flex;
        margin-top: 50px;
        justify-content: flex-start;
        img {
          width: 100px;
          transform: rotate(-30deg);
          transform-origin: left top;
        }
      }
      .brand_logo_4 {
        display: flex;
        justify-content: flex-end;
        img {
          margin-top: -80px;
          width: 80px;
          transform: rotate(20deg);
          transform-origin: left top;
        }
      }
    }
  }
  .point3 {
    width: 100%;
    height: 500px;
    background-color: rgb(243, 243, 243);
    .point3_box {
      width: 100%;
      height: 500px;
      margin: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      transform: translateY(50px);
      opacity: 0;
      transition: 1s all ease;
      &.active {
        transform: translateY(0);
        opacity: 1;
      }
      li {
        text-align: center;
        width: 410px;
        height: 550px;
        margin: 10px;
        background-color: rgb(255, 255, 255);
        box-shadow: 1px 1px 15px rgb(209, 209, 209);
        .top_bar {
          height: 20px;
          background-color: rgb(9, 96, 241);
        }
        .list {
          padding-top: 70px;

          h3 {
            font-size: 30px;
            font-weight: 800;
            padding-bottom: 20px;
          }
          p {
            font-size: 16px;
            line-height: 25px;
          }
          .imgbox1 {
            margin: auto;
            width: 90%;
            height: 250px;
            margin-top: 80px;
            background-color: rgb(245, 250, 225);
            border: 1px solid rgb(165, 165, 165);
            background-image: url(../../assets/point3_img_1.png);
            background-size: cover;
          }
          .imgbox2 {
            margin: auto;
            width: 90%;
            height: 250px;
            margin-top: 80px;
            background-color: rgb(245, 250, 225);
            border: 1px solid rgb(165, 165, 165);
            background-image: url(../../assets/point3_img_2.png);
            background-size: cover;
          }
          .imgbox3 {
            margin: auto;
            width: 90%;
            height: 250px;
            margin-top: 80px;
            background-color: rgb(245, 250, 225);
            border: 1px solid rgb(165, 165, 165);
            background-image: url(../../assets/point3_img_3.jpg);
            background-size: cover;
          }
        }
      }
    }
  }
  .point4 {
    height: 900px;
    width: 100%;
    .sns_box {
      width: 100%;
      text-align: center;
      margin: auto;
      h1 {
        padding-top: 300px;
        font-size: 50px;
        font-weight: 800;
        padding-bottom: 25px;
      }
      p {
        font-size: 20px;
      }
      .sns {
        height: 250px;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0;
        transition: 1s all ease;
        &.active {
          opacity: 1;
        }
        li {
          padding: 10px;
          img {
            width: 100%;
          }
        }
      }
    }
  }
  .point5 {
    height: 900px;
    text-align: center;
    background-color: rgb(243, 243, 243);
    h1 {
      padding-top: 200px;
      font-size: 50px;
      font-weight: 800;
      padding-bottom: 25px;
    }
    .service {
      display: flex;
      justify-content: center;
      align-items: center;
      li {
        width: 500px;
        height: 400px;
        padding: 20px;
        li:nth-child(1) {
          transform: translateY(50px);
          opacity: 0;
          transition: 1s all ease;
          &.active {
            transform: translateY(0);
            opacity: 1;
          }
        }
        p {
          font-size: 20px;
          margin-top: 30px;
          line-height: 30px;
        }
      }

      .service_img1 {
        margin-top: 50px;
        width: 500px;
        height: 280px;
        border-radius: 30px;
        background-color: rgb(95, 95, 95);
        background-image: url(../../assets/service_img01.png);
        background-size: cover;
        h4 {
          font-size: 30px;
          line-height: 280px;
          font-weight: 700;
          color: white;
          transform: translateY(50px);
          opacity: 0;
          transition: 1s all ease;
          &.active {
            transform: translateY(0);
            opacity: 1;
          }
        }
      }

      .service_img2 {
        margin-top: 50px;
        width: 500px;
        height: 280px;
        border-radius: 30px;
        background-color: rgb(95, 95, 95);
        background-image: url(../../assets/service_img02.png);
        background-size: cover;
        background-position-y: -50px;
        h4 {
          font-size: 30px;
          line-height: 280px;
          font-weight: 700;
          color: white;
          transform: translateY(50px);
          opacity: 0;
          transition: 1s all ease;
          &.active {
            transform: translateY(0);
            opacity: 1;
          }
        }
      }
    }
  }
  .download {
    height: 500px;
    background-color: rgb(16, 92, 255);
    text-align: center;
    h1 {
      padding-top: 150px;
      font-size: 50px;
      font-weight: 800;
      padding-bottom: 25px;
      color: white;
    }
    p {
      color: white;
      font-size: 30px;
    }
    .download_list {
      width: 500px;
      height: 200px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: auto;

      li {
        width: 200px;
        height: 50px;
        margin: 10px;
        background-color: white;
        border-radius: 15px;

        a {
          color: rgb(150, 150, 150);
          font-weight: 600;
        }
        img {
          width: 30px;
          padding-top: 10px;
          vertical-align: -8px;
        }
      }
    }
  }
}
</style>
