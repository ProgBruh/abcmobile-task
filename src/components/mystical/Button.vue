<template lang="html">
  <button type="button" class="button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
};
</script>

<style lang="css" scoped>
.button {
  background: linear-gradient(
    90deg,
    rgba(246, 200, 102, 0.9),
    rgba(254, 173, 53, 0.9) 100%
  );
  border-radius: 50px;
  color: white;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 18px;
  border: none;
  padding-top: 1rem;
  padding-bottom: 1rem;
  cursor: pointer;
  min-width: 240px;
  position: relative;
  overflow: hidden;
}
.button::after {
  position: absolute;
  background-image: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0.9) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  content: '';
  height: 120%;
  top: -10%;
  opacity: 0.3;
  width: 30px;
  transform: rotate(-20deg);
  animation-name: move;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
.button:focus {
  outline: none;
}
@keyframes move {
  from {
    left: -35px;
  }
  to {
    left: 120%;
  }
}
</style>
