<template>
<movie-list />
</template>

<script>
export default {
  created () {
    this.$store.dispatch('getList', 'top250')
  }
}
</script>

<style>

</style>
