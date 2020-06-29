<template>
  <div>
    <div class="flex sm:flex-col md:flex-row flex-wrap justify-start">
      
      <nuxt-link 
        class="no-underline hover:no-underline px-8 sm:w-full md:w-1/2 md:mb-8 py-4"
        v-for="article in articles" :to="{ name: 'articles-slug', params: { slug : article.slug } }" :key="article.slug">
        <div class="border-b border-t py-2 flex flex-col">
          <img v-if="article.image" :src="article.image.url" alt="" class="article-image-list"/>
          <img v-if="!article.image" :src="'https://source.unsplash.com/random/?400x400'+article.title" class="article-image-list"/>
          <div class="px-4">
            <h2 class="article-title">{{article.title}}</h2>
            <span class="text-xs"><span class="bg-gray-400 mr-2 px-2 py-1 rounded">{{article.category.name}}</span>{{moment(article.published_at).format('MMM Do YY') }}</span>
            <p class="border-t" v-if="article.excerpt"><i>{{ article.excerpt }}</i></p>
          </div>
        </div>
      </nuxt-link>
      
    </div>
  </div>
</template>

<script>
var moment = require("moment");
export default {
  data: function() {
    return {
      api_url: process.env.strapiBaseUri,
      github_url : process.env.githubUri,
      moment: moment
    };
  },
  props: {
    articles: Array
  }
};
</script>
