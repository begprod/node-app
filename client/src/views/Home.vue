<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <UserForm/>
  </div>
</template>

<script>
// @ is an alias to /src
import UserForm from '@/components/UserForm.vue'

export default {
  name: 'Home',
  components: {
    UserForm
  }
}
</script>
