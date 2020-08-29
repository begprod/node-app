<template>
  <div>
    <h1>User form</h1>
    <form class="form" @submit.prevent="formSubmit">
      <div class="form__fieldset">
        <input
          v-model="form.firstName"
          class="form__input"
          type="text"
          placeholder="First name">
      </div>
      <div class="form__fieldset">
        <input
          v-model="form.lastName"
          class="form__input"
          type="text"
          placeholder="Last name">
      </div>
      <div class="form__fieldset">
        <input
          v-model="form.phoneNumber"
          class="form__input"
          type="tel"
          placeholder="Phone number">
      </div>
      <button
        class="form__button"
        type="submit">Send</button>
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
      }
    }
  },
  methods: {
    formSubmit() {
      console.log('submit method');
      this.$axios.post('/', {
        data: this.form
      })
      .then((response) => {
        console.log(response);
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
