<template>
  <div>
    <RouterLink  to="/">
     Home
    </RouterLink>
    <RouterLink to="/dashboard">
      DashBoard
    </RouterLink>
    <RouterLink to="/login">
      Login
    </RouterLink>
    <RouterLink to="/register">
      Register
    </RouterLink>

  </div>
</template>

<script>
export default {
  name: 'LandingWelcome',
  props: {
    msg: String
  }
}
</script>


