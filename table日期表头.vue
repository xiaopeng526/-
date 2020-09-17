 <template>
    <el-table
	:data='tableData3'
      style="width: 100%">
	   <el-table-column
	      prop="name"
	      label="姓名"
	      width="180">
	    </el-table-column>
	  
     <el-table-column align="center" v-for="(item,index) in tableData2" :key="index" :label="item.date">
		<template slot-scope="scope">
			  {{scope.row.num[index]}}
		   </template>
     </el-table-column>
   
    </el-table>
  </template>

  <script>
    export default {
      data() {
        return {
			tableData3:[],
			tableData2:[],
			// tableData3:[{name:'上海',num:[1,2,3,4]},{name:'nanjing',num:[5,6,7,8]}],
			
          tableData: [[{
            date: '2016-05-02',
            num: '2',
            name: '上海'
          }, {
            date: '2016-05-04',
            num: '3',
            name: '上海'
          }, {
            date: '2016-05-01',
            num: '4',
            name: '上海'
          }, {
            date: '2016-05-03',
            num: '5',
            name: '上海'
          }],[{
            date: '2016-05-02',
            num: '6',
            name: 'nanjing'
          }, {
            date: '2016-05-04',
            num: '7',
            name: 'nanjing'
          }, {
            date: '2016-05-01',
            num: '8',
            name: 'nanjing'
          }, {
            date: '2016-05-03',
            num: '9',
            name: 'nanjing'
          }]],
		  name:[],
		  num:[],
		  hh:{}
        }
      },
	  created(){
			this.tableData.forEach((item,index)=>{
			
				var bb=item.map(function(item2,index2){
					return item2.name
				})[0]
					this.name.push(bb)
					var cc=item.map(function(item2,index2){
						return item2.num
					})
					this.num.push(cc)
				var aa=item.filter(function(item2,index2){
					return item2.date
				})
				this.tableData2=aa
			this.hh={
				  'name':this.name[index],
				  'num':this.num[index]
			  }
			  this.tableData3.push(this.hh)
			})
		
		
		
	
			 
	   }
	 
    }
	
  </script>
