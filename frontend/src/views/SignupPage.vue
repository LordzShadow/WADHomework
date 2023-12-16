<template>
  <div class="formBox">
    <form action="index.html" class="form">
      <div class="form-body column">
        <h3>Welcome to PostIt</h3>
        <a href="#">Create an account</a>
        <span>or</span>
        <span>Please log in</span>
        <input class="form-input" required placeholder="Email" type="email" />
        <input class="form-input" required placeholder="Password" type="password" />
        <button class="form-submit" type="submit">Log in</button>
        <a href="#">Forgot password</a>
      </div>
    </form>
  </div>
</template>

<style scoped>
/* TODO: nice rounded borders and other CSS */
.formBox {
  display: flex;
  justify-content: center;
  width: 100%;
  border: 1px solid red;
}

form {
  display: flex;
  justify-content: center;
  min-width: auto;
  width: 50%;
  border: 1px solid yellow;
}

.column {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid cyan;
  text-align: center;
  width: 100%;
}

.span {
  display: flex;
  justify-content: center;
}
</style>