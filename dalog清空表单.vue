<template>
  <el-dialog title="收货地址" :visible="dialogFormVisible" @close="close" >
    <el-form :model="form" ref="AddForm" :rules="rules">
      <el-form-item label="活动名称" label-width="120px" prop="name">
        <el-input v-model="form.name" ></el-input>
      </el-form-item>
      <el-form-item label="活动区域" label-width="120px" prop="address">
          <el-input v-model="form.address" ></el-input>
        </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="close()">取 消</el-button>
      <el-button type="primary" @click="submitForm('AddForm')">确 定</el-button>
    </div>
  </el-dialog>


</template>

<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          address: '',
        },
        rules: {
          name: [
            {required: true, message: '请输入活动名称', trigger: 'blur'},
            {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
          ],
          address: [
            {required: true, message: '请选择活动区域', trigger: 'blur'}
          ],
        },
      }
    },
    props: {
      dialogFormVisible: {
        type:Boolean,
      },
       row:{
        type:Object
       },
      title:{
        type:String
      }
    },
    methods: {
      close(formName){
        this.$nextTick(() => {//表单的重置，清空
          if (this.$refs[formName] !== undefined) {
            this.$refs[formName].resetFields()
          }
          this.$emit('close')
        })
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
    },

    created() {
      if(this.title==='update'){
        this.form=Object.assign({},this.row) ;
      }
      //this.title一般为add，update等状态，状态的改变才能改变this.form的赋值
      console.log(this.title)
    }
  }
</script>

<style scoped>

</style>
