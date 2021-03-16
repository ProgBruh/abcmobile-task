<template lang="html">
  <select class="select" name="select" :value="result" @input="handleInput">
    <slot></slot>
  </select>
</template>

<script>
export default {
  name: 'Select',
  data() {
    return {
      result: this.value,
    };
  },
  methods: {
    handleInput(e) {
      this.result = e.target.value;
    },
  },
  watch: {
    result() {
      this.$emit('input', this.result);
    },
  },
};
</script>

<style lang="css" scoped>
.select {
  width: 100%;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  min-width: 120px;
  border: none;
  border-radius: 50px;
  margin-bottom: 1.5rem;
  background: linear-gradient(
    90deg,
    rgba(228, 228, 228, 0.9),
    rgba(203, 203, 203, 0.9) 100%
  );
}
.select:focus {
  outline: none;
}
</style>
