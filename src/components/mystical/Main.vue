<template lang="html">
  <keep-alive>
    <component
      :is="values[current]"
      :ages="ages"
      @set-next="setNext"
      @set-date="setDate"
    />
  </keep-alive>
</template>

<script>
import First from './First.vue';
import Second from './Second.vue';
import Third from './Third.vue';
import Fourth from './Fourth.vue';
import Fifth from './Fifth.vue';
import Loading from './Loading.vue';
import Microphone from './Microphone.vue';
import Result from './Result.vue';

export default {
  name: 'Main',
  components: {
    first: First,
    second: Second,
    third: Third,
    fourth: Fourth,
    fifth: Fifth,
    loading: Loading,
    microphone: Microphone,
    result: Result,
  },
  data() {
    return {
      current: 1,
      ages: null,
      values: {
        1: 'first',
        2: 'second',
        3: 'third',
        4: 'loading',
        5: 'fourth',
        6: 'fifth',
        7: 'microphone',
        8: 'result',
      },
    };
  },
  methods: {
    setNext() {
      ++this.current;
    },
    setDate(value) {
      this.ages = value;
      const diff = new Date() - value.getTime();
      const dateD = new Date(diff);
      this.ages = Math.abs(dateD.getUTCFullYear() - 1970);
    },
  },
};
</script>

<style lang="css" scoped></style>
