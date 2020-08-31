<template>
  <div class="users">
    <h1>Users</h1>
    <div v-for="user in users" v-bind:key="user.id" class="user">
      <div class="user__name">
        {{ user["userFirstName"] }}
      </div>
      <div class="user__second-name">
        {{ user["userFirstName"] }}
      </div>
      <div class="user__phone">
        {{ user["userFirstName"] }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      users: null
    }
  },
  methods: {
    getUsers() {
      this.$axios.get('http://localhost:3000/api/users')
      .then((response) => {
        this.users = response.data;
      })
    }
  },
  mounted() {
    this.getUsers();
  }
}
</script>

<style lang="scss">
.user {
  border: 1px solid red;

  &__name {
    font-size: 36px;
  }

  &__second-name {

  }

  &__phone {

  }
}
</style>
