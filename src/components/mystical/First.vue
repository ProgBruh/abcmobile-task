<template lang="html">
  <div class="page-full">
    <header class="header" :style="`background-image: url(${blik})`">
      <div class="text-grey text-center font-base text-small">
        Лучшие астрологи и экстрасенсы Румынии
      </div>
      <hr class="divider" />
      <h3 class="title text-grey text-center text-medium font-base">
        Точность прогноза: 97%
      </h3>
      <div class="header-images">
        <img
          :src="bg"
          alt="bg"
          class="header-image"
          style="
            width: auto;
            height: 100%;
            max-height: 300px;
            filter: invert(0.7) grayscale(1);
            z-index: 10;
          "
        />
        <img
          :src="woman"
          alt="woman"
          class="header-image"
          style="width: auto; height: 100%; max-height: 180px; z-index: 20"
        />
      </div>
      <div class="text-center text-yellow font-base text-normal">
        Вас беспокоит вопрос о том, <br />
        <span class="text-uppercase"
          >когда Вы покинете этот Мир и <br />
          при каких обстоятельствах?</span
        >
      </div>
      <div
        class="buttons-vertical"
        style="margin-top: 2.5rem; margin-bottom: 2rem"
      >
        <Button style="margin-bottom: 1.5rem" @click.native="setNext"
          >Да</Button
        >
        <Button @click.native="setNext">Нет</Button>
      </div>
      <div class="text-small text-grey text-center font-base text-small">
        Онлайн предсказание
      </div>
    </header>
    <main class="main" ref="main">
      <div class="box text-center font-base text-normal" ref="box">
        <img :src="hands" alt="hands" class="box-image" />
        Позвольте нам раскрыть эту <br />
        волнующую тайну и <br />
        <span class="text-yellow text-uppercase"
          >с точностью <br />
          определить дату <br />
          и время вашей смерти,</span
        ><br />
        а также предшествующую <br />
        этому событию причину
      </div>
      <div
        class="main-content"
        :style="`background-image: url(${bg1})`"
        ref="content"
      >
        <div class="main-text text-center font-base text-normal">
          Многие не верят <br />
          предсказаниям и мы <br />решили доказать каждому, <br />
          <span class="text-yellow text-uppercase"
            >что прогноз может <br />
            изменить жизнь <br />любого человека!</span
          >
        </div>
      </div>
    </main>
    <footer class="footer">
      <div class="text-center text-yellow text-medium font-base text-uppercase">
        Боитесь ли вы умереть?
      </div>
      <div
        class="buttons-vertical"
        style="margin-top: 2.5rem; margin-bottom: 2rem"
      >
        <Button style="margin-bottom: 1.5rem" @click.native="setNext"
          >Да</Button
        >
        <Button @click.native="setNext">Нет</Button>
      </div>
      <div class="text-small text-grey text-center font-base">Вопрос 1-5</div>
      <div class="footer-content">
        <img :src="eye" alt="eye 1" class="footer-images" id="eye1" />
        <img :src="eye1" alt="eye 2" class="footer-images" id="eye2" />
        <img :src="rune1" alt="rune 1" class="footer-image" />
        <div class="footer-text text-medium font-script text-center">
          Вы, конечно, умрете. <br />И все, с кем вы знакомы, <br />тоже однажды
          умрут.
        </div>
        <img :src="rune2" alt="rune 2" class="footer-image" />
      </div>
      <div class="font-base text-center text-grey text-extrasmall">
        TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU <br />
        DE DIVERTISMENT. PRIN FOLOSIREA LUI <br />
        DECLARATI CA AVETI 18 ANI IMPLINITI.
      </div>
    </footer>
  </div>
</template>

<script>
import Base from './Base.vue';
import Button from './Button.vue';
import blikImg from '../../assets/blik.png';
import bgImg from '../../assets/icon1.svg';
import bg1Img from '../../assets/bg1.jpg';
import womanImg from '../../assets/woman.png';
import handsImg from '../../assets/hands.png';
import rune1Img from '../../assets/rune1.svg';
import rune2Img from '../../assets/rune2.svg';
import eyeImg from '../../assets/eye.svg';
import eye1Img from '../../assets/eye-1.svg';

export default {
  name: 'First',
  components: {
    Base,
    Button,
  },
  data() {
    return {
      blik: blikImg,
      bg: bgImg,
      bg1: bg1Img,
      woman: womanImg,
      hands: handsImg,
      rune1: rune1Img,
      rune2: rune2Img,
      eye: eyeImg,
      eye1: eye1Img,
      animated: false,
      scrollFunction: null,
    };
  },
  methods: {
    setNext(value) {
      this.$emit('set-next');
    },
  },
  mounted() {
    const insideViewport =
      this.$refs.main.getBoundingClientRect().top < window.innerHeight;
    if (insideViewport) {
      this.$refs.box.classList.value =
        this.$refs.box.classList.value + ' animated';
      this.$refs.content.classList.value =
        this.$refs.content.classList.value + ' animated';
    } else {
      this.scrollFunction = () => {
        if (!this.animated) {
          this.$refs.box.classList.value =
            this.$refs.box.classList.value + ' animated';
          this.$refs.content.classList.value =
            this.$refs.content.classList.value + ' animated';
          this.animated = true;
        }
      };
      window.addEventListener('scroll', this.scrollFunction);
    }
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.scrollFunction);
  },
};
</script>

<style lang="css" scoped>
.header {
  padding-top: 1.5rem;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.title {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.header-images {
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;
  position: relative;
  min-height: 300px;
  object-fit: scale-down;
}
.header-image {
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
}
.main {
  margin-bottom: 2rem;
  padding-top: 5rem;
}
.box {
  position: relative;
  margin-top: 1rem;
  margin-bottom: 2rem;
  margin-right: 1rem;
  margin-left: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.4);
  padding-top: 4.5rem;
  padding-bottom: 4rem;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
}
.box-image {
  position: absolute;
  right: 50%;
  top: 0;
  transform: translate(50%, -50%);
  max-height: 80px;
  height: 100%;
  width: auto;
  object-fit: scale-down;
}
.main-content {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  min-height: 400px;
  max-height: 600px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.main-text {
  z-index: 10;
}
.main-text::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: -1;
}
.footer {
  padding-top: 2rem;
}
.footer-content {
  position: relative;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 4rem;
  margin-bottom: 2rem;
}
.footer-text {
  margin-top: 2rem;
  margin-bottom: 2rem;
}
.footer-image {
  display: block;
  max-width: max-content;
  margin-left: auto;
  margin-right: auto;
  height: 30px;
  width: auto;
}
.footer-images {
  position: absolute;
  height: 80px;
  width: auto;
  filter: invert(0.7) grayscale(1);
}
.animated {
  animation: fade;
  animation-duration: 3s;
  animation-timing-function: linear;
}
@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
#eye1 {
  bottom: 0;
  left: 0;
  transform: translateX(-30%);
}
#eye2 {
  top: 0;
  right: 0;
  transform: translateX(30%);
}
@media (min-width: 640px) {
  .box {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2rem;
    max-width: max-content;
  }
  .footer-images {
    height: 100px;
  }
}
@media (min-width: 1024px) {
  .main-content {
    max-width: 60%;
  }
  .footer-content {
    max-width: 60%;
  }
}
</style>
