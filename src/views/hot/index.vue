<template>
<movie-list />
</template>

<script>
export default {
  created () {
    // 尝试调用 action方法
    this.$store.dispatch('getList', 'in_theaters') // 调用action的方法
  }
}
</script>

<style>

</style>
