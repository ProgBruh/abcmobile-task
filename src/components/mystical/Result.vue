<template lang="html">
  <div class="page-auto" style="padding-left: 1rem; padding-right: 1rem">
    <header class="header">
      <div class="font-base text-center text-normal bubble-dialog">
        Спасибо за Ваши ответы! <br />
        <b
          >Мы подготовили для Вас <br />
          персональную аудио запись с <br />
          Вашим прогнозом.</b
        >
      </div>
      <div
        class="text-center font-base text-normal"
        style="margin-top: 1rem; margin-bottom: 1rem"
      >
        Вы можете узнать, как повлиять <br />
        на события, которые ожидают <br />
        вас в ближайшем будущем.
      </div>
    </header>
    <main>
      <div class="box font-base text-center text-yellow text-normal">
        <span class="text-medium">
          Первое значимое <br />
          событие может <br />
          произойти уже {{ tomorrowDate }}</span
        >, <br />Вам надо быть готовым, что <br />
        бы последствия не оказались <br />
        необратимыми.
      </div>
    </main>
    <footer>
      <div
        class="text-center font-base text-normal"
        style="margin-top: 1rem; margin-bottom: 1rem"
      >
        Нажмите на кнопку ниже прямо <br />
        сейчас и наберите наш номер <br />
        телефона. Прослушайте важную <br />
        информацию!
      </div>
      <Button
        class="call-button"
        @click.native="getInfo"
        v-if="!Boolean(peopleData)"
        >Позвонить и прослушать</Button
      >
      <div class="result" v-else>
        <template v-for="[key, value] in Object.entries(peopleData)">
          <div
            class="result-data"
            v-if="typeof value === 'string' && key !== 'url'"
          >
            <div class="font-base text-small text-grey">{{ key }}</div>
            <div class="font-base text-small text-grey">{{ value }}</div>
          </div>
        </template>
      </div>
      <div class="font-base text-center text-grey text-extrasmall">
        TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU <br />
        DE DIVERTISMENT. PRIN FOLOSIREA LUI <br />
        DECLARATI CA AVETI 18 ANI IMPLINITI,
      </div>
    </footer>
  </div>
</template>

<script>
import Button from './Button.vue';
import 'regenerator-runtime';

export default {
  name: 'Result',
  components: {
    Button,
  },
  data() {
    return {
      peopleData: null,
    };
  },
  computed: {
    tomorrowDate() {
      const today = new Date();
      let tomorrow = new Date();
      tomorrow.setDate(today.getDate() + 1);
      return tomorrow.toLocaleDateString();
    },
  },
  methods: {
    async getInfo() {
      const apiData = await fetch('https://swapi.dev/api/people/1/');
      const apiDataResult = await apiData.json();
      this.peopleData = apiDataResult;
    },
  },
};
</script>

<style lang="css" scoped>
.header {
  margin-top: 2rem;
  margin-bottom: 2rem;
}
.box {
  border: 1px solid rgba(255, 255, 255, 0.4);
  padding: 1rem;
}
.call-button {
  background: linear-gradient(
    90deg,
    rgba(76, 217, 100, 0.9) -6.2%,
    rgba(50, 185, 73, 0.9) 100%
  );
  display: block;
  max-width: max-content;
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: auto;
  margin-right: auto;
}
.result {
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 1rem;
}
.result-data {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5em;
}
</style>
