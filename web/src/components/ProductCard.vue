<template>
  <div class="product-card">
    <div class="product-card__content">
      <h2 class="product-card__title">{{ product.Product_Name }}</h2>
      <span>Availability: {{ product.Product_Availability }}</span>
      <p>Product Details: {{ product.Product_Details }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: Object
  }
}
</script>

<style lang="scss" scoped>
.product-card {
  border-bottom: 1px solid #ccc;
  padding-bottom: 30px;
}
</style>