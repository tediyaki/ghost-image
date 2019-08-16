<template>
  <div>
    <h1>{{ message }}</h1>
    <formImage></formImage>
  </div>
</template>

<script>
import formImage from '../components/form.vue'
import showImage from '../components/home.vue'

export default {
  data() {
    return {
      message: 'Hello world',
    };
  },
  components: {
    formImage
  }
};
</script>

<style scoped>
</style>