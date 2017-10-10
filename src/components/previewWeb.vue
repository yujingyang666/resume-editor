
<template>
 <div class="previewWeb">
     <Preview/>  
 </div>
</template>

<script>
import Preview from './Preview'  //从Preview组件加载数据
export default {
  name:'previewWeb',
  components:{
    Preview
  },
  mounted(){
    setTimeout(()=>(alert('按 ctrl+p 打印简历或保存为pdf')),1000)
   
  }
  
}
</script>

<style >
 .previewWeb{
     max-width:1000px;
     margin: 20px auto; 
 }
</style>
