<template>
  <div class="page">
    <div class="navigation">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
html {
  font-size: 18px;
}

body {
  margin: 0;
}

.page {
  font-family: Arial, sans-serif;
}

.container {
  display: flex;
  justify-content: center;
  text-align: center;
}

.navigation {
  display: flex;
  justify-content: center;
  padding: 20px 0;

  a {
    color: lightslategrey;
    margin-right: 20px;
  }

  .router-link-exact-active {
    color: black;
  }
}
</style>
