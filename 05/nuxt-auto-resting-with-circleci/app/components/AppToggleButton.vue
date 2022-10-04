<template>
  <div>
    <p
      v-if="status"
      >
      on
    </p>
    <p
      v-else
      >
      off
    </p>
    <button
      type="button"
      @click="toggle"
      >
      toggle
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: false
    }
  },
  methods: {
    toggle() {
      this.status = true
    }
  }
}
</script>
