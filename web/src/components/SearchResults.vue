<template>
  <div>
    <input
      id="search"
      v-model="searchTerm"
      class="input"
      type="text"
      placeholder="Search">
    {{ searchResults }}
  </div>
</template>

<script>
export default {
  data: () => ({
    searchTerm: ''
  }),
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