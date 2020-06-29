<template>
    
    <nav class="w-full items-center text-left bg-gray-200 h-32 flex flex-col p-2 ">
        <div class="flex-1 flex flex-row w-full  opacity-75  items-center">
            <nuxt-link to="/" class="w-full md:w-1/5">
                <div v-html="logo()"></div>
                <span class="text-xs font-bold">{{ $attrs.settings.site_name }}</span> <span class="text-xs" v-if="$attrs.settings.show_title">{{ $attrs.settings.site_title }}</span>
            </nuxt-link>
            <nuxt-link to="/" class="hidden md:inline-block px-2 hover:font-bold uppercase">home</nuxt-link>
                <nuxt-link 
                    :key="'category_' + category.id" 
                    v-for="(category) in $attrs.categories" 
                    :to="{ name: 'categories-id', params: { id: category.id } }"
                    class="px-2 uppercase hover:font-bold hidden md:flex">
                    {{ category.name }}
                </nuxt-link>
            <nuxt-link 
                :key="'page_' + page.id"
                v-for="(page) in $attrs.pages"
                :to="{ name: 'pages-slug' , params: { slug:  page.slug }}"
                class="px-2 uppercase hover:font-bold hidden md:flex">
                <span v-if="page.menu">{{ page.title }}</span>
            </nuxt-link>
            <div  class="absolute mr-2 right-0 top-0 flex flex-row md:hidden">
                <i class="material-icons cursor-pointer" @click="menu=!menu">menu</i>     
            </div>
        </div>
        <transition name="fade">
            <div v-if="menu" class="flex flex-col fixed top-0 left-0 p-2  h-screen bg-gray-200 w-full md:hidden" @click="menu=!menu">
                <nuxt-link to="/" class="w-full my-4 ">
                    <div v-html="logo()"></div>
                    <span class="text-xs font-bold">{{ $attrs.settings.site_name }}</span> <span class="text-xs" v-if="$attrs.settings.show_title">{{ $attrs.settings.site_title }}</span>
                </nuxt-link>
                <nuxt-link to="/" class="p-2 font-bold uppercase border-b">home</nuxt-link>
                    <nuxt-link 
                        :key="category.id" 
                        v-for="(category) in $attrs.categories" 
                        :to="{ name: 'categories-id', params: { id: category.id } }"
                        class="p-2 uppercase font-bold border-b ">
                        {{ category.name }}
                </nuxt-link>
                <nuxt-link 
                    :key="'page_' + page.id"
                    v-for="(page) in $attrs.pages"
                    :to="{ name: 'pages-slug' , params: { slug:  page.slug }}"
                    class="p-2 uppercase border-b font-bold">
                    <span v-if="page.menu">{{ page.title }}</span>
                </nuxt-link>
            </div>
        </transition>
    </nav>
</template>

<script>
import Logo from '@/components/Logo'
export default {
    name: 'Header',
    data:()=>({
        menu: false
    }),
    components: { Logo },
    methods:{
        logo(){
            return this.$attrs.settings ? 
                this.$attrs.settings.logo_svg ? this.$attrs.settings.logo_svg 
                    : ''
                        : ''
        }
    }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>