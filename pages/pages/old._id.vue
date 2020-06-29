<template>
  <section class="p-4 md:p-16" v-if="page">
    <h1>{{ page.title }}</h1>
    <ContentImage :source="page.featured" :data="page.SEO[0].keywords"/>
    <p v-if="page.updated_at" class="text-xs">
          {{ moment(page.updated_at).format("MMM Do YY") }}
    </p>
    <!--<img :src="hasImage()" class="mt-1"/>-->
    <i v-if="page.excerpt">{{ page.excerpt }}</i>
    <div v-if="page.content" class="pt-10" v-html="$md.render(page.content)"></div>
        
  </section>
</template>

<script>
import pageQuery from '@/apollo/queries/pages/page'
import ContentImage from '@/components/Image.vue'
var moment = require("moment");

export default {
    name: 'Page',
    data:()=>({
        page: {},
        moment: moment
    }),
    components: {
        ContentImage
    },
    head () {
        return {
            title: this.page.title,
            meta: [
                // hid is used as unique identifier. Do not use `vmid` for it as it will not work
                { hid: 'description', name: 'description', content: this.page.SEO[0].description || '' },
                { hid: 'keywords' , name: 'keywords' , content: this.page.SEO[0].keywords || '' }
            ]
        }
    },
    apollo: {
        page: {
            prefetch: true,
            query: pageQuery,
            variables() {
                return { id: parseInt(this.$route.params.id) };
            }
        }
    }
}
</script>