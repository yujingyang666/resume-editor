<<template>
  <div>
      <div class="page">
      <header>
        <Topbar/>
      </header>
      <main>
        <Editor/>
        <Preview/>
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

</style>
