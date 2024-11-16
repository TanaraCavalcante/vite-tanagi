<script>
import AppHeader from './components/AppHeader.vue';
import { RouterView } from 'vue-router';



export default {
  data() {
    return {
     
      hello Gina

    }
  },
  components:{
  AppHeader,
 
  }
}
</script>

<template>
<AppHeader/>
<RouterView/>

</template>

<style lang="scss">
@use "../node_modules/bootstrap/scss/bootstrap.scss" as *;
@use "./style/general.scss" as *;
  
</style>
