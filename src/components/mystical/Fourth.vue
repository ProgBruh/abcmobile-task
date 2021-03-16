<template lang="html">
  <Base :current="4" :total="5">
    <template v-slot:header>
      <div class="font-script text-grey text-normal text-center">
        Смерть родного человека – одно из <br />
        тяжелейших испытаний в жизни каждого <br />
        из нас!
      </div>
    </template>
    <template v-slot:controls>
      <div class="controls-content">
        <div
          class="controls-title text-normal text-yellow text-uppercase text-center font-base"
        >
          Снятся ли Вам умершие <br />
          люди?
        </div>
        <div class="buttons-vertical">
          <Button @click.native="setNext" style="margin-bottom: 1.5rem"
            >Да</Button
          >
          <Button @click.native="setNext" style="margin-bottom: 1.5rem"
            >Нет</Button
          >
          <Button @click.native="setNext" style="margin-bottom: 1.5rem"
            >Иногда</Button
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
  name: 'Fourth',
  components: {
    Base,
    Button,
  },
  methods: {
    setNext() {
      this.$emit('set-next');
    },
  },
};
</script>

<style lang="css" scoped></style>
