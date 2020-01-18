<template>
  <g-link v-if="isLinked" class="base-tag" :to="'/tagged/' + tag">{{ tag }}</g-link>
  <span v-else class="base-tag">{{ tag }}</span>
</template>

<script>
export default {
  props: {
    tag: String,
    isLinked: Boolean
  }
}
</script>

<style lang="scss">
.base-tag {
  display: inline-block;
  margin: 1em 0 0;
  margin-right: 0.7em;
  font-size: 0.8em;
  color: currentColor;
  text-decoration: none;
  background-color: var(--bg-color);
  color: currentColor !important; //Todo: remove important;
  border-radius: 3px;
  padding: 0.25em 0.5em;
}
</style>
