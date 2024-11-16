<script>
export default {
  data() {
    return {
     
    }
  },
  components:{
  
  }
}
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">TanaGi</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ">
            <li class="nav-item ">
              <router-link :to="{ name: 'home'}" class="nav-link">
                            Homepage
              </router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'movies'}" class="nav-link">
                            Movies
              </router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'creators'}" class="nav-link">
                            Creators
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>

</style>