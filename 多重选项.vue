
<template>
  <div class="jgqj-jggl">
    <div class="side">
      <div v-for="(item,index) in tableData.data" :key="index">
        <p class="side_header">{{item.name}}</p>
        <p class="side_content">
          <span v-for="(i,index2) in item.list"
                :key="index2"
                :class="[{'active':JSON.stringify(checkbox).includes(i.Name)}]"
                @click="haddleCheck(i)"
          >
            {{i.Name}}
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import tableList  from './tableList.json'
  export default {
    data() {
      return {
        tableData:[],
        checkbox:[],
      };
    },
    methods: {
      haddleCheck(e){
        const Idx = this.checkbox.map((i) => i.Name).indexOf(e.Name)
        // 如果已经选中了，那就取消选中，如果没有，则选中
        if (Idx > -1) {
          this.checkbox.splice(Idx, 1)
        } else if (Idx === -1) {
          this.checkbox.push(e)
        }
      }
    },
    mounted() {
    },
    created() {
      this.tableData=tableList
    },
  };
</script>
<style lang="scss" scoped>
  .side{
    background: #cccccc;
    width:30%;
    .side_header{
      margin-left:5px;
      width:25%;
      color:#027aff;
    }
    .side_content{
      display: flex;
      width:100%;
      justify-content: flex-start;
      flex-wrap:wrap;
      span{
        display: block;
        height:20px;
        width:30%;
        border-radius: 10px;
        background: #ea8e5f;
        text-align: center;
        margin:5px;
      }
      .active{background: #1DCD1A}
    }

  }

</style>
