<template>
  <div class="home">
    <button>button</button>
    <Warpper :component="V1" />
  </div>
</template>

<script>
// @ is an alias to /src
import Warpper from '../warpper.rsjs'
import TeactComponentDemo from '../TeactComponentDemo.rsjs'
import V1 from './V1.rsjs'

export default {
  name: 'Home',
  components: {
    Warpper
  },
  data () {
    return {
      TeactComponentDemo,
      V1
    }
  },
  mounted () {
    console.log(this.TeactComponentDemo)
  }
}
</script>
