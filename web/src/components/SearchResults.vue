<template>
  <div>
    <input
      id="search"
      v-model="searchTerm"
      class="input"
      type="text"
      placeholder="Search">
      <ul class="search-results">
        <li v-for="searchResult in searchResults" :key="searchResult.id">
          <p><a :href="searchResult.path">{{ searchResult.title }}</a></p>
          <ul v-if="searchResult.tags.length">
            <li v-for="tag in JSON.parse(searchResult.tags)" :key="tag">{{ tag }}</li>
          </ul>
          <div v-if="searchResult.body.length">
            {{ searchResult.body }}
          </div>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchTerm: ''
    }
  },
  computed: {
    searchResults () {
      const searchTerm = this.searchTerm
      if (searchTerm.length < 3) return []
      console.log(this.$search.search({ query: searchTerm, limit: 5 }))
      return this.$search.search({ query: searchTerm, limit: 5, suggest: true })
    }
  }
}
</script>