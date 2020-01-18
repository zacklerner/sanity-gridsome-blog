<template>
  <!-- List products -->
  <div class="products">
    <product-card
      v-for="edge in $static.allLpwInventory.edges"
      :key="edge.node.id"
      :product="edge.node"
    />
  </div>
</template>

<static-query>
query {
  allLpwInventory {
    edges {
      node {
        id
        Product_Name
        Product_Details
        Product_Availability
      }
    }
  }
}
</static-query>

<script>
import ProductCard from '~/components/ProductCard'

export default {
  components: {
    ProductCard
  },
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>
