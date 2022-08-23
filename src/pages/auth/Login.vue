<template>
  <div
      class="
      d-flex
      flex-column flex-column-fluid
      bgi-position-y-bottom
      position-x-center
      bgi-no-repeat bgi-size-contain bgi-attachment-fixed
    "
      style="background-image: url('public/illustrations/sketchy-1/14.png'); background-color: rgba(220,220,229,0.75)"
  >
    <div class="container" style="padding-top: 15%" >
      <div class="row justify-content-center">
        <div class="col-md-12 col-lg-10">
          <div class="wrap d-md-flex">
            <div class="img" style="background-image: url('public/custom/BdDigitalImage.JPG');"></div>
            <div class="login-wrap p-4 p-md-5">

              <form style="font-family: Arial, Baskerville, monospace; padding: 20%" action="#">
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
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
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


