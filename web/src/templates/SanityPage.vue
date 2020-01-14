<template>
  <Layout>
    <div class="post-title">
      <h1 class="post-title__text">{{ $page.page.title }}</h1>
    </div>

    <div class="post content-box">
      <div class="post__header">
        <img
          alt="Cover image"
          v-if="$page.page.mainImage"
          :src="$urlForImage($page.page.mainImage, $page.metadata.sanityOptions).width(600).auto('format').url()" 
        />
      </div>

      <block-content
        class="post__content"
        :blocks="$page.page._rawBody"
        v-if="$page.page._rawBody"
      />

      <!-- <FormContact v-if="$page.page.path == '/contact/'" /> -->
      
    </div>
  </Layout>
</template>

<script>
import BlockContent from '~/components/BlockContent'
import FormContact from '~/components/FormContact'

export default {
  components: {
    BlockContent,
    FormContact
  },
  metaInfo() {
    return {
      title: this.$page.page.title,
      meta: [
        {
          name: 'description',
          content: this.$page.page.description
        }
      ]
    }
  }
}
</script>

<!-- https://gridsome.org/docs/querying-data/ -->
<page-query>
query Page ($id: ID!) {
  metadata {
    sanityOptions {
      projectId
      dataset
    }
  }
  page: sanityPage (id: $id) {
    title
    _rawBody
    path
    mainImage {
      asset {
        _id
        url
      }
      caption
      alt
      hotspot {
        x
        y
        height
        width
      }
      crop {
        top
        bottom
        left
        right
      }
    }
  }
}
</page-query>

<style lang="scss">

</style>