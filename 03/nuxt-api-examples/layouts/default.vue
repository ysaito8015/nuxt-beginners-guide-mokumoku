<template>
  <div>
    <span>
      default layout
    </span>
    <AppNabigation />
    <hr>
    <nuxt />
    <hr>
    <footer>
      footer
    </footer>
  </div>
</template>


<script>
import AppNavigation from '~/components/AppNavigation.vue'

export default {
  components: {
    AppNavigation
  }
}
</script>
