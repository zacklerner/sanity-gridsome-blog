<template>
  <!-- List zones -->
  <div class="zones">
    <MapZoneCard
      v-for="edge in $static.allLpwZones.edges"
      :key="edge.node.id"
      :zone="edge.node"
    />
  </div>
</template>

<static-query>
query {
  allLpwZones {
    edges {
      node {
        id
        Zone_Name
        Zips_Included
        Shipping_Details
        Zips_Excluded
      }
    }
  }
}
</static-query>

<script>
import MapZoneCard from '~/components/MapZoneCard'

export default {
  components: {
    MapZoneCard
  },
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>
