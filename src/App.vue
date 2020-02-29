<template>
  <div id="app">
    <div class="page-content">
      <pageNavBar></pageNavBar>
      <div class="pageCent">
        <router-view></router-view>
      </div>
      <pageFooter></pageFooter>
    </div>
  </div>
</template>

<script>
import pageNavBar from './components/pageNavBar'
import pageFooter from './components/pageFooter'

export default {
  name: 'app',
  components: {
    pageNavBar,
    pageFooter
  }
}
</script>
