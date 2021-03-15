<template lang="html">
  <div>Hello, {{ message }}!</div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      message: 'vue',
    };
  },
};
</script>

<style lang="css" scoped></style>
