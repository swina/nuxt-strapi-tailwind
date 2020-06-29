<template>
    <img :src="hasImage()" class="w-full"/>
</template>

<script>
export default {
    name: 'ContentImage',
    methods:{
        hasImage(){
            return this.$attrs.source.length ? this.$attrs.source : 'https://source.unsplash.com/random/800x600/?' + this.$attrs.data
        }
    }
}
</script>