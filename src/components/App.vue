<template lang="html">
  <div class="page">
    <Main />
  </div>
</template>

<script>
import Main from './mystical/Main.vue';

export default {
  name: 'App',
  components: {
    Main,
  },
};
</script>

<style lang="css" scoped>
.page {
  width: 100%;
  min-height: 100vh;
  display: flex;
}
</style>
