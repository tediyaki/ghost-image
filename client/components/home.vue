<template>
    <div class="content">
        <div class="grid" v-for="(image, index) in images">
            <figure class="effect-lily">
                <img v-bind:src="image.link" alt="img12"/>
                <figcaption>
                    <div>
                    
                        <a  v-bind:href="'https://twitter.com/intent/tweet?text='+image.link"  class="twitter-share-button" data-hashtags="Gambar Seram">Tweet</a>
                        <div class="fb-share-button" 
                            :data-href="image.link"
                            data-layout="button_count">
                        </div>
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

<style scoped>
    h2 {
        color: white;
    }
</style>
 
