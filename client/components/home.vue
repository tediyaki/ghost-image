<template>
    <div class="content">
        <div class="grid" v-for="image in images">
            <figure class="effect-lily">
                <img v-bind:src="image.link" alt="img12"/>
                <figcaption>
                    <div>
                        <h2> {{ image.title }} <span>Lily</span></h2>
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
        showImage () {
            axios.get('http://localhost:3000/ghost/image')
            .then(({data})=> {
                this.images = data
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
 
