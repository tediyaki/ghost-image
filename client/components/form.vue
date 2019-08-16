<template>
    <form id="submit-file" @submit.prevent="sendForm">
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
                file: '',
                title: ''
            };
        },
        methods: {
            imageUpload() {
                this.file = this.$refs.file.files[0]
            },
            sendForm() {
                const formData = new FormData()
                formData.set('title', this.title)
                formData.set('image', this.file);
                axios.post( 'http://localhost:3000/ghost/image',
                    formData
                ).then(function(){
                    console.log('message successfully uploaded!');
                })
                .catch(err => {
                    console.log(err)
                });
            }
        }
    }
</script>

<style>

    #submit-file {
        text-align: center;
        margin: 20px;
        padding: 20px;
    }

    #submit-file label, #submit-file input {
        margin: 15px;
    }

    #submit-file label {
        font-size: 25px;
    }

    #submit-file input[type="text"] {
        width: 290px;
    }

    #submit-file input[type="submit"] {
        width: 90px;
        border-radius: 10px;
        font-weight: bold
    }
</style>