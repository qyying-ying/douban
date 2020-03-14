<template>
  <ul class="list">
    <li v-for="item in list" :key="item.id">
      <!-- 点击每一项 跳转到电影的详情 -->
      <router-link :to="`/detail/${item.id}`">
      <!-- 这里用了图片的代理服务器 因为豆瓣的图片禁止在非豆瓣域名下展示 -->
        <img
          :src="`https://images.weserv.nl/?url=${item.images.small}`"
        />
        <div class="info">
          <h3>{{ item.title }}</h3>
          <p>{{ item.rating.average }}</p>
          <p>
            <span v-for="obj in item.genres" :key="obj" class="tag">纪录片</span>
          </p>
        </div>
      </router-link>
    </li>
  </ul>
</template>

<script>
// 在公共组件中 引入list数据
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['list'])
  }
}
</script>

<style>
</style>
