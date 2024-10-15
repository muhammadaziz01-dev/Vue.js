<template>
  <header>
    <div class="container">
      <nav class="nav">
        <router-link to="/" class="nav--list--itim">
          <img src="../assets/vue.svg" alt="Logo" class="nav--logo" />
        </router-link>
        <ul class="nav--list">
          <router-link to="/" class="nav--list--itim">Home</router-link>
          <router-link to="/about" class="nav--list--itim">About</router-link>
          <router-link to="/profile" class="nav--list--itim">Profile</router-link>
          <router-link to="/service" class="nav--list--itim">Servises</router-link>
          <router-link to="/signin" class="nav--list--itim">Sign In</router-link>
          <router-link to="/signup" class="nav--list--itim">Sign Up</router-link>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup></script>

<style scoped>
header {
  background-color: #4B70FF;
}
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  color: #fff;
}

.nav--logo {
  height: 40px;
}

.nav--list {
  display: flex;
  align-items: center;
  gap: 30px;
}
.nav--list--itim {
  text-decoration: none;
  color: #fff;
  transition: color 0.2s ease;
}

.router-link-exact-active {
  text-decoration: underline;
}
</style>
