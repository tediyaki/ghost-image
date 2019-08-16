<template>
  <div>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Ghost Image</a>
            <button @click="displayAddForm">Add Picture</button>
        </nav>
    <formImage v-if="imageForm"></formImage>
    <showImage v-else></showImage>
  </div>
</template>

<script>
import formImage from '../components/form.vue'
import showImage from '../components/home.vue'

export default {
  data() {
    return {
      message: '',
      imageForm: false
    };
  },
  methods: {
    displayAddForm() {
      this.imageForm = !this.imageForm
    }
  },
  components: {
    formImage,
    showImage
  }
};
</script>

<style scoped>
</style>