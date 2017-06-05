<template>
  <div id="topbar">
    <div class="wrapper">
      
      <div>
        <span class="logo">在线简历编辑器</span>
        <span class="author">—— code by yujingyang</span>
      </div>

      <div class="action">

        <div v-if="logined" class="userActions">
          <span class="welcome">你好，{{user.username}}</span>
          <a class="button" href="#" @click.prevent="signOut">登出</a>
        </div>

        <div v-else class="userActions">
          <a class="button primary" href="#" @click.prevent="signUpDialogVisible = true">注册</a>
          <a class="button" href="#" @click.prevent="signInDialogVisible = true">登录</a>
        </div>
        <div class="save" v-show="saveVisable">
          <button class="button primary" @click.prevent="saveOrUpdate">保存</button>
        <router-link class="button" to="/previewWeb">预览</router-link>
        </div>
        
        <MyDialog title="注册" :visible="signUpDialogVisible" @close="signUpDialogVisible = false">
          <SignUpForm @success="login($event)" />
        </MyDialog>
        <MyDialog title="登录" :visible="signInDialogVisible" @close="signInDialogVisible = false">
          <SignInForm @success="login($event)" />
        </MyDialog>
      </div>
    </div>

  </div>
</template>

<script>
  import MyDialog from './MyDialog'
  import SignUpForm from './SignUpForm'
  import SignInForm from './SignInForm'
  import AV from '../lib/leancloud'

  export default {
    name: 'Topbar',
    data() {
      return {
        signUpDialogVisible: false,
        signInDialogVisible: false,

      }
    },
    computed: {
      user() {
        return this.$store.state.user
      },
      logined() {
        return this.user.id
      },
      saveVisable(){
        return this.$store.state.saveVisable
      }
    },
     
    components: {
      MyDialog,
      SignUpForm,
      SignInForm
    },
    methods: {
      login(user) {   //本地加载user数据
        this.$store.commit('changeMyDialogCss',false)
        
        setTimeout(()=>(this.signUpDialogVisible = false,
        this.signInDialogVisible = false,
        this.$store.commit('changeMyDialogCss',true)),500)

        this.$store.commit('setUser', user)
        this.$store.commit('setSaveVisable', true)
      },
      signOut() {
        AV.User.logOut()
        this.$store.commit('removedate')
        this.$store.commit('setSaveVisable', false)
      },

      save() { //保持数据到leadCloud
        console.log('执行save')
        let dataString = JSON.stringify(this.$store.state.resume)
        var AVresume = AV.Object.extend('resume');
        var avresume = new AVresume();
        var acl = new AV.ACL()
        acl.setReadAccess(AV.User.current(), true)
        acl.setWriteAccess(AV.User.current(), true)
        avresume.set('content', dataString);
        avresume.setACL(acl)
        avresume.save().then((resume) => {
          // 成功保存之后，执行其他逻辑.
          this.$store.commit('updateResumeid', resume.id)
        }, function (error) {
          // 异常处理
          console.error('保存失败');
        });
      },
      update() {
        let dataString = JSON.stringify(this.$store.state.resume)
        let avresume = AV.Object.createWithoutData('resume', this.$store.state.resume.id)
        avresume.set('content', dataString)
        avresume.save().then(() => {
          console.log('更新成功')
        })
      },
      saveOrUpdate() {
        if (this.$store.state.resume.id) {
          this.update()
        } else {
          this.save()
        }
      },
    }
  }

</script>

<style scoped lang="scss">
  #topbar {
    color: green;
    background: #fff;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.25);
    height: 64px;
    >.wrapper {
      min-width: 1024px;
      max-width: 1440px;
      margin: 0 auto;
      height: 64px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 16px;
    }
    .logo {
      font-size: 28px;
      color: #000;
    }
    .author{
      margin-left: 20px;
      color: gray;
    }
  }

  .button {
    width: 72px;
    height: 32px;
    border: none;
    cursor: pointer;
    font-size: 18px;
    background: #ddd;
    margin-right: 0.5em;
    color: #222;
    text-decoration: none;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    &:hover {
      box-shadow: 1px 1px 1px hsla(0, 0, 0, 0.50)
    }
    &.primary {
      background: #02af5f;
      color: white;
    }
  }

  .action {
    display: flex;
    .userActions {
      
      .welcome {
        margin-right: .5em
      }
    }
  }

</style>
