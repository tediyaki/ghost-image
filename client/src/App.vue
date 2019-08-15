<template>
  <div>
    <h1>{{ message }}</h1>
    <formImage></formImage>
  </div>
</template>

<script>
import formImage from '../components/form.vue'

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