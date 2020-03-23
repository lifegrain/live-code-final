<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-danger d-flex justify-content-between">
    <div class="d-flex">
      <router-link class="navbar-brand" to="/">Covid-19</router-link>
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/" v-if="this.$route.path != '/login'">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/" v-if="this.$route.path != '/login'">Reports</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/" v-if="this.$route.path != '/login'">Tracking</router-link>
        </li>
      </ul>
    </div>

    <div>
      <ul class="navbar-nav mr-auto">
          <li class="nav-item">
              <router-link class="nav-link" to="/logout" v-if="this.$route.path != '/login'">logout</router-link>
          </li>
      </ul>
    </div>
  </nav>
</template>
