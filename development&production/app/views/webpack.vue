<template>
    <div>
        <img src="@/app/src/webpack.png" alt="error"/>
        <!-- <button class="btn" style="width:100%;height:40px;margin-bottom:20px;">jquery</button> -->
        <el-button type="success" style="width:100%;" @click="centerDialogVisible = true">{{vueName}}</el-button>
        <el-dialog
            title="提示"
            :visible.sync="centerDialogVisible"
            width="50%"
            center>
            <span>已经引用vue、element-ui组件库了！！！</span>
            <span slot="footer" class="dialog-footer">
            <el-button @click="centerDialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
import $ from 'jquery'
export default {
    name: 'App',
    data () {
      return {
        vueName: "hello webpack",
        centerDialogVisible: false
      }
    },
    mounted () {
        $('.btn').click(function(){
            alert("jquery 调用成功")
        })
    }
}
</script>