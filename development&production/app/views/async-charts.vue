<template>
    <div>
        <div style="text-align:center;line-height:30px;">
          <h4>V-charts 已加载</h4>
        </div>
        <ve-ring :data="chartData" :settings="chartSettings"></ve-ring>
    </div>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        limitShowNum: 3
      }
      return {
        chartData: {
          columns: ['日期', '访问用户'],
          rows: [
            { '日期': '1/1', '访问用户': 1393 },
            { '日期': '1/2', '访问用户': 3530 },
            { '日期': '1/3', '访问用户': 2923 },
            { '日期': '1/4', '访问用户': 1723 },
            { '日期': '1/5', '访问用户': 3792 },
            { '日期': '1/6', '访问用户': 4593 }
          ]
        }
      }
    }
  }
</script>