<template lang="html">
  <div class="page-full">
    <div class="header">
      <slot name="header"></slot>
      <img :src="eye1" alt="eye 2" class="image" id="eye1" />
    </div>
    <hr class="divider" />
    <div class="controls">
      <slot name="controls"></slot>
      <div class="current text-small text-grey font-base">
        Вопрос {{ current }}-{{ total }}
      </div>
      <img :src="eye2" alt="eye 1" class="image" id="eye2" />
    </div>
  </div>
</template>

<script>
import eye1Img from '../../assets/eye-1.svg';
import eye2Img from '../../assets/eye.svg';

export default {
  name: 'Base',
  props: {
    current: {
      type: Number,
      required: true,
      default: 0,
    },
    total: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  data() {
    return {
      eye1: eye1Img,
      eye2: eye2Img,
    };
  },
};
</script>

<style lang="css" scoped>
.header {
  position: relative;
  width: 100%;
  margin-top: 3rem;
  margin-bottom: 2rem;
}
.controls {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 150px;
  padding-top: 3rem;
  padding-bottom: 3rem;
  margin-bottom: 2rem;
}
.current {
  position: absolute;
  bottom: 0.5rem;
  right: 50%;
  transform: translateX(50%);
  font-style: normal;
  font-weight: 200;
  font-size: 12px;
  line-height: 18px;
}
.image {
  position: absolute;
  height: 60px;
  width: auto;
  filter: invert(0.7) grayscale(1);
}
#eye1 {
  right: 0;
  bottom: 0;
  transform: translate(30%, 50%);
}
#eye2 {
  left: 0;
  bottom: 0;
  transform: translate(-30%, 30%);
}
@media (min-width: 640px) {
  .header {
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
  }
  .controls {
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
