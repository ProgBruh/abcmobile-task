<template lang="html">
  <div class="loading">
    <img :src="spinner" alt="spinner" />
    <div class="text-small text-grey font-base">Loading</div>
  </div>
</template>

<script>
import spinnerImg from '../../assets/spinner.svg';

export default {
  name: 'Loading',
  data() {
    return {
      spinner: spinnerImg,
    };
  },
  mounted() {
    setTimeout(() => {
      this.$emit('set-next');
    }, 2000);
  },
};
</script>

<style lang="css" scoped>
.loading {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
