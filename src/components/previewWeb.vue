
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
  }
}
</script>

<style >
 .previewWeb{
     max-width:1000px;
     margin: 20px auto; 
 }
</style>
