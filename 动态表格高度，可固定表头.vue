<template>
  <div class="access-user-page">
      <el-table
        stripe
        :data="tableData"
		ref='table'
		:height='tableHeight'
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="45"></el-table-column>
        <el-table-column prop="workcode" label="工号"></el-table-column>
        <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column prop="email" label="部门"></el-table-column>
        <el-table-column prop="created_at" label="晋升前职级"></el-table-column>
        <el-table-column prop="created_at" label="目前职级"></el-table-column>
        <el-table-column prop="created_at" label="操作状态"></el-table-column>
        <el-table-column prop="created_at" label="流程状态"></el-table-column>
        <el-table-column prop="created_at" label="申报时间"></el-table-column>
        <el-table-column prop="created_at" label="晋升类型"></el-table-column>
        <el-table-column prop="created_at" label="晋升名称"></el-table-column>
        <el-table-column prop="created_at" label="提报人"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              @click.native.prevent="showApprovalDialog(scope.row)"
              type="text"
              size="small"
              >审批</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <br />
      <el-row type="flex" justify="end">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-sizes="constants.PAGINATION_SIZE_ENUM"
          :page-size="pageSize"
          layout="sizes, prev, pager, next"
          :total="total"
        ></el-pagination>
      </el-row>
    </content-frame>
  </div>
</template>

<script>
export default {
  data() {
    return {
		tableHeight:undefined,
		timer:0,
    };
  },
  methods: {
	  getHeight(){
		  this.tableHeight=window.innerHeight-this.$refs.table.$el.offsetTop-250
	  },
	  onReset(){
		  this.timer&&clearTimeout(this.timer)
		  this.timer=setTimeout(()=>{
			  this.getHeight()
		  },500)
	  },
  },
  mounted(){
 this.getHeight()
 window.addEventListener('resize',this.onReset)
  },
  beforeDestroy(){
	this.timer&&clearTimeout(this.timer)
	window.removeEventListener('resize',this.onReset)
  }
};
</script>
