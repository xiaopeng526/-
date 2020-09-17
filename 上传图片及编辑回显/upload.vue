<template>
  <div>
    <el-upload
      class="upload-thumb"
      :action="action"
      :accept="accept"
      :on-success="handleUploadSuccess"
      :on-remove="handleUploadRemove"
      :on-preview="handlePictureCardPreview"
      :show-file-list="true"
      :file-list="uploadFileList"
      list-type="picture"
      :limit="uploadLimit"
      :before-upload="beforeAvatarUpload"
    >
      <el-button v-if="isShowUpBtn" slot="trigger" :disabled="imgDataLength >= uploadLimit" size="small" type="primary">选取文件</el-button>
    </el-upload>
    <span v-if="isShowUpBtn">注：只能上传{{ uploadLimit }}张图片</span>
    <!-- 图片预览 -->
    <el-dialog :visible.sync="imgDialogVisible" append-to-body>
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    uploadLimit: {// 上传数量限制
      type: Number,
      default: 1
    },
    fileSize: {
      type: Number,
      default: 2048
    },
    isShowUpBtn: {
      type: Boolean,
      default: true
    },
    defaultImageUrl: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      isShowImg: true,
      srcList: [this.defaultImageUrl],
      action: process.env.VUE_APP_BASE_API + '/commonSystem/uploadImage', // 上传地址
      accept: '.jpg, .jpeg, .png, .JPG, .JPEG, .GIF', // 文件格式
      uploadFileList: [], // 上传的文件列表
      imgDialogVisible: false, // 图片预览 dialog
      dialogImageUrl: '', // 预览图片地址
      imgData: []// 图片数据
    }
  },
  computed: {
    imgDataLength: function() {
      return this.imgData.length
    }
  },
  created() {
    console.log(1111, this.imgData)
  },
  methods: {
    // 图片、视频上传成功回调
    handleUploadSuccess(res, file, fileList) {
      this.isShowImg = false
      this.handleImgData(fileList)
    },
    // 移除图片
    handleUploadRemove(file, fileList) {
      this.handleImgData(fileList)
    },
    // 图片预览
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url
      this.imgDialogVisible = true
    },
    handleImgData(fileList) {
      const imgDatas = []
      fileList.map(file => {
        file.response ? imgDatas.push(file.response.data) : imgDatas.push(file.url)
      })
      this.imgData = imgDatas
      console.log(this.imgData[0])
    },
    beforeAvatarUpload(file) {
      const isLt2M = file.size / 1024 < this.fileSize
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 ' + this.fileSize + 'k!')
      }
      return isLt2M
    }
  }
}
</script>

<style>

</style>
