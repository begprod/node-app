<template>
  <div class="users">
    <h1>Users</h1>
    <div v-for="user in users" v-bind:key="user.id" class="user">
      <div class="user__name">
        {{ user['userFirstName'] }}
      </div>
      <div class="user__second-name">
        {{ user['userSecondName'] }}
      </div>
      <div class="user__phone">
        {{ user['userPhoneNumber'] }}
      </div>
      <button class="user__button" @click="editUser(user.id)">Edit</button>
      <button class="user__button" @click="deleteUser(user.id)">Delete</button>
    </div>

    <form class="form users__form" @submit.prevent v-if="isEdited">
      <div class="form__fieldset">
        <input
            v-model="userData.userFirstName"
            class="form__input"
            type="text"
            placeholder="First name"
            name="firstName"
        >
      </div>
      <div class="form__fieldset">
        <input
            v-model="userData.userSecondName"
            class="form__input"
            type="text"
            placeholder="Second name"
            name="secondName"
        >
      </div>
      <div class="form__fieldset">
        <input
            v-model="userData.userPhoneNumber"
            class="form__input"
            type="tel"
            placeholder="Phone number"
            name="phoneNumber"
        >
      </div>
      <button
          class="form__button"
          type="submit"
          @click="saveUser(userId)"
      >
        Save
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      users: null,
      isEdited: false,
      userId: null,
      userData: {
        userFirstName: '',
        userSecondName: '',
        userPhoneNumber: ''
      }
    }
  },
  methods: {
    getUsers() {
      this.$axios.get('http://localhost:3000/api/users')
      .then((response) => {
        this.users = response.data;
      })
      .catch((error) => {
        console.log(error);
      })
    },
    editUser(id) {
      this.isEdited = true;
      this.userId = id;

      this.$axios.get(`http://localhost:3000/api/users/${id}`, {
        id: id
      })
      .then((response) => {
        // console.log(response.data);

        this.userData.userFirstName = response.data.userFirstName;
        this.userData.userSecondName = response.data.userSecondName;
        this.userData.userPhoneNumber = response.data.userPhoneNumber;
      })
      .catch((error) => {
        console.log(error);
      })
    },
    saveUser(id) {
      // console.log(id);
      this.isEdited = false;

      this.$axios.put(`http://localhost:3000/api/users/${id}`, {
        id: this.userId,
        data: this.userData
      })
      .then((response) => {
        console.log(response);
        location.reload();
      })
      .catch((error) => {
        console.log(error);
      })
    },
    deleteUser(id) {
      console.log(id);

      this.$axios.delete(`http://localhost:3000/api/users/${id}`)
      .then((response) => {
        console.log(response);
        location.reload();
      })
      .catch((error) => {
        console.log(error);
      })
    }
  },
  mounted() {
    this.getUsers();
  }
}
</script>

<style lang="scss">
.users {
  &__form {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .9);
  }
}

.user {
  margin-bottom: 40px;
  padding: 20px;
  border-bottom: 1px solid lightgray;

  &__name {
    font-size: 36px;
  }

  &__second-name {

  }

  &__phone {

  }

  &__button {
    width: 100%;
    height: 35px;
    margin-top: 20px;
    padding: 5px;
    font-size: 1rem;
    border: none;
    color: white;
    background-color: cadetblue;
  }
}
</style>
