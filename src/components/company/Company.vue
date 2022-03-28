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
    <div class="main_img"></div>
  </div>
  <div class="logo_slide">
    <h1>창업PICK과 <b>함께하고 있는 브랜드</b></h1>
    <div class="slide_box">
      <div class="gradation_box1">
        <img src="../../assets/gradation1.png" />
      </div>
      <div class="gradation_box2">
        <img src="../../assets/gradation2.png" />
      </div>
    </div>
  </div>
  <!--main e-->
  <!--question s-->
  <div class="question">
    <div class="question_box">
      <img src="../../assets/question_img_3.png" class="q_img3" />
      <h1>성공한 사장님들은 왜<br /><b>창업PICK</b>을 선택했을까?</h1>
    </div>
    <div class="question_img">
      <img src="../../assets/question_img_1.png" class="q_img1" />
      <img src="../../assets/question_img_2.png" class="q_img2 test" />
    </div>
  </div>
  <!--question e-->
  <!--point1 s-->
  <div class="point1">
    <h1>믿을 수 있는 성공 파트너, <b>창업PICK</b></h1>
    <ul class="point1_box">
      <li>
        <div>
          <img src="../../assets/point1_icon_1.png" class="test" />
          <p>편리한 창업</p>
        </div>
        <p class="p_text">불편했던 창업계획<br />처음부터 끝까지 함께합니다</p>
      </li>
      <li>
        <div class="p1_bg">
          <img src="../../assets/point1_icon_2.png" class="test" />
          <p>합리적 비용</p>
        </div>
        <p class="p_text">
          효율적 마케팅 채널의 다양화로<br />인한 창업비용을 감소
        </p>
      </li>
      <li>
        <div class="p1_bg">
          <img src="../../assets/point1_icon_3.png" class="test" />
          <p>투명한 시장</p>
        </div>
        <p class="p_text">
          등록브랜드 및 상업용 부동산<br />투명성을 확대하여 비교/견적
        </p>
      </li>
      <li>
        <div>
          <img src="../../assets/point1_icon_4.png" class="test" />
          <p>사후관리 서비스</p>
        </div>
        <p class="p_text">
          소상공인 세무,노무,법률,마케팅 등<br />창업 이후 서비스 제공
        </p>
      </li>
    </ul>
  </div>
  <!--point1 e-->
  <!--point2 s-->
  <div class="point2">
    <div class="brand">
      <h1>브랜드 관리 솔루션</h1>
      <p>
        브랜드 관리 SaaS 솔루션을 통한 가맹점 관리, 상권분석, 계약관리 등의
        서비스를 제공합니다
      </p>
      <img src="../../assets/laptop2.png" />
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
          <h3>가맹점 관리</h3>
          <p>가맹사업 정보공개서 바탕으로 브랜드별</p>
          <p>비교 및 분석을 통한 맞춤형 인사이트 제공합니다</p>
          <div class="imgbox1"></div>
        </div>
      </li>
      <li>
        <div class="top_bar"></div>
        <div class="list">
          <h3>상권분석</h3>
          <p>입지 선택 과정에서 추천부동산 서비스와</p>
          <p>매물 등록 및 추천서비스를 제공합니다</p>
          <div class="imgbox2"></div>
        </div>
      </li>
      <li>
        <div class="top_bar"></div>
        <div class="list">
          <h3>계약관리</h3>
          <p>상업용 중심의 인테리어 비교견적 서비스와</p>
          <p>도면 첨부를 통한 시공업체 비교견적 제공합니다</p>
          <div class="imgbox3"></div>
        </div>
      </li>
    </ul>
  </div>
  <!--point3 e-->
  <!--point4 s-->
  <div class="point4">
    <div class="messenger">
      <h1>브랜드 메신저 서비스</h1>
      <p>
        자사 브랜드에 관심있는 예비창업자에게 브랜드를 소개하고 함께 할 점주님을
        찾아보세요
      </p>
      <div class="messenger_img_box">
        <img src="../../assets/c_p4_question.png" class="img_question test" />
        <img src="../../assets/c_p4_pc.png" class="img_pc" />
        <img src="../../assets/c_p4_paper.png" class="img_paper test" />
      </div>
    </div>
  </div>
  <!--point e-->
  <!--point5 s-->
  <div class="point5">
    <h1>브랜드 광고 서비스</h1>
    <ul class="service">
      <li @click="aImg('hotclip')">브랜드 핫클립</li>
      <li @click="aImg('brand')">유망브랜드</li>
      <li @click="aImg('recommend')">추천브랜드</li>
    </ul>
    <ul class="p5_img_box">
      <li v-if="pointImg[0]">
        <img src="../../assets/c_p5_img1.png" />
      </li>
      <li v-else-if="pointImg[1]">
        <img src="../../assets/c_p5_img2.png" />
      </li>
      <li v-else>
        <img src="../../assets/c_p5_img3.png" />
      </li>
    </ul>
  </div>
  <!--point5 e-->
  <!--sns s-->
  <div class="sns">
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
  <!--sns e-->
  <!--premium s-->
  <div class="premium">
    <h1>프리미엄 멤버십 서비스</h1>
    <ul class="premium_box">
      <li>
        <img src="../../assets/icon_finger_1.png" />
        <p>대표 해시태그<br />키워드추가</p>
      </li>
      <li>
        <img src="../../assets/icon_finger_2.png" />
        <p>업종 및 카테고리<br />페이지 상위 노출</p>
      </li>
      <li>
        <img src="../../assets/icon_finger_3.png" />
        <p>창업문의 비교견적<br />정보 제공</p>
      </li>
    </ul>
  </div>
  <!--premium e-->
  <!--free banner s-->
  <div class="free_banner">
    <div class="free_box">
      <a href="#">
        <img src="../../assets/icon_deal_w.png" />
        <p>첫기업 대상 프리미엄 멤버십 <b>30일</b> 무료 체험 >></p>
      </a>
    </div>
  </div>
  <!--free banner e-->
  <!--download s-->
  <div class="download test">
    <h1>브랜드 마케팅을 편리하게!</h1>
    <p>브랜드관리, 마케팅, 사후관리까지 창업PICK에서 한 번에 해결하세요</p>
    <ul class="download_list">
      <li>
        <a href="#">회원가입</a>
      </li>
      <li>
        <a href="#">파트너 문의</a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import UserSwiper, { Autoplay } from 'swiper'
