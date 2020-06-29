<template>
  <section class="p-4 md:p-16" v-if="articles">
    <h1>{{ articles.title }}</h1>
    <span class="text-xs" v-if="articles.category"><span class="bg-gray-400 mr-2 px-2 py-1 rounded">{{ articles.category.name }}</span> {{ moment(articles.updated_at).format("MMM Do YY") }}</span>
    <img :src="hasImage()" class="m-auto mt-1 "/>
    <i v-if="articles.excerpt">{{ articles.excerpt }}</i>
    <div v-if="articles.content" class="pt-10"
          v-html="$md.render(articles.content)"
        ></div>
        <p v-if="articles.updated_at">
          {{ moment(articles.updated_at).format("MMM Do YY") }}
        </p>
  </section>
</template>

<script>
import articlesQuery from "~/apollo/queries/article/articles-slug.gql";
import ContentImage from '@/components/Image'

var moment = require("moment");

export default {
  data() {
    return {
      articles: {},
      moment: moment
    };
  },
  components: {
    ContentImage
  },
  methods:{
    hasImage(){
      if ( !this.articles.image ){
        if ( this.articles.tags ){
          let tag = ''
          this.articles.tags.length ? tag = this.articles.tags[0].tag : null
          return this.articles.image ? this.articles.image.url : 'https://source.unsplash.com/random/800x600/?' + tag
        } else {
          return 'https://source.unsplash.com/random/800x600/?' + this.articles.title
        }
      } 
      return this.articles.image.url
    }
  },
  apollo: {
    articles: {
      prefetch: true,
      query: articlesQuery,
      variables() {
        return { slug: this.$route.params.slug };
      },
      update: data => data.articles[0]
    }
  },
  mounted(){
    console.log ( 'che cazzo')
  }
};
</script>
