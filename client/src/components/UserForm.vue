<template>
  <div>
    <h1>User form</h1>
    <form class="form" @submit.prevent="formSubmit">
      <div class="form__fieldset">
        <input
          v-model="form.userFirstName"
          class="form__input"
          type="text"
          placeholder="First name"
          name="firstName"
        >
      </div>
      <div class="form__fieldset">
        <input
          v-model="form.userSecondName"
          class="form__input"
          type="text"
          placeholder="Second name"
          name="secondName"
        >
      </div>
      <div class="form__fieldset">
        <input
          v-model="form.userPhoneNumber"
          class="form__input"
          type="tel"
          placeholder="Phone number"
          name="phoneNumber"
        >
      </div>
      <button
        class="form__button"
        type="submit">
        Send
      </button>
      <div v-if="requestSuccess">
        {{ responseMessage }}
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'UserForm',
  data() {
    return {
      form: {
        userFirstName: '',
        userSecondName: '',
        userPhoneNumber: ''
      },
      responseMessage: '',
      requestSuccess: false
    }
  },
  methods: {
    formSubmit() {
      this.$axios.post('http://localhost:3000/api/users', {
        data: this.form
      })
      .then((response) => {
        console.log(response);

        const message = response.data.title;

        if (message) {
          this.requestSuccess = true;
          this.responseMessage = message;
        } else {
          this.responseMessage = 'Error';
        }
      })
      .catch((error) => {
        console.log(error);
      });
    }
  }
}
</script>

<style lang="scss">
.form {
  &__fieldset {
    margin-bottom: 20px;
  }

  &__input {
    width: 100%;
    padding: 5px;
    font-size: 1rem;
  }

  &__button {
    width: 100%;
    height: 35px;
    padding: 5px;
    font-size: 1rem;
    border: none;
    color: white;
    background-color: cadetblue;
  }
}
</style>
