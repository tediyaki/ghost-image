<template>
    <div class="content"
        <div class="grid" v-for="(image, index) in images">
            <figure class="effect-lily">
                <img v-bind:src="image.link" alt="img12"/>
                <figcaption>
                    <div>
                        <div class="fb-share-button" 
                        v-bind:data-href="image.link"
                        data-layout="button_count">
                        </div> <br>
                        <a  v-bind:href="'https://twitter.com/intent/tweet?text='+image.link"  class="w-inline-block social-share-btn tw" data-size="large">Tweet</a>
                        <h2> {{ image.title }} </h2>
                    </div>
                </figcaption>           
            </figure>
        <div>
    </div>
</template>

<script>
export default {
    name: "Home",
    data() {
        return {
            images: [],
        }
    },

    methods: {
        showImage() {
            axios.get('http://localhost:3000/ghost/')
            .then(({data})=> {
                console.log("=============")
                this.images = data.data
                console.log(this.images)
            })
            .catch((err)=> {
                console.log(err)
            })
        }
    },
    created() {
        this.showImage()
    }
}
</script>

<style>

    
</style>
 
