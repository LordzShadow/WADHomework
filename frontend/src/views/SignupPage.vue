<template>
  <div class="formBox">
    <form @submit.prevent="submitForm" class="form">
      <div class="form-body">
        <h3>Welcome to PostIt</h3>
        <a href="#">Log in</a>
        <span>or</span>
        <span>Create an account</span>
        <input class="form-input" required placeholder="Email" type="email" />
        <input v-model="password" class="form-input" required placeholder="Password" type="password" />
        <span v-if="formSubmitted && !isPasswordValid" class="validation-message">{{ validationMessage }}</span>
        <button class="form-submit" type="submit">Create</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      password: "",
      validationMessage: "",
      formSubmitted: false
    };
  },
  computed: {
    isPasswordValid() {
      return this.validatePassword();
    }
  },
  methods: {
    validatePassword() {
      // does not check for "1 uppercase character", it is already checked as the first letter
      const regex = /[A-Z](?=(.*?[a-z]){2,})(?=.*?\d)(?=.*?[_]).{7,14}$/;

      if (regex.test(this.password)) {
        this.validationMessage = "";
        return true;
      } else {
        this.validationMessage = "Password is not valid. Please follow the specified conditions: \n The password should be between 8 and 15 characters\n Includes at least 1 uppercase character\n Two lowercase characters \n 1 number\n The password starts with an uppercase character\n The password should include \"_\"";
        return false;
      }
    },
    submitForm() {
      this.formSubmitted = true;

      if (!this.isPasswordValid) {

        console.log("Form submitted with not valid password");
        return;
      }

      console.log("Form submitted with valid password");

      this.$router.push('/');

    }
  }
};
</script>

<style scoped>
.formBox {
  display: flex;
  justify-content: center;
  width: 100%;
}

.form {
  display: flex;
  justify-content: center;
  min-width: auto;
  width: 50%;
  border: 1px solid yellow;
  border-radius: 10px;
}

.form-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid cyan;
  border-radius: 9px;
  text-align: center;
  width: 100%;
  background-color: rgb(61, 66, 48);
}

.validation-message {
  color: red;
  margin-top: 5px;
  white-space: pre-line;
}
</style>