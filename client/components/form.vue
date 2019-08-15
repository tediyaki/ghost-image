<template>
    <form @submit="sendForm">
        <label for="title" v-model="title">Title</label><br>
        <input v-model="title" type="text" name="title" required><br>
        <label for="file">File</label><br>
        <input @change="imageUpload" ref="file" type="file" name="image"><br>
        <input type="submit" value="Submit"><br>
    </form>
</template>

<script>
    export default {
        data() {
            return {
                title: '',
                file: ''
            };
        },
        methods: {
            imageUpload() {
                this.file = this.$refs.file.files[0]
                console.log(this.file)
            },
            sendForm() {
                const formData = new FormData()
                formData.append('title', this.title)
                formData.append('file', this.file);
                axios.post( '/image',
                    formData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }
                ).then(function(){
                    console.log('SUCCESS!!');
                })
                .catch(function(){
                    console.log('FAILURE!!');
                });
            }
        }
    }
</script>

<style>

</style>