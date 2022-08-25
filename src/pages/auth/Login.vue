<template>
  <div>

    <section>
      <div class="container" style="padding-top: 12rem">
        <div class="row justify-content-center">
          <div class="col-md-12 col-lg-10">
            <div class="wrap d-md-flex">
<!--              <div class="img"  :style="{ backgroundImage: `url(custom/design/img/Capture.JPG)` }"></div>-->
              <div  class="img" :style="{'background-image': 'url(/custom/design/img/Capture.JPG)'}"></div>
              <div class="login-wrap p-4 p-md-5">
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
      // publicPath: process.env.VUE_APP_BASE_URL
      // publicPath: '/public/'
    }
  },
  props: {
    msg: String
  }
}
</script>



