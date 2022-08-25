<template>
  <div>
    Welcome page

    <RouterLink to="/DashboardAgent">
      DashBoard Agent
    </RouterLink>
    <RouterLink to="/login">
      Login
    </RouterLink>
    <RouterLink to="/home">
      Home
    </RouterLink>
    <RouterLink to="/result">
      Result
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


