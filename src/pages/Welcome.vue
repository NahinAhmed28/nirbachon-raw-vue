<template>
  <div class="my-st">


  <WrapperComponent>
    <SidebarComponent/>
    <HeaderComponent />

    <division-page/>
  </WrapperComponent>



  </div>


</template>

<script>
import WrapperComponent from "@/pages/pageComponents/Wrapper";
import SidebarComponent from "@/pages/pageComponents/Sidebar";
import HeaderComponent from "@/pages/pageComponents/Header";
// import ZillaPage from "@/pages/maps/ZillaPage";
import DivisionPage from "@/pages/maps/DivisionPage";
import sideb from "@/pages/sidebar";


export default {
  name: 'LandingWelcome',
  props: {
    msg: String
  },components: {
    // ZillaPage,
    WrapperComponent,
    SidebarComponent,
    HeaderComponent,
    DivisionPage
  },
  mounted() {
    sideb()
  }
}
</script>

<style>
 .my-st{
   display: flex;
   justify-content: space-around;
 }
</style>
