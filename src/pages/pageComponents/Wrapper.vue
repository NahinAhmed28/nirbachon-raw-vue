<template>

  <div class="wrapper">
    <!-- start page content wrapper-->
    <div class="page-content-wrapper">
      <slot></slot>
    </div>
    <div class="overlay nav-toggle-icon"></div>
  </div>

</template>

<script>
export default {
  name: "WrapperComponent",
}
</script>
