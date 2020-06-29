<template>
    <div class="flex flex-col z-10 w-full">
        <!--
        <nav class="fixed top left w-full items-center text-left bg-gray-200 opacity-75 flex flex-col p-2 ">
            <div class="flex flex-row justify-around">
                <i class="material-icons cursor-pointer fixed left-0 ml-2 top-4">menu</i>
                <nuxt-link to="/">Antonio Nardone</nuxt-link>
                <div  class="fixed mr-2 right-0 top-4 flex flex-row">
                    <nuxt-link class="mr-2" to="/contact"><i class="material-icons">email</i></nuxt-link>
                    <a :href="github" target="_blank"><svg aria-hidden="true" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
    </svg></a>
                </div>
            </div>    
            <Menu class="shadow-sm mt-2 w-full" :categories="categories"></Menu>
        </nav>
        -->
        <Header class="w-full" :settings="setting" :categories="categories" :pages="pages"></Header>
        <main class="mt-0">
            
            <nuxt />
        </main>
        
        <Footer :settings="setting"/>
    </div>
</template>

<script>
import categoriessQuery from '~/apollo/queries/category/categories'
import settingsQuery from '~/apollo/queries/setting/settings'
import pagesQuery from '@/apollo/queries/pages/pages'
import Header from '~/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
    name: 'Layout',
    components: {
        Header, Footer
    },
   
     apollo: {
        categories: {
            prefetch: true,
            query: categoriessQuery
        },
        setting : {
            prefetch: true,
            query: settingsQuery
        },
        pages : {
            prefetch: true,
            query: pagesQuery
        }
    }
}
</script>