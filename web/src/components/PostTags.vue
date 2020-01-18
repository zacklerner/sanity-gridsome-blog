<template>
  <div class="post-tags">
    <BaseTag v-for="tag in post.tags" :key="tag.id" :tag="tag" :is-linked="true" />
  </div>
</template>

<script>
export default {
  props: {
    post: Object
  }
}
</script>
>
