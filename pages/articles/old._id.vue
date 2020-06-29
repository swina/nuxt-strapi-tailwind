<template>
  <section class="p-4 md:p-16" v-if="article">
    <h1>{{ article.title }}</h1>
    <span class="text-xs" v-if="article.category"><span class="bg-gray-400 mr-2 px-2 py-1 rounded">{{ article.category.name }}</span> {{ moment(article.published_at).format("MMM Do YY") }}</span>
    <img :src="hasImage()" class="mt-1"/>
    <i v-if="article.excerpt">{{ article.excerpt }}</i>
    <div v-if="article.content" class="pt-10"
          v-html="$md.render(article.content)"
        ></div>
        <p v-if="article.published_at">
          {{ moment(article.published_at).format("MMM Do YY") }}
        </p>
  </section>
</template>

<script>
import articleQuery from "~/apollo/queries/article/article";
var moment = require("moment");

export default {
  data() {
    return {
      article: {},
      moment: moment,
      api_url: ''//process.env.strapiBaseUri
    };
  },
  methods:{
    hasImage(){
      if ( this.article.tags ){
        let tag = ''
        this.article.tags.length ? tag = this.article.tags[0].tag : null
        return this.article.image ? this.article.image.url : 'https://source.unsplash.com/random/?' + tag
      } else {
        return 'https://source.unsplash.com/random/'
      }
    }
  },
  apollo: {
    article: {
      prefetch: true,
      query: articleQuery,
      variables() {
        return { id: parseInt(this.$route.params.id) };
      }
    }
  }
};
</script>
