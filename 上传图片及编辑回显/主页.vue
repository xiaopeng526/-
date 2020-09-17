<template>
  <div class="informationBasic">
    <!--基本信息修改-->
    <el-dialog
      title="基本信息修改"
      width="56%"
      center
      :visible="basicDialog"
      :close-on-click-modal="false"
      @close="handleDialogClose('authorizationAddForm')"
    >
      <!--新增form组件-->
      <el-form
        ref="basicForm"
        :model="basicForm"
        :rules="formRules"
        label-width="150px"
      >
        <el-form-item label="机构名称: " prop="mechanismName">
          <el-input
            v-model="basicForm.mechanismName"
            placeholder="请输入机构名称"
          />
        </el-form-item>
        <div style="display: flex;justify-content: flex-start">
          <el-form-item label="机构背景图" prop="mechanismImage">
            <upload ref="upload" />
          </el-form-item>
        </div>
        <el-form-item label="机构详细介绍: " prop="basicIntroduction">
          <el-input
            v-model="basicForm.basicIntroduction"
            type="textarea"
            :rows="6"
            placeholder="请输入内容"
          />
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <!--新增弹框按钮-->
        <el-row type="flex" justify="center">
          <el-button type="primary" @click="handleAuditAdd('basicForm')">提交</el-button>
          <el-button
            type="primary"
            style="margin-left:50px;"
            @click.stop="handleDialogClose('basicForm')"
          >取 消</el-button>
        </el-row>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import upload from './components/upload'
export default {
  components: { upload },
  props: {
    basicDialog: {
      type: Boolean,
      default: true
    },
    basicForm: {
      type: Object,
      default: () => {
      }
    }
  },
  data() {
    return {
      imgDialogVisible: false,
      dialogImageUrl: '',
      formRules: {
        mechanismName: [{ required: true, message: '请输入机构名称', trigger: 'blur' }],
        // mechanismImage: [{ required: true, message: '请上传一张图片', trigger: 'change' }],
        basicIntroduction: [{ required: true, message: '请输入内容', trigger: 'blur' }]
      }
    }
  },
  created() { //图片编辑回显
    this.$nextTick(() => {
      const mechanismImage='https://static.oss.cdn.oss.gaoshier.cn/image/0191a789-7e42-4785-9d21-9557f9a8fadc.jpg'
      this.$refs.upload.uploadFileList.push({ url: mechanismImage })
    })
  },
  methods: {
    handleAuditAdd(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 获取组件内的图片
          this.$refs.upload.imgData.length && (this.basicForm.mechanismImage = this.$refs.upload.imgData[0])
          console.log(this.basicForm)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    // 关闭弹框、清除多余内容
    handleDialogClose(formName) {
      this.$nextTick(() => {
        if (this.$refs[formName] !== undefined) {
          this.$refs[formName].resetFields()
          this.$refs[formName].clearValidate()
        }
        this.$emit('close')
      })
    }
  }

}
</script>

<style lang="scss" scoped>

</style>
