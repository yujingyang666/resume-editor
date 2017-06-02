<template>
  <div class="Wrap animated fadeIn " v-show="visible">
    <div class="dialog animated zoomInDown">
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
    methods: {
      close() {
        this.$emit('close')
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
    -webkit-animation-duration: 0.2s;
    -moz-animation-duration: 0.3s;
  }

  .dialog {
    background: white;
    min-height: 10em;
    min-width: 22em;
    border-radius: 5px;
    overflow: hidden;
    position: fixed;
    flex-direction: column; 
     -webkit-animation-duration: 0.2s;
    -moz-animation-duration: 0.3s;
    >header {
      padding: 0.6em;
      display: flex;
      color: #FFF;
      font-size: 1.2em;
      background-color: #62b900;
      justify-content: space-between;
      align-items:flex-start;
      >span{
        font-size: 0.6em;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 1.3em;
        height: 1.3em;
        border: 1px solid #FFF;
        border-radius: 3px;
        background-color: #FFF;
        color: #62b900;
        cursor: pointer;
      }
    }
    >main {
      padding: 16px;
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
              height: 100%;
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
