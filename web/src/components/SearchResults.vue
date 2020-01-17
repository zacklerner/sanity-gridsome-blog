<template>
  <div class="search__wrapper">
    <input
      id="search"
      v-model="searchTerm"
      class="search__input"
      type="text"
      placeholder="Search our blog...">
      <ul class="search-results">
        <li v-for="searchResult in searchResults" :key="searchResult.id">
          <p><a :href="searchResult.path">{{ searchResult.title }}</a></p>
          <ul v-if="searchResult.tags.length">
            <span>Tags: </span>
            <li v-for="tag in JSON.parse(searchResult.tags)" :key="tag">
              <span class="search-results__tag">{{ tag }}</span>
            </li>
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

<style lang="scss">
.search {
  &__wrapper {
    max-width: var(--content-width);
    margin: 0 auto;
  }
  &__input {
    width: 100%;
    height: 50px;
    border-radius: var(--radius);
    border-style: solid;
    border:1px solid #cccccc;
    padding: 10px;
    font-size: 20px;
  }
  &-results {

    > li {
      margin: 20px 0;
      border-bottom: 1px solid #ccc;
      padding-bottom: 20px;
    }
    li {
      list-style: none;
      display: inline-block;
    }
    &__tag {
      background-color: #ccc;
      margin-right: 6px;
      border-radius: var(--radius);
      font-size: 15px;
      padding: 5px;
      color: black;
    }
  }
}
</style>