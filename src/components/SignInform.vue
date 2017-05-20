<template>
  <div>
    <form @submit.prevent="signIn">
      <div class="row">
        <label>用户名</label>
        <input type="text" required v-model="formData.username">
      </div>
      <div class="row">
        <label>密码</label>
        <input type="password" required v-model="formData.password">
      </div>
      <div class="actions">
        <input type="submit" value="提交">
        <span>{{errorMessage}}</span>
      </div>
    </form>
  </div>
</template>

<script>
  import AV from '../lib/leancloud'
  import getErrorMessage from '../lib/getErrorMessage'
  import getAVUser from '../lib/getAVUser'

  export default {
    name: 'SignInForm',
    data() {
      return {
        formData: {
          username: '',
          password: ''
        },
        errorMessage: ''
      }
    },
    methods: {
      signIn() {
        let {
          username,
          password
        } = this.formData
        AV.User.logIn(username, password).then((loginedUser) => {
          this.$emit('success', {
            username: loginedUser.attributes.username,
            id: loginedUser.id
          })
          this.fetch()
        }, (error) => {
          this.errorMessage = getErrorMessage(error)
        });
      },
      fetch() {
        if (this.$store.state.user) {
          var query = new AV.Query('resume');
          query.find().then((resumes) => {
            let avresumes = resumes[0]
            let state = avresumes.attributes.content
            this.$store.commit('initState_net', state)
            this.$store.commit('updateResumeid', avresumes.id)
            console.log('更新成功')
          }, function (error) {
            console.error(error)
          })
        }
      }
    }
  }

</script>
