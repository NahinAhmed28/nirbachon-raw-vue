<template>
  <div class="my-st">


  <WrapperComponent>
    <SidebarComponent/>
    <HeaderComponent />
    <div class="container">
      <section >
        <div class="map" style="padding-top: 2rem">
          <div class="row">
            <div class="col-md-8 mapView">
              <div class="container-index-maps ">
                <!--svg starts here-->
              <DivisionPage />
              </div>
            </div>
          <HomepageRightSide />
          </div>
        </div>
      </section>
  </div>


  </WrapperComponent>



  </div>


</template>

<script>
import WrapperComponent from "@/pages/pageComponents/Wrapper";
import SidebarComponent from "@/pages/pageComponents/Sidebar";
import HeaderComponent from "@/pages/pageComponents/Header";
// import ZillaPage from "@/pages/maps/ZillaPage";
import DivisionPage from "@/pages/maps/DivisionPage";
import HomepageRightSide from "@/pages/pageComponents/HomepageRightSide";
import sideb from "@/pages/sidebar";



export default {

  name: 'LandingWelcome',
  props: {
    msg: String
  },components: {
    WrapperComponent,
    SidebarComponent,
    HeaderComponent,
    DivisionPage,
    HomepageRightSide,
  },
  mounted() {
    sideb()
  }
}
</script>

<style>
 /*.my-st{*/
 /*  display: flex;*/
 /*  justify-content: space-around;*/
 /*}*/
</style>
