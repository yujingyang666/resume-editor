<<template>
  <div>
      <div class="page">
      <header  >
        <Topbar />
      </header>
      <main >
        <Editor class="main animated zoomInLeft" />
        <Preview  class="main animated zoomInRight"/>
      </main>
    </div>
  </div>
</template>

<<script>

import Topbar from './Topbar'
import Editor from './Editor'
import Preview from './Preview'

export default {
  name:"Resume",
  components: {Topbar,Editor,Preview},
}
</script>

<style lang="scss">

.main{
 -webkit-animation-duration: 0.3s;
-moz-animation-duration: 0.3s;
}

</style>
