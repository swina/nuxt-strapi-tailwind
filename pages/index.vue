<template>
  <div>
        <div class="w-full p-10 h-64 flex items-center bg-center bg-no-repeat bg-cover" :style="'min-height:35rem;' + random">
        <h1 class="flex-1 text-center site-title text-2xl md:text-5xl">{{setting.site_name}}.<br/><span class="text-gray-500">{{setting.site_title}}.</span></h1>
        </div>  
        <div class="ml-4 text-xs">{{ moment().format('MMM Do YYYY') }}</div>
        <Articles class="sm:p-2 md:p-16" :articles="articles"></Articles>
  </div>
</template>

<script>
import articlesQuery from '~/apollo/queries/article/articles'
import settingsQuery from '~/apollo/queries/setting/settings'
import Articles from '~/components/Articles'
var moment = require('moment')

export default {
  data() {
    return {
      articles: [],
      settings:[],
      moment: moment
    }
  },
  computed:{
    random(){
      return 'background:url(https://source.unsplash.com/random/?800x600&bw&dark);background-repeat:no-repeat;background-size:cover;'
    },
    title(){
      return process.env.title
    }
  },
  components: {
    Articles
  },
  apollo: {
    articles: {
      prefetch: true,
      query: articlesQuery,
      variables () {
        return { id: parseInt(this.$route.params.id) }
      }
    },
    setting: {
      prefetch: true,
      query: settingsQuery
    }
  }
}
</script>
