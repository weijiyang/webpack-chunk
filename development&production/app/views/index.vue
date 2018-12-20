<template>
    <div class="main">
        <router-view></router-view>
        <router-link to="/webpack">
            <el-button icon="el-icon-arrow-left" circle ></el-button>
        </router-link>
        <router-link to="/async">
            <el-button icon="el-icon-arrow-right" circle ></el-button>
        </router-link>
    </div>
</template>
<style lang="scss">
.main {
    width: 50%;
    margin: 0 auto;
    text-align: center;
    img{
        width:50%;
        padding: 20px;
    }
}
</style>
<script>
export default {
    name: 'App',
    data () {
      return {}
    }
}
</script>