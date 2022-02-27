<template>
  <div class="home">
    <DocRouteIndex msg="这是一个资源索引"/>
  </div>
</template>

<script>
// @ is an alias to /src
import DocRouteIndex from '@/components/DocRouteIndex.vue'

export default {
  name: 'Home',
  components: {
    DocRouteIndex
  }
}
</script>
