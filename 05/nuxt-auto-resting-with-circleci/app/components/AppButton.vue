<template>
  <div>
    <p
      v-if="clicked"
      >
      clicked
    </p>
    <button
      type="button"
      @click="handleClick"
      >
      click
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clicked: false
    }
  },
  methods: {
    handleClick() {
      this.clicked = true
    }
  }
}
</script>
