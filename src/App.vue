<template>
  <div class="app-wrap">
    app view
    <Job />
    <Button>antDesign</Button>
    <i class="iconfont icon-icon"></i>
  </div>
</template>
<script>
import Job from './views/job/index.vue'
export default {
  components: {
    Job,
  }
}
</script>
<style scoped>
.app-wrap {
  color: blueviolet;
  background: url(~@/assets/images/cat.jpg);
}
</style>