<template>
  <div class="modal-backdrop" @click="$emit('close')"></div>
  <div class="modal">
    <h3 v-if="title">{{ title }}</h3>

    <slot/>
  </div>
</template>

<script>
export default {
  name: 'AppModel',
  props: {
    title: String
  },
  emits: ['close']
}
</script>

<style scoped>

</style>