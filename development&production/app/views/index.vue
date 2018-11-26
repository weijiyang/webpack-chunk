<template>
    <div class="app">
        <el-button type="success">{{vueName}}</el-button>
    </div>
</template>
<script>
export default {
    name: 'App',
    data () {
      return {
        vueName: "hello vue"
      }
    }
}
</script>