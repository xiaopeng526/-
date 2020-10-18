<template>
  <div>
    <div style="display: flex;justify-content: space-between; width:60%; cursor: pointer;">
      <div style="width:300px;height:300px;border:1px solid #ff0">
        <div v-for="(item,index) in tableData" style="margin:5px;">
          <div :key="index" style="border: 1px solid #f0f;" @click.stop="titleTiem(item,index)">标题：{{item.title}}</div>
          <ul v-for="(item2,index2) in item.list" @click.stop="itemClick(item2,item,index2)">
            <li :key="index2" style="height:30px; line-height: 30px;margin-top: 5px;">
              子类：{{item2.title}}----{{item2.number}}
            </li>
          </ul>
        </div>

      </div>
      <div>
        <p style="margin-bottom: 20px;">
          <el-button @click="clickLeft()">>>></el-button>
        </p>
        <el-button @click="clickRight()"><<<</el-button>
        <el-button @click="AllSelect()">全选</el-button>
        <el-button @click="AllDel()">全删</el-button>
      </div>
      <div style="width:300px;height:300px;border:1px solid #f0f">
        <div v-for="(item,index) in tableData2" style="margin:5px;">
          <div :key="index" style="border: 1px solid #f0f;" @click.stop="rightClick(item,index)">标题：{{item.title}}</div>
          <ul v-for="(item2,index2) in item.list">
            <li :key="index2" style="height:30px; line-height: 30px;margin-top: 5px;" @click.stop="clickItemRight(item2,item,index2)">
              子类：{{item2.title}}----{{item2.number}}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    components: {},
    data() {
      return {
        tableData2: [],
        tableData: [{
          id: 1,
          title: '哈哈哈哈',
          list: [{
            id: 12,
            title: 'adsdsad',
            number: '232132',
            parentId: 1
          }, {
            id: 13,
            title: '43dfs',
            number: '3333',
            parentId: 1
          }, {
            id: 14,
            title: '444',
            number: '444',
            parentId: 1
          }]
        },
          {
            id: 2,
            title: '咳咳咳',
            list: [{
              id: 22,
              title: 'cxcxccx',
              number: '33444',
              parentId: 2
            },
              {
                id: 23,
                title: '2323',
                number: '23232',
                parentId: 2
              }]
          }],
        flag: 0,
        transterArr: [],
        IndexLeft: '',
        ItemLeft: {},
        IndexChild: '',
        ItemLeftChild: {},
        ItemLeftParent: {},
        transteChild: {},
        checkedNum:0,

        Flag:0,
        transteRightArr: [],
        IndexRight: '',
        ItemRight: {},
        IndexRightChild: '',
        ItemRightChild: {},
        ItemRightParent: {},
        transteRightChild: {},
        checkedNumber:0,
      }
    },
    methods: {
//从左向右移动
      titleTiem(item, index) {
        this.IndexLeft = index;
        this.ItemLeft = item;
        this.flag = 1
      },
      itemClick(childItem, parentItem, index) {
        this.flag = 2;
        this.IndexChild = index;
        this.ItemLeftChild = childItem;
        this.ItemLeftParent = parentItem
        this.transteChild = Object.assign({}, parentItem)
        this.transteChild.list = [childItem]
        // console.log(this.transteChild)
      },
      clickLeft() {
        if (this.flag === 1) {
          this.tableData2.forEach((item,index) => {
            if (item.id === this.ItemLeft.id) {
              item.list=item.list.concat(this.ItemLeft.list)
              this.tableData.splice(this.IndexLeft, 1)
              this.checkedNum=1
            }
          })
          if(!this.checkedNum){
            if (this.tableData2.indexOf(this.ItemLeft) < 0) {
              this.tableData2.push(this.ItemLeft);
              this.tableData.splice(this.IndexLeft, 1)
            }
          }
          this.checkedNum=0
          this.flag = 0
        } else if (this.flag === 2) {
          this.flag = 0;
          if (this.ItemLeftParent.list.length == 1) {
            let Index = this.tableData.indexOf(this.ItemLeftParent)
            this.tableData.splice(Index, 1)
          } else {
            this.ItemLeftParent.list.splice(this.IndexChild, 1)
          }
          this.tableData2.push(this.transteChild)
          this.tableData2.forEach((item) => {
            if (item.id === this.transteChild.id) {
              if (item.list.indexOf(this.transteChild.list[0]) < 0) {
                item.list.push(this.transteChild.list[0])
              }
            }
          })
          for (var i = 0; i < this.tableData2.length; i++) {
            for (var j = i + 1; j < this.tableData2.length; j++) {
              if (this.tableData2[i].id == this.tableData2[j].id) {
                this.tableData2.splice(j, 1);
                j--;
              }
            }
          }
        }
      },
      //从右移到左边
      rightClick(item, index) {
        this.IndexRight = index;
        this.ItemRight = item;
        this.Flag = 1
      },
      clickItemRight(childItem, parentItem, index) {
        this.Flag = 2;
        this.IndexRightChild = index;
        this.ItemRightChild = childItem;
        this.ItemRightParent = parentItem
        this.transteRightChild = Object.assign({}, parentItem)
        this.transteRightChild.list = [childItem]
        console.log(this.transteRightChild)
      },
      clickRight() {
        if (this.Flag === 1) {
          this.tableData.forEach((item,index) => {
            if (item.id === this.ItemRight.id) {
              item.list=item.list.concat(this.ItemRight.list)
              this.tableData2.splice(this.IndexRight, 1)
              this.checkedNumber=1
            }
          })
          if(!this.checkedNumber){
            if (this.tableData.indexOf(this.ItemRight) < 0) {
              this.tableData.push(this.ItemRight);
              this.tableData2.splice(this.IndexRight, 1)
            }
          }
          this.checkedNumber=0
          this.flag = 0
        } else if(this.Flag === 2) {
          this.Flag = 0;
          if (this.ItemRightParent.list.length == 1) {
            let Index = this.tableData2.indexOf(this.ItemRightParent)
            this.tableData2.splice(Index, 1)
          } else {
            this.ItemRightParent.list.splice(this.IndexRightChild, 1)
          }
          this.tableData.push(this.transteRightChild)
          this.tableData.forEach((item) => {
            if (item.id === this.transteRightChild.id) {
              if (item.list.indexOf(this.transteRightChild.list[0]) < 0) {
                item.list.push(this.transteRightChild.list[0])
              }
            }
          })
          for (var i = 0; i < this.tableData.length; i++) {
            for (var j = i + 1; j < this.tableData.length; j++) {
              if (this.tableData[i].id == this.tableData[j].id) {
                this.tableData.splice(j, 1);
                j--;
              }
            }
          }
        }
      },
      AllSelect(){
        this.tableData2=this.tableData.concat(this.tableData2)
        for (var i = 0; i < this.tableData2.length; i++) {
          for (var j = i + 1; j < this.tableData2.length; j++) {
            if (this.tableData2[i].id == this.tableData2[j].id) {
              this.tableData2[i].list=this.tableData2[j].list.concat(this.tableData2[i].list)
              this.tableData2.splice(j, 1);
              j--;
            }
          }
        }
        this.tableData=[]
      },
      AllDel(){
        this.tableData=this.tableData.concat(this.tableData2)
        for (var i = 0; i < this.tableData.length; i++) {
          for (var j = i + 1; j < this.tableData.length; j++) {
            if (this.tableData[i].id == this.tableData[j].id) {
              this.tableData[i].list=this.tableData[j].list.concat(this.tableData[i].list)
              this.tableData.splice(j, 1);
              j--;
            }
          }
        }
        this.tableData2=[]
      }
    },

    created() {

    },

  }
</script>
<style scoped>

</style>
