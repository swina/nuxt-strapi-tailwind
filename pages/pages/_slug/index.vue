<template>
  <section class="p-4 md:p-16" v-if="pages">
    <h1>{{ pages.title }}</h1>
    <ContentImage :source="pages.featured" :data="pages.SEO[0].keywords"/>
    <p v-if="pages.updated_at" class="text-xs">
          {{ moment(pages.updated_at).format("MMM Do YY") }}
    </p>
    <i v-if="pages.excerpt">{{ pages.excerpt }}</i>
    <div v-if="pages.content" class="pt-10" v-html="$md.render(pages.content)"></div>
  </section>
</template>

<script>
import pagesQuery from '@/apollo/queries/pages/pages-slug.gql'
import ContentImage from '@/components/Image.vue'
var moment = require("moment");

export default {
    name: 'Pages',
    data:()=>({
        pages: {},
        moment: moment
    }),
    components: {
        ContentImage
    },
    head () {
        return {
            title: this.pages.title,
            meta: [
                // hid is used as unique identifier. Do not use `vmid` for it as it will not work
                { hid: 'description', name: 'description', content: this.pages.SEO[0].description || '' },
                { hid: 'keywords' , name: 'keywords' , content: this.pages.SEO[0].keywords || '' }
            ]
        }
    },
    apollo: {
        pages: {
            prefetch: true,
            query: pagesQuery,
            variables() {
                return { slug: this.$route.params.slug };
            },
            update: data => data.pages[0]
        }
    }
}
</script>