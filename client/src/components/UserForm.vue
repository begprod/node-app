<template>
  <div>
    <h1>User form</h1>
    <form class="form" @submit.prevent="formSubmit">
      <div class="form__fieldset">
        <input
          v-model="form.firstName"
          class="form__input"
          type="text"
          placeholder="First name"
        >
      </div>
      <div class="form__fieldset">
        <input
          v-model="form.lastName"
          class="form__input"
          type="text"
          placeholder="Last name"
        >
      </div>
      <div class="form__fieldset">
        <input
          v-model="form.phoneNumber"
          class="form__input"
          type="tel"
          placeholder="Phone number"
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
        firstName: '',
        lastName: '',
        phoneNumber: ''
      },
      responseMessage: '',
      requestSuccess: false
    }
  },
  methods: {
    formSubmit() {
      this.$axios.post('http://localhost:3000/', {
        data: this.form
      })
      .then((response) => {
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