import 'swiper/swiper.min.css'
import { reactive, ref } from 'vue'

/*모바일 메뉴 클릭*/
const isMenu = ref<boolean>(false)
const pointImg = reactive([true, false, false])

function aImg(type: string) {
  if (type === 'hotclip') {
    pointImg[0] = true
    pointImg[1] = false
    pointImg[2] = false
  } else if (type === 'brand') {
    pointImg[0] = false
    pointImg[1] = true
    pointImg[2] = false
  } else {
    pointImg[0] = false
    pointImg[1] = false
    pointImg[2] = true
  }
}

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
  }
  .main_banner {
    width: 100%;
    height: 300px;
    .main_img {
      height: 300px;
      background: url(../../assets/main_img3.jpg) no-repeat 30%;
      background-size: cover;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }
  }

  .logo_slide {
    width: 100%;
    height: 550px;
    h1 {
      padding-top: 60px;
      height: 50px;
      line-height: 50px;
      font-size: 23px;
      text-align: center;
      font-weight: bold;
      b {
        color: rgb(16, 92, 255);
      }
    }
    .slide_box {
      margin: auto;
      width: 100%;
      height: 400px;
      overflow: hidden;
      position: relative;
      background: url(../../assets/brand_list.png);
      background-repeat: repeat-x;
      animation: movebg 50s linear infinite;

      @keyframes movebg {
        0% {
          background-position: 0 center;
        }
        100% {
          background-position: -2000px center;
        }
      }

      .gradation_box1 {
        position: absolute;
        img {
          height: 400px;
        }
      }
      .gradation_box2 {
        position: absolute;
        height: 100px;
        right: 0;
        img {
          height: 400px;
        }
      }
    }
  }
  .question {
    width: 100%;
    height: 600px;
    text-align: center;
    background-color: rgb(241, 241, 241);
    .question_box {
      height: 100px;
      width: 100%;
      padding-top: 130px;
      margin: auto;
      .q_img3 {
        //물음표
        position: absolute;
        margin-top: -50px;
        margin-left: -50px;
        width: 100px;
      }
      h1 {
        font-size: 24px;
        font-weight: bold;
        b {
          color: rgb(16, 92, 255);
        }
      }
    }
    .question_img {
      width: 100%;
      height: 300px;
      text-align: center;
      margin-top: 20px;
      .q_img1 {
        width: 90%;
      }
      .q_img2 {
        //손가락
        width: 15%;
        position: absolute;
        margin-left: -80px;
        margin-top: 190px;
        transform: translateY(30px);
        opacity: 0;
        transition: 1s all ease;

        &.active {
          transform: translateY(0);
          opacity: 1;
        }
      }
    }
  }
  .point1 {
    width: 100%;
    height: 622px;
    background-color: rgb(16, 92, 255);
    text-align: center;
    h1 {
      padding-top: 80px;
      font-size: 22px;
      color: white;
      b {
        font-weight: bold;
        color: white;
      }
    }
    .point1_box {
      width: 100%;
      height: 600px;
      margin: auto;
      margin-top: 60px;
      div {
        float: left;
        width: 50%;
        height: 230px;
        background-color: white;
        img {
          margin-top: 50px;
        }
        p {
          font-size: 20px;
          margin-top: 20px;
          font-weight: 600;
          color: black;
        }
      }
      .p1_bg {
        background-color: rgb(240, 240, 240);
      }
      .p_text {
        display: none;
        font-weight: 300;
        font-size: 16px;
        margin-top: 20px;
        line-height: 26px;
        color: white;
      }
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
        width: 90%;
        margin: auto;
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
        height: 300px;
        .list {
          margin-left: 30px;
          height: 100px;
          h3 {
            font-size: 28px;
            font-weight: 800;
            padding-bottom: 20px;
            padding-top: 100px;
          }
          p {
            font-size: 16px;
            line-height: 25px;
          }
          .top_bar {
            display: none;
          }
        }
      }
      li:nth-child(1) {
        background-image: url(../../assets/c_p3_img1-opacity.png);
        background-size: cover;
      }
      li:nth-child(2) {
        background-image: url(../../assets/c_p3_img2-opacity.png);
        background-size: cover;
      }
      li:nth-child(3) {
        background-image: url(../../assets/c_p3_img3-opacity.png);
        background-size: cover;
      }
    }
  }
  .point4 {
    height: 530px;
    text-align: center;
    .messenger {
      height: 500px;
      h1 {
        padding-top: 100px;
        font-size: 30px;
        font-weight: 800;
        padding-bottom: 25px;
      }
      p {
        margin: auto;
        width: 90%;
        font-size: 16px;
        line-height: 24px;
      }
      .messenger_img_box {
        width: 100%;
        margin: auto;
        .img_pc {
          width: 60%;
          margin-top: 50px;
        }
        .img_question {
          width: 45%;
          margin-top: 80px;
          position: absolute;
          margin-left: -50px;
          transform: translateY(-30px);
          opacity: 0;
          transition: 1s all ease;
          &.active {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .img_paper {
          width: 45%;
          margin-top: 100px;
          margin-left: -110px;
          position: absolute;
          transform: translateY(30px);
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
  .point5 {
    height: 530px;
    text-align: center;
    background-color: #f6f9fe;
    h1 {
      padding-top: 100px;
      font-size: 30px;
      font-weight: 800;
      padding-bottom: 25px;
    }
    .service {
      display: flex;
      justify-content: center;
      align-items: center;
      li {
        width: 25%;
        height: 15px;
        padding: 8px;
        font-size: 15px;
        margin: 2px;
        border: 1px solid #0960f1;
        color: #0960f1;
        cursor: pointer;
        border-radius: 5px;
      }
      li:hover {
        background-color: #0960f1;
        color: white;
      }
    }

    .p5_img_box {
      margin: auto;
      width: 100%;
      height: 800px;
      text-align: center;
      margin-top: 40px;
      li {
        margin: auto;
        width: 95%;
        height: 600px;
        text-align: center;
        img {
          width: 100%;
        }
      }
    }
  }
  .sns {
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
        width: 70%;
        margin: auto;
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
          width: 100%;
          img {
            width: 90%;
          }
        }
      }
    }
  }
  .premium {
    height: 370px;
    background-color: #f6f9fe;
    text-align: center;
    h1 {
      padding-top: 100px;
      font-size: 30px;
      font-weight: 800;
      padding-bottom: 25px;
    }
    .premium_box {
      width: 100%;
      height: 200px;
      margin: auto;
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-top: 20px;
      li {
        width: 100%;
        height: 200px;
        background-color: #e9f1ff;
        img {
          margin-top: 30px;
          width: 40px;
        }
        p {
          margin-top: 10px;
          font-size: 16px;
          line-height: 24px;
          font-weight: 600;
        }
      }
    }
  }
  .free_banner {
    height: 180px;
    background-color: rgb(16, 92, 255);
    .free_box {
      width: 60%;
      height: 180px;
      margin: auto;
      display: flex;
      align-items: center;
      a {
        text-align: center;
        img {
          width: 50px;
          padding-bottom: 5px;
        }
        p {
          font-size: 18px;
          line-height: 30px;
          color: white;
          font-weight: 300;
          b {
            color: white;
            font-weight: bold;
          }
        }
      }
    }
  }
  .download {
    width: 100%;
    height: 400px;
    background: url(../../assets/download_bg.png);
    background-size: cover;
    text-align: center;
    h1 {
      padding-top: 110px;
      font-size: 30px;
      font-weight: 800;
      padding-bottom: 25px;
      color: white;
    }
    p {
      width: 90%;
      margin: auto;
      color: white;
      font-size: 18px;
    }
    .download_list {
      width: 100%;
      height: 150px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: auto;

      li {
        width: 150px;
        height: 50px;
        margin: 10px;
        line-height: 50px;
        background-color: white;
        border-radius: 15px;
        a {
          color: rgb(36, 36, 36);
          font-weight: bold;
          font-size: 18px;
          padding: 20px;
        }
      }
      li:nth-child(2) {
        background-color: #0960f1;
        a {
          color: white;
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
  }
  .main_banner {
    height: 500px;
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
    width: 100%;
    height: 800px;
    h1 {
      padding-top: 150px;
      padding-bottom: 50px;
      height: 50px;
      line-height: 50px;
      font-size: 40px;
      text-align: center;
      font-weight: bold;
      b {
        color: rgb(16, 92, 255);
      }
    }
    .slide_box {
      margin: auto;
      width: 80%;
      height: 400px;
      overflow: hidden;
      position: relative;
      background: url(../../assets/brand_list.png);
      background-repeat: repeat-x;
      animation: movebg 50s linear infinite;

      @keyframes movebg {
        0% {
          background-position: 0 center;
        }
        100% {
          background-position: -2000px center;
        }
      }

      .gradation_box1 {
        position: absolute;
        img {
          height: 400px;
        }
      }
      .gradation_box2 {
        position: absolute;
        height: 100px;
        right: 0;
        img {
          height: 400px;
        }
      }
    }
  }
  .question {
    width: 100%;
    height: 900px;
    text-align: center;
    background-color: rgb(241, 241, 241);
    .qustion_box {
      padding-top: 150px;
      height: 150px;
      text-align: center;
      margin: auto;

      .q_img3 {
        //물음표
        position: absolute;
        margin-top: -30px;
        margin-left: -50px;
        width: 100px;
      }
      h1 {
        font-size: 40px;
        font-weight: bold;
        b {
          color: rgb(16, 92, 255);
        }
      }
      .q_img1 {
        width: 80%;
        height: auto;
        margin-top: 80px;
        margin-left: -50px;
      }
      .q_img2 {
        //손가락
        width: 10%;
        margin-left: -130px;
        transform: translateY(30px);
        opacity: 0;
        transition: 1s all ease;
        &.active {
          transform: translateY(0);
          opacity: 1;
        }
      }
    }
  }
  .point1 {
    width: 100%;
    height: 800px;
    background-color: rgb(16, 92, 255);
    text-align: center;
    h1 {
      padding-top: 150px;
      font-size: 45px;
      color: white;
      b {
        font-weight: bold;
        color: white;
      }
    }
    .point1_box {
      width: 90%;
      height: 600px;
      margin: auto;
      margin-top: 60px;
      div {
        float: left;
        width: 50%;
        height: 230px;
        background-color: white;
        img {
          margin-top: 50px;
        }
        p {
          font-size: 20px;
          margin-top: 20px;
          font-weight: 600;
          color: black;
        }
      }
      .p1_bg {
        background-color: rgb(240, 240, 240);
      }
      .p_text {
        display: none;
        font-weight: 300;
        font-size: 16px;
        margin-top: 20px;
        line-height: 26px;
        color: white;
      }
    }
  }

  .point2 {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;
    height: 800px;
    .brand {
      width: 100%;
      height: 900px;
      align-items: center;
      h1 {
        font-size: 40px;
        font-weight: 800;
        padding-bottom: 25px;
        margin-top: 200px;
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
            background-image: url(../../assets/c_p3_img1.png);
            background-size: cover;
          }
          .imgbox2 {
            width: 90%;
            height: 250px;
            margin-top: 80px;
            margin-left: 10px;
            background-color: rgb(245, 250, 225);
            border: 1px solid rgb(165, 165, 165);
            background-image: url(../../assets/c_p3_img2.png);
            background-size: cover;
          }
          .imgbox3 {
            width: 90%;
            height: 250px;
            margin-top: 80px;
            margin-left: 10px;
            background-color: rgb(245, 250, 225);
            border: 1px solid rgb(165, 165, 165);
            background-image: url(../../assets/c_p3_img3.png);
            background-size: cover;
          }
        }
      }
    }
  }
  .point4 {
    height: 850px;
    background-color: white;
    text-align: center;
    .messenger {
      height: 600px;
      h1 {
        padding-top: 200px;
        font-size: 40px;
        font-weight: 800;
        padding-bottom: 25px;
      }
      p {
        font-size: 19px;
      }
      .messenger_img_box {
        width: 100%;
        margin: auto;
        .img_pc {
          width: 50%;
          margin-top: 50px;
        }
        .img_question {
          width: 40%;
          margin-top: 90px;
          margin-left: -120px;
          position: absolute;
          transform: translateX(-30px);
          opacity: 0;
          transition: 1s all ease;
          &.active {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .img_paper {
          width: 40%;
          margin-top: 130px;
          margin-left: -190px;
          position: absolute;
          transform: translateX(30px);
          opacity: 0;
          transition: 1s all ease;
          &.active {
            transform: translateX(0);
            opacity: 1;
          }
        }
      }
    }
  }
  .point5 {
    height: 1000px;
    text-align: center;
    background-color: #f6f9fe;
    h1 {
      padding-top: 150px;
      font-size: 40px;
      font-weight: 800;
      padding-bottom: 25px;
    }
    .service {
      display: flex;
      justify-content: center;
      align-items: center;
      li {
        width: 100px;
        height: 15px;
        margin: 20px;
        padding: 20px;
        border-radius: 30px;
        border: 1px solid #0960f1;
        color: #0960f1;
        cursor: pointer;
      }
      li:hover {
        background-color: #0960f1;
        color: white;
      }
      //li:nth-chlid(1) {}
    }
    .p5_img_box {
      height: 800px;
      text-align: center;
      margin-top: 40px;
      li {
        margin: auto;
        width: 90%;
        height: 600px;
        text-align: center;
        img {
          width: 100%;
        }
      }
    }
  }
  .sns {
    height: 700px;
    .sns_box {
      width: 100%;
      text-align: center;
      margin: auto;
      h1 {
        padding-top: 200px;
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
  .premium {
    height: 600px;
    background-color: #f6f9fe;
    text-align: center;
    h1 {
      padding-top: 150px;
      font-size: 50px;
      font-weight: 800;
      padding-bottom: 25px;
    }
    .premium_box {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 30px;
      li {
        width: 200px;
        height: 200px;
        border-radius: 100px;
        background-color: #e9f1ff;
        margin: 20px;
        img {
          margin-top: 30px;
          width: 40px;
        }
        p {
          margin-top: 10px;
          font-size: 18px;
          line-height: 24px;
          font-weight: 600;
        }
      }
    }
  }
  .free_banner {
    height: 150px;
    background-color: rgb(16, 92, 255);
    line-height: 150px;
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      p {
        font-size: 30px;
        color: white;
        font-weight: 300;
        b {
          color: white;
          font-weight: bold;
        }
      }
    }
    img {
      width: 60px;
      padding: 15px;
    }
  }
  .download {
    height: 500px;
    background: url(../../assets/download_bg.png);
    background-size: cover;
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
      font-size: 26px;
    }
    .download_list {
      width: 500px;
      height: 150px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: auto;

      li {
        width: 200px;
        height: 50px;
        margin: 10px;
        line-height: 50px;
        background-color: white;
        border-radius: 15px;
        a {
          color: rgb(36, 36, 36);
          font-weight: bold;
          font-size: 20px;
          padding: 20px 50px 20px 50px;
        }
      }
      li:nth-child(2) {
        background-color: #0960f1;
        a {
          color: white;
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

  .main_banner {
    width: 100%;
    height: 600px;
    .main_img {
      height: 600px;
      background: url(../../assets/main_img3.jpg) no-repeat 50%;
      background-size: cover;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }
  }
  .logo_slide {
    width: 100%;
    height: 800px;
    h1 {
      padding-top: 150px;
      padding-bottom: 50px;
      height: 50px;
      line-height: 50px;
      font-size: 40px;
      text-align: center;
      font-weight: bold;
      b {
        color: rgb(16, 92, 255);
      }
    }

    .slide_box {
      margin: auto;
      width: 80%;
      height: 400px;
      overflow: hidden;
      position: relative;
      background: url(../../assets/brand_list.png);
      background-repeat: repeat-x;
      animation: movebg 50s linear infinite;

      @keyframes movebg {
        0% {
          background-position: 0 center;
        }
        100% {
          background-position: -2000px center;
        }
      }

      .gradation_box1 {
        position: absolute;
        img {
          height: 400px;
        }
      }
      .gradation_box2 {
        position: absolute;
        height: 100px;
        right: 0;
        img {
          height: 400px;
        }
      }
    }
  }
  .question {
    width: 100%;
    height: 1300px;
    text-align: center;
    background-color: rgb(241, 241, 241);

    .q_img3 {
      //물음표
      position: absolute;
      margin-top: 170px;
      margin-left: -50px;
    }
    h1 {
      padding-top: 230px;
      font-size: 45px;
      font-weight: bold;
      b {
        color: rgb(16, 92, 255);
      }
    }
  }
  .question_img {
    margin-top: 80px;
    height: 800px;
    .q_img1 {
      margin: auto;
    }
    .q_img2 {
      //손가락
      position: absolute;
      margin-top: 530px;
      margin-left: -230px;
      transform: translateY(30px);
      opacity: 0;
      transition: 1s all ease;
      &.active {
        transform: translateY(0);
        opacity: 1;
      }
    }
  }
  .point1 {
    height: 800px;
    background-color: rgb(16, 92, 255);
    text-align: center;
    h1 {
      padding-top: 150px;
      font-size: 45px;
      color: white;
      b {
        font-weight: bold;
        color: white;
      }
    }
    .point1_box {
      margin: 50px auto;
      width: 1280px;
      height: 300px;
      display: flex;
      justify-content: center;
      align-items: center;
      li {
        width: 300px;
        height: 250px;
        margin-top: 70px;

        div {
          margin: auto;
          width: 230px;
          height: 230px;
          background-color: white;
          img {
            margin-top: 50px;
          }
          p {
            font-size: 21px;
            margin-top: 20px;
            font-weight: 600;
            color: black;
          }
        }
        .p_text {
          font-weight: 300;
          font-size: 19px;
          margin-top: 20px;
          line-height: 26px;
          color: white;
        }
      }
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
    height: 1000px;
    margin-top: -400px;
    background-color: rgb(243, 243, 243);
    .point3_box {
      width: 100%;
      height: 1100px;
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
            background-image: url(../../assets/c_p3_img1.png);
            background-size: cover;
          }
          .imgbox2 {
            margin: auto;
            width: 90%;
            height: 250px;
            margin-top: 80px;
            background-color: rgb(245, 250, 225);
            border: 1px solid rgb(165, 165, 165);
            background-image: url(../../assets/c_p3_img2.png);
            background-size: cover;
          }
          .imgbox3 {
            margin: auto;
            width: 90%;
            height: 250px;
            margin-top: 80px;
            background-color: rgb(245, 250, 225);
            border: 1px solid rgb(165, 165, 165);
            background-image: url(../../assets/c_p3_img3.png);
            background-size: cover;
          }
        }
      }
    }
  }
  .point4 {
    height: 800px;
    background-color: white;
    text-align: center;
    .messenger {
      height: 600px;
      position: relative;
      h1 {
        font-size: 50px;
        font-weight: 800;
        padding-bottom: 25px;
        margin-top: 200px;
      }
      p {
        font-size: 20px;
        line-height: 30px;
      }
      .img_pc {
        margin-top: 100px;
      }
      .img_question {
        margin-top: 150px;
        margin-left: -180px;
        position: absolute;
        transform: translateX(-30px);
        opacity: 0;
        transition: 1s all ease;
        &.active {
          transform: translateX(0);
          opacity: 1;
        }
      }
      .img_paper {
        margin-top: 200px;
        margin-left: -200px;
        position: absolute;
        transform: translateX(30px);
        opacity: 0;
        transition: 1s all ease;
        &.active {
          transform: translateX(0);
          opacity: 1;
        }
      }
    }
  }
  .point5 {
    height: 1200px;
    text-align: center;
    background-color: #f6f9fe;
    h1 {
      padding-top: 150px;
      font-size: 50px;
      font-weight: 800;
      padding-bottom: 25px;
    }
    .service {
      display: flex;
      justify-content: center;
      align-items: center;
      li {
        width: 100px;
        height: 15px;
        margin: 20px;
        padding: 20px;
        border-radius: 30px;
        border: 1px solid #0960f1;
        color: #0960f1;
        cursor: pointer;
      }
      li:hover {
        background-color: #0960f1;
        color: white;
      }
    }
    .p5_img_box {
      width: 100%;
      height: 800px;
      margin-top: 50px;
      li {
        text-align: center;
      }
    }
  }
  .sns {
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
  .premium {
    height: 700px;
    background-color: #f6f9fe;
    text-align: center;
    h1 {
      padding-top: 150px;
      font-size: 50px;
      font-weight: 800;
      padding-bottom: 25px;
    }
    .premium_box {
      display: flex;
      justify-content: center;
      align-items: center;
      li {
        width: 250px;
        height: 250px;
        border-radius: 150px;
        background-color: #e9f1ff;
        margin: 50px;
        img {
          margin-top: 50px;
          width: 50px;
        }
        p {
          margin-top: 10px;
          font-size: 20px;
          line-height: 24px;
          font-weight: 600;
        }
      }
    }
  }
  .free_banner {
    height: 150px;
    background-color: rgb(16, 92, 255);
    line-height: 150px;
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      p {
        font-size: 40px;
        color: white;
        font-weight: 300;
        b {
          color: white;
          font-weight: bold;
        }
      }
    }
    img {
      width: 60px;
      padding: 15px;
    }
  }
  .download {
    height: 500px;
    background: url(../../assets/download_bg.png);
    background-size: cover;
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
      height: 150px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: auto;

      li {
        width: 200px;
        height: 50px;
        margin: 10px;
        line-height: 50px;
        background-color: white;
        border-radius: 15px;
        a {
          color: rgb(36, 36, 36);
          font-weight: bold;
          font-size: 20px;
          padding: 20px 50px 20px 50px;
        }
      }
      li:nth-child(2) {
        background-color: #0960f1;
        a {
          color: white;
        }
      }
    }
  }
}
</style>
