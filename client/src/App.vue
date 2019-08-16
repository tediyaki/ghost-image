<template>
  <div>
    <formImage></formImage>
    <showImage></showImage>
  </div>
</template>

<script>
import formImage from '../components/form.vue'
import showImage from '../components/home.vue'

export default {
  data() {
    return {
      message: '',
    };
  },
  components: {
    formImage,
    showImage
  }
};
</script>

<style scoped>
</style>