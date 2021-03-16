<template lang="html">
  <Base :current="3" :total="5">
    <template v-slot:header>
      <div class="font-script text-grey text-normal text-center">
        Уже совсем скоро Вы узнаете много <br />
        интересного о своем будущем!
      </div>
    </template>
    <template v-slot:controls>
      <div class="controls-content">
        <div
          class="controls-title text-normal text-yellow text-uppercase text-center font-base"
        >
          Укажите свою дату <br />
          рождения:
        </div>
        <div class="selects-vertical">
          <Select v-model="day">
            <option value="" disabled selected>День</option>
            <option :value="d" :key="d" v-for="d in 31">{{ d }}</option>
          </Select>
          <Select v-model="month">
            <option value="" disabled selected>Месяц</option>
            <option :value="m" :key="m" v-for="m in 12">{{ m }}</option>
          </Select>
          <Select v-model="year">
            <option value="" disabled selected>Год</option>
            <option
              :value="new Date().getFullYear() - y"
              :key="y"
              v-for="y in 100"
            >
              {{ new Date().getFullYear() - y }}
            </option>
          </Select>
          <Button @click.native="setNext">Далее</Button>
        </div>
      </div>
    </template>
  </Base>
</template>

<script>
import Base from './Base.vue';
import Button from './Button.vue';
import Select from './Select.vue';

export default {
  name: 'Third',
  components: {
    Base,
    Button,
    Select,
  },
  data() {
    return {
      day: null,
      month: null,
      year: null,
      date: null,
    };
  },
  computed: {
    correctDate() {
      return !!this.day && !!this.month && !!this.year;
    },
  },
  methods: {
    setNext() {
      if (this.correctDate) {
        this.$emit('set-next');
      }
    },
  },
  watch: {
    correctDate(value) {
      if (value) {
        this.date = new Date(this.year, this.month, this.day);
      }
    },
    date(value) {
      if (value) {
        this.$emit('set-date', this.date);
      }
    },
  },
};
</script>

<style lang="css" scoped>
.selects-vertical {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  max-width: max-content;
  width: 100%;
}
</style>
