<template lang="html">
  <Base :current="2" :total="5">
    <template v-slot:header>
      <div class="text-grey text-normal text-center font-script">
        Мы расскажем Вам не только подробности <br />
        вашей смерти, но также поможем Вам <br />
        избежать этой ужасной даты и продлить <br />
        вашу жизнь на многие годы.
      </div>
    </template>
    <template v-slot:controls>
      <div class="controls-content">
        <div
          class="controls-title text-normal text-yellow text-uppercase text-center font-base"
        >
          Когда вы чувствует себя <br />
          наиболее комфортно?
        </div>
        <div class="buttons-vertical">
          <Button @click.native="setNext" style="margin-bottom: 1.5rem"
            >Утро</Button
          >
          <Button @click.native="setNext" style="margin-bottom: 1.5rem"
            >День</Button
          >
          <Button @click.native="setNext" style="margin-bottom: 1.5rem"
            >Вечер</Button
          >
          <Button @click.native="setNext" style="margin-bottom: 1.5rem"
            >Ночь</Button
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
  name: 'Second',
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
