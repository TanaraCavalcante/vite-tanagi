<script>
export default {
  name:"movies",
  data() {
    return {
     
    }
  },
  components:{
  
  }
}
</script>

<template>
  <section class="container">
    <div class="row">
            <div class="col-12 my-3">
                <h2>Movies</h2>
            </div>
            <div class="row justify-content-center gap-2">
                <MovieCard class="col-12 col-md-4 mb-4 " />
            </div>
        </div>
  </section>
</template>

<style scoped>

</style>