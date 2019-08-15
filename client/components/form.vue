<template>
    <form>
        <label for="title" v-model="title">Title</label>
        <input type="text" name="title" required>
        <label for="file">File</label>
        <input type="file" name="image">
        <label for="description" v-model="description">Description</label>
        <textarea rows="4" name="description">
        <input type="submit" value="Submit">
    </form>
</template>

<script>
    export default {
        export default {
            data() {
                return {
                    title: '',
                    description: '',
                };
            },
        };
    }
</script>

<style>

</style>