<template>
  <div>
    <ul>
      <li
        v-for="menuItem in menu.menuItems"
        :key="menuItem._key"
      >
        <!-- If the menu item has children add them in a ul -->
        <ul v-if="menuItem.menuLink.pageReference.length > 1">
          <span>{{ menuItem.menuTitle }}</span>
          <li
            v-for="link in menuItem.menuLink.pageReference"
            :key="link.id"
          >
            <a :href="link.path">{{ link.title }}</a>
          </li>
        </ul>
        <!-- If not, simply create a link -->
        <a v-else
          v-for="link in menuItem.menuLink.pageReference"
          :key="link.id"
          :href="link.path"
        >
          <span>{{ link.title }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    menu: Object
  }
}
</script>