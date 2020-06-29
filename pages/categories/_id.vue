<template>
  <div class="p-2 md:p-16">

    <client-only>
      
          <h1 class="uppercase">{{ category.name }}</h1>

          <Articles :articles="category.articles || []"></Articles>

    </client-only>
  </div>
</template>

<script>
import articlesQuery from '~/apollo/queries/article/articles-categories'
import Articles from '~/components/Articles'

export default {
  data() {
    return {
      category: []
    }
  },
  components: {
    Articles
  },
  apollo: {
    category: {
      prefetch: true,
      query: articlesQuery,
      variables () {
        return { id: parseInt(this.$route.params.id) }
      }
    }
  }
}
</script>
