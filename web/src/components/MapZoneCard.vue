<template>
  <div class="zone-card">
    <div class="zone-card__content">
      <h2 class="zone-card__title">{{ zone.Zone_Name }}</h2>
      <BaseTag v-for="zip in zone.Zone_Zips.split(',')" :tag="zip" :key="zip.uuid" />
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
