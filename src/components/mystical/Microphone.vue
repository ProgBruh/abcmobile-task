<template lang="html">
  <div class="microphone">
    <img :src="microphone" alt="microphone" />
    <progress :value="progress" max="100" class="progress" />
    <div class="text-medium text-grey font-base" style="margin-bottom: 0.5rem">
      {{ progress }}%
    </div>
    <div class="text-small text-grey font-base">Запись сообщения</div>
  </div>
</template>

<script>
import microphoneImg from '../../assets/microphone.svg';

export default {
  name: 'Microphone',
  data() {
    return {
      microphone: microphoneImg,
      progress: 0,
      interval: null,
    };
  },
  mounted() {
    this.interval = setInterval(() => {
      this.progress += 20;
    }, 1000);
  },
  watch: {
    progress(value) {
      if (value === 100) {
        clearInterval(this.interval);
        this.$emit('set-next');
      }
    },
  },
};
</script>

<style lang="css" scoped>
.microphone {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.progress {
  background-color: white;
  border-radius: 5px;
  max-width: 70%;
  width: 100%;
  height: 4px;
  margin-top: 2rem;
  margin-bottom: 1rem;
}
.progress::-webkit-progress-bar {
  background-color: white;
}
.progress::-webkit-progress-value {
  background-color: #f6c866;
}
@media (min-width: 640px) {
  .progress {
    max-width: 370px;
  }
}
</style>
