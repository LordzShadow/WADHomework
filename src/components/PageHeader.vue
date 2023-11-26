<template>
  <div class="header">
    <h1>PostIt - think, post, like!</h1>
    <nav class="nav">
      <div class="nav-start">
        <div class="nav-item">
          <RouterLink to="/" active-class="active">Main</RouterLink>
        </div>
        <div class="nav-item">
          <RouterLink to="/signup" active-class="active">Sign Up</RouterLink>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  padding-bottom: 1rem;
  background-color: var(--color-background-soft);
  text-align: center;
}

.nav {
  margin: 0 12px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}

.nav a {
  padding: 10px 15px;
  text-align: center;
  display: block;
  font-weight: 600;
  font-size: 1.4em;
  font-weight: 400;
}

.nav-start {
  display: flex;
}

.nav-item {
  height: 100%;
  display: flex;
  align-items: center;
}

.nav-item>.active {
  background-color: rgba(23, 62, 100, 0.267);
}
</style>