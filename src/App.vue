<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
  import 'normalize.css/normalize.css'
  import './assets/reset.css'
  import icons from './assets/icons'
  import AV from './lib/leancloud'
  import getAVUser from './lib/getAVUser'

  export default {
    name: 'app',
    created() {  //钩子，每次加载完执行
      document.body.insertAdjacentHTML('afterbegin', icons)
      // let state =localStorage.getItem('state')
      // if(state){
      //   state =JSON.parse(state)
      // }
      // this.$store.commit('initState',state)  //从localStorage中初始化数据
      this.$store.commit('setUser', getAVUser()) 
      this.fetch() //从缓存中获取上次登录数据
      if(this.$store.state.user.id){   
        this.$store.commit('setSaveVisable', true)
      }
      
    },
    methods:{
      fetch() {
        if (this.$store.state.user) {
          var query = new AV.Query('resume');
          query.find().then((resumes) => {
            let avresumes = resumes[0]
            let state = avresumes.attributes.content
            this.$store.commit('initState_net',state)
            this.$store.commit('updateResumeid', avresumes.id)
            console.log('更新简历数据成功')
          }, function (error) {
            console.error(error)
          })
        }
      }
    }
  }

</script>

<style lang="scss">
  .page {
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: #EAEBEC;
    min-height: 0;
    >main {
      flex-grow: 1;
      min-width: 1024px;
      max-width: 1440px;
      height: 0px;   //兼容IE&firefox子元素overflow失效
      margin-top: 16px;
      margin-bottom: 16px;
      display: flex;
      width: 100%;
      align-self: center;
      justify-content: space-between;
      padding: 0 16px;
    }
  }

  svg.icon {
    height: 10px;
    width: 10px;
    fill: currentColor;
    vertical-align: -0.1em;
    font-size: 16px;
  }

</style>
