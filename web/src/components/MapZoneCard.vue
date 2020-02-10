<template>
  <div class="zone-card">
    <div class="zone-card__content">
      <h2 class="zone-card__title">{{ zone.Zone_Name }}</h2>
      <p>{{ zone.Shipping_Details }}</p>
      <BaseTag v-for="zip in zone.Zips_Included.split(',')" :tag="zip" :key="zip.uuid" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    zone: Object
  }
}
</script>
