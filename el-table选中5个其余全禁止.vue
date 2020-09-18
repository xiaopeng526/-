<template>
  <div><el-table
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%"
    @select="selectIt">
    <el-table-column
      type="selection"
      :selectable='selectInit'
      width="55">
    </el-table-column>
    <el-table-column
      label="日期"
      width="120">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column
      prop="status"
      label="status"
      show-overflow-tooltip>
    </el-table-column>
  </el-table>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        tableData: [],
        multipleSelection: [],
      }
    },

    methods: {
      selectInit(row) {
        if (row.status== "1") {//有标识的可选
          return true; //可勾选
        }else if(this.multipleSelection.length>=5) {//选择大于5的其他的不可选
            return false//不可勾选
        }else{
          return true;//默认可选
        }
      },
      selectIt(rows,row){
        this.multipleSelection=rows;
        let selected= rows.indexOf(row)!= -1 //判断是否选中
        if(selected){
          row.status="1"  //选中就赋值 1
        }else {
          row.status='' //不选中测为空
        }
        console.log(rows,row,selected)
      },
    },
    created(){
     this.tableData=[{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-08',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-07',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      },{
       date: '2016-05-03',
       name: '王小虎',
       address: '上海市普陀区金沙江路 1518 弄',
     }, {
       date: '2016-05-02',
       name: '王小虎',
       address: '上海市普陀区金沙江路 1518 弄'
     }, {
       date: '2016-05-04',
       name: '王小虎',
       address: '上海市普陀区金沙江路 1518 弄'
     }, {
       date: '2016-05-01',
       name: '王小虎',
       address: '上海市普陀区金沙江路 1518 弄'
     }, {
       date: '2016-05-08',
       name: '王小虎',
       address: '上海市普陀区金沙江路 1518 弄'
     }, {
       date: '2016-05-06',
       name: '王小虎',
       address: '上海市普陀区金沙江路 1518 弄'
     }, {
       date: '2016-05-07',
       name: '王小虎',
       address: '上海市普陀区金沙江路 1518 弄'
     }
     ]
    }
  }
</script>
