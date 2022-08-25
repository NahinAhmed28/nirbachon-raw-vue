<template>
  <div>

    <section>
      <div class="container" style="padding-top: 12rem">
        <div class="row justify-content-center">
          <div class="col-md-12 col-lg-10">
            <div class="wrap d-md-flex">
              <div class="img"  :style="{ backgroundImage: `url(${publicPath}/custom/BdDigitalImage.JPG)` }"></div>
              <div class="login-wrap p-4 p-md-5">
<!--<img src="public/custom/design/img/Capture.JPG">-->
                <form style="font-family: Arial, Baskerville, monospace; padding: 20%" action="dashboard_agent.html">
                  <h2 style="text-align: center; font-size:x-large ; color:mediumpurple">ERU Login</h2>

                  <div class="form-outline mb-1">
                    <input type="text" id="form2Example11" class="form-control" placeholder="Username"/>
                  </div>

                  <div class="form-outline mb-1">
                    <input type="password" id="form2Example22" class="form-control" placeholder="Password"/>
                  </div>

                  <div class="text-center 1">
                    <button class="btn btn-block" style="background-color: #5f7fee;color: white" type="button">Log in</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data: () =>{
    return {
      publicPath: process.env.VUE_APP_BASE_URL
    }
  },
  props: {
    msg: String
  }
}
</script>
<style scoped>
.img {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center; }

.wrap {
  width: 100%;
  overflow: hidden;
  background: #fff;
  border-radius: 5px;
  -webkit-box-shadow: 0px 10px 34px -15px rgba(0, 0, 0, 0.24);
  -moz-box-shadow: 0px 10px 34px -15px rgba(0, 0, 0, 0.24);
  box-shadow: 0px 10px 34px -15px rgba(0, 0, 0, 0.24); }

.img, .login-wrap {
  width: 50%; }
@media (max-width: 991.98px) {
  .img, .login-wrap {
    width: 100%; } }

@media (max-width: 767.98px) {
  .wrap .img {
    height: 250px; } }

.login-wrap {
  position: relative;
  background: #fff;
}

</style>


