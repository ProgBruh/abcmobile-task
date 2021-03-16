<template lang="html">
  <Base :current="5" :total="5">
    <template v-slot:header>
      <div style="padding-left: 0.5rem; padding-right: 0.5rem">
        <div class="font-script text-normal text-center title bubble-dialog">{{ message }}</div>
      </div>
    </template>
    <template v-slot:controls>
      <div class="controls-content">
        <div
          class="controls-title text-normal text-yellow text-uppercase text-center font-base"
        >
          Запись, которую Вы услышите, <br />
          может шокировать людей с <br />
          неокрепшей психикой. Вы готовы <br />
          узнать, что ждет именно Вас?
        </div>
        <div class="buttons-vertical">
          <Button @click.native="setNext" style="margin-bottom: 1.5rem"
            >Да</Button
          >
          <Button @click.native="setNext" style="margin-bottom: 1.5rem"
            >Затрудняюсь ответить</Button
          >
        </div>
      </div>
    </template>
  </Base>
</template>

<script>
import Base from './Base.vue';
import Button from './Button.vue';

export default {
  name: 'Fifth',
  components: {
    Base,
    Button,
  },
  props: {
    ages: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  computed: {
    message() {
      let value;
      switch (true) {
        case this.ages >= 18 && this.ages <= 35:
          value =
            'По вам скучает очень близкий человек,' +
            '\n' +
            'которого больше нет в мире живых.';
          break;
        case this.ages > 35 && this.ages <= 45:
          value =
            'По вам скучает очень близкий человек,' +
            '\n' +
            'которого больше нет в мире живых.' +
            '\n' +
            'Возможно это дедушка или бабушка.';
          break;
        case this.ages > 45:
          value =
            'По вам скучает очень близкий человек,' +
            '\n' +
            'которого больше нет в мире живых.' +
            '\n' +
            'Возможно это кто-то из Ваших родителей.';
          break;
      }
      return value.trim();
    },
  },
  methods: {
    setNext() {
      this.$emit('set-next');
    },
  },
};
</script>

<style lang="css" scoped>
.title {
  white-space: pre-wrap;
  max-width: max-content;
  margin-left: auto;
  margin-right: auto;
}
.fifth-controls__buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
</style>
