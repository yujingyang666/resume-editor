<template>
  <div :class="CSSIn?'Wrap animated fadeIn':'Wrap animated fadeOut' " v-show="visible">
    <div :class="CSSIn?'dialog animated fadeInDown':'dialog animated fadeOutUp' ">
      <header>{{title}}
        <span class="close" @click="close">X</span>
      </header>
      <main>
        <slot></slot>
      </main>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'Dialog',
    props: ['title', 'visible'],
    computed:{
     CSSIn(){
       return this.$store.state.MyDialogCssIn
     }
    },
    methods: {
      close() {
        this.$store.commit('changeMyDialogCss',false)
        setTimeout(()=>(this.$emit('close'),this.$store.commit('changeMyDialogCss',true)),500)
        
        
      }
    }
  }

</script>

<style  lang="scss">
  .Wrap {
    z-index: 100;
    position: fixed;
    background: hsla(0, 0%, 0%, 0.25);
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-animation-duration: 0.3s;
    -moz-animation-duration: 0.3s;
  }

  .dialog {
    background: white;
    min-height: 10em;
    min-width: 25em;
    border-radius: 5px;
    overflow: hidden;
    display: flex;
    flex-direction: column; 
    box-shadow: 0px 0px 10px #888888;
    -webkit-animation-duration: 0.3s;
    -moz-animation-duration: 0.3s;
    
    >header {
      padding: 0.6em 1em;
      display: flex;
      color: #000;
      font-size: 1.1em;
      background-color: #EEE;
      justify-content: space-between;
      align-items:center;
      >span{
        font-size: 0.6em;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 1.5em;
        height: 1.5em;
        border: 1px solid #FFF;
        border-radius: 3px;
        background-color: #FFF;
        color: #000;
        cursor: pointer;
      }
    }
    >main {
      padding:  1em 2em;
      >div{
        form{
          display: flex;
          flex-direction: column;
          .row{
            width: 100%;
            height:2em; 
            margin-bottom: 1em;
            display: flex;
            align-items: center;
            label{
              display: inline-block;
              width: 3em;
              margin-right: 0.5em;
            }
            input{
              flex-grow: 1;
              
              border:0px;
              outline: none;
              border-bottom: 1px solid #BBB;
            }
  
          }
          .actions{
            display: flex;
            width: 100%;
            justify-content:flex-end;
            align-items: center;
            .errorMessage{
              margin-right: 0.5em;
              color: red;
            }
            input{
              background-color: #62b900;
              border: 0px;
              color: #FFF;
              padding: 0.5em;
              width: 4em;
              border-radius: 3px;
              cursor: pointer;
            }
          }
        }
      }
      
    }
  }

</style>
