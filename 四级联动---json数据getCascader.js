import countryArea from '@/utils/area.json'
export default {
  data() {
    return {
      props: {
        lazy: true,
        lazyLoad: (node, resolve) => { this.lzFn(node, resolve) }
      },
      // countriesId: '', // 国家id
      // statesId: '', // 省份id
      // citiesId: '', // 市区id
      // regionsId: '', // 县区id
      country: '', // 国家
      province: '', // 省份
      city: '', // 市区
      county: '', // 县区
      countrys: '', // 选中的省市集合
      countryList: [], // 国家列表
      vals: [],
      valsChildren: [],
      valsChild: [],
      mechanismCity: ''
    }
  },
  methods: {
    lzFn(node, resolve) {
      // console.log(node)
      const { level } = node
      // console.log(level)
      if (level === 0) {
        setTimeout(() => {
          this.countryList = countryArea
          const nodes = this.countryList.map(item => ({
            label: item.cname,
            value: item.id,
            leaf: level >= 3
          }))
          // console.log(nodes)
          resolve(nodes)
        }, 300)
      } else if (level === 1) {
        // console.log(level, '国家', 11111, node.value)
        // this.countriesId = node.value ? node.value : ''
        this.country = node.label ? node.label : ''
        setTimeout(() => {
          this.vals = this.countryList.find(function(i) {
            return i.id === node.value
          }).children
          const nodes = this.vals.map(item => ({
            label: item.cname,
            value: item.id,
            leaf: level >= 3
          }))
          // console.log(nodes)
          resolve(nodes)
        }, 300)
      } else if (level === 2) {
        // console.log(level, '省市', 2222, node)
        // this.statesId = node.value ? node.value : ''
        this.province = node.label ? node.label : ''
        setTimeout(() => {
          this.valsChildren = this.vals.find(function(i) {
            return i.id === node.value
          }).children
          const nodes = this.valsChildren.map(item => ({
            label: item.cname,
            value: item.id,
            leaf: level >= 3
          }))
          // console.log(nodes)
          resolve(nodes)
        }, 300)
      } else if (level === 3) {
        // console.log(level, '城市', 3333, node)
        // this.citiesId = node.value ? node.value : ''
        this.city = node.label ? node.label : ''
        setTimeout(() => {
          this.valsChild = this.valsChildren.find(function(i) {
            return i.id === node.value
          }).children
          const nodes = this.valsChild.map(item => ({
            label: item.cname,
            value: item.id,
            leaf: level >= 3
          }))
          // console.log(nodes)
          resolve(nodes)
        }, 300)
      }
    },
    handleChange() { // 获取地址
      if (this.dialogType === 'add') {
        this.pathvalue = this.$refs.cascader.getCheckedNodes()[0].data
        this.regionsId = this.pathvalue.value// 获取县级id
        this.county = this.pathvalue.label
        this.mechanismCity = this.country + '' + this.province + '' + this.city + '' + this.county
      }
      // console.log(this.authorizationAddForm.mechanismCity, this.mechanismCity)
    }
  }
}
