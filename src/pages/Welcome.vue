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

            <div class="col-md-4">

              <div class="card">
                <h5 class="card-title "
                    style="background:#5f57c9;color: white; margin-top: 0px;padding: 10px;font-weight: bold ">
                  <form class="form-inline" action="result_detail.html">
                    <input class="form-control  ml-auto mr-auto" id="search" type="search"
                           placeholder="কেন্দ্রের নাম" aria-label="Search">
                  </form>
                </h5>

                <div class="card-body">
                  <form action="result_detail.html">
                    <div class="form-group row">
                      <label for="input41" class="col-sm-3 col-form-label">বিভাগ</label>
                      <div class="col-sm-9">
                        <select class="form-control form-control" id="input41">
                          <option>1</option>
                          <option>1</option>
                          <option>1</option>
                          <option>1</option>
                        </select>
                      </div>
                    </div>
                    <div class="form-group row">
                      <label for="input42" class="col-sm-3 col-form-label">জেলা</label>
                      <div class="col-sm-9">
                        <select class="form-control form-control" id="input42">
                          <option>1</option>
                          <option>1</option>
                          <option>1</option>
                          <option>1</option>
                        </select>
                      </div>
                    </div>
                    <div class="form-group row">
                      <label for="input43" class="col-sm-3 col-form-label">আসন</label>
                      <div class="col-sm-9">
                        <select class="form-control form-control" id="input43">
                          <option>1</option>
                          <option>1</option>
                          <option>1</option>
                          <option>1</option>
                        </select>
                      </div>
                    </div>
                    <div class="form-group row">
                      <label for="input44" class="col-sm-3 col-form-label">ভোট কেন্দ্র</label>
                      <div class="col-sm-9">
                        <select class="form-control form-control" id="input44">
                          <option>1</option>
                          <option>1</option>
                          <option>1</option>
                          <option>1</option>
                        </select>
                      </div>
                    </div>
                    <div class="form-group row" style="margin-top: -1rem">
                      <label for="input44" class="col-sm-3 col-form-label"></label>
                      <div class="col-sm-9">
                        <button class="btn btn-block mb-3 mt-4"
                                style="background-color: #5f7fee;color: white" type="button">ফলাফল দেখুন
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>


              <div class="card" style="margin-top: 1rem;">
                <h5 class="card-title"
                    style="background:mediumpurple;color: white; margin-top: 0px;padding: 10px;font-weight: bold">
                  <span class="glyphicon glyphicon-info-sign"></span>সর্বশেষ প্রকাশিত ফলাফল</h5>
                <div class="card-body">
                  <ul class="nav nav-pills nav-stacked" style="height:150px; overflow-y: scroll;">
                    <li class="nav-item"><a class="nav-link" href="result_detail.html">ঢাকা আসন নাম্বার ১ এর ৮৩ নং কেন্দ্রের ফলাফল </a></li>
                    <li class="nav-item"><a class="nav-link" href="result_detail.html">ঢাকা আসন নাম্বার ১ এর ৮৩ নং কেন্দ্রের ফলাফল</a></li>
                    <li class="nav-item"><a class="nav-link" href="result_detail.html">ঢাকা আসন নাম্বার ১ এর ৮৩ নং কেন্দ্রের ফলাফল</a></li>
                    <li class="nav-item"><a class="nav-link" href="result_detail.html">ঢাকা আসন নাম্বার ১ এর ৮৩ নং কেন্দ্রের ফলাফল</a></li>
                    <li class="nav-item"><a class="nav-link" href="result_detail.html">ঢাকা আসন নাম্বার ১ এর ৮৩ নং কেন্দ্রের ফলাফল</a></li>
                    <li class="nav-item"><a class="nav-link" href="result_detail.html">ঢাকা আসন নাম্বার ১ এর ৮৩ নং কেন্দ্রের ফলাফল</a></li>
                    <li class="nav-item"><a class="nav-link" href="result_detail.html">ঢাকা আসন নাম্বার ১ এর ৮৩ নং কেন্দ্রের ফলাফল</a></li>
                    <li class="nav-item"><a class="nav-link" href="result_detail.html">ঢাকা আসন নাম্বার ১ এর ৮৩ নং কেন্দ্রের ফলাফল</a></li>
                    <li class="nav-item"><a class="nav-link" href="result_detail.html">ঢাকা আসন নাম্বার ১ এর ৮৩ নং কেন্দ্রের ফলাফল</a></li>
                    <li class="nav-item"><a class="nav-link" href="result_detail.html">ঢাকা আসন নাম্বার ১ এর ৮৩ নং কেন্দ্রের ফলাফল</a></li>
                    <li class="nav-item"><a class="nav-link" href="result_detail.html">ঢাকা আসন নাম্বার ১ এর ৮৩ নং কেন্দ্রের ফলাফল</a></li>
                    <li class="nav-item"><a class="nav-link" href="result_detail.html">ঢাকা আসন নাম্বার ১ এর ৮৩ নং কেন্দ্রের ফলাফল</a></li>
                    <li class="nav-item"><a class="nav-link" href="result_detail.html">ঢাকা আসন নাম্বার ১ এর ৮৩ নং কেন্দ্রের ফলাফল</a></li>
                    <li class="nav-item"><a class="nav-link" href="result_detail.html">ঢাকা আসন নাম্বার ১ এর ৮৩ নং কেন্দ্রের ফলাফল</a></li>
                    <li class="nav-item"><a class="nav-link" href="result_detail.html">ঢাকা আসন নাম্বার ১ এর ৮৩ নং কেন্দ্রের ফলাফল</a></li>
                    <li class="nav-item"><a class="nav-link" href="result_detail.html">ঢাকা আসন নাম্বার ১ এর ৮৩ নং কেন্দ্রের ফলাফল</a></li>
                    <li class="nav-item"><a class="nav-link" href="result_detail.html">ঢাকা আসন নাম্বার ১ এর ৮৩ নং কেন্দ্রের ফলাফল</a></li>
                    <li class="nav-item"><a class="nav-link" href="result_detail.html">ঢাকা আসন নাম্বার ১ এর ৮৩ নং কেন্দ্রের ফলাফল</a></li>
                    <li class="nav-item"><a class="nav-link" href="result_detail.html">ঢাকা আসন নাম্বার ১ এর ৮৩ নং কেন্দ্রের ফলাফল</a></li>
                    <li class="nav-item"><a class="nav-link" href="result_detail.html">ঢাকা আসন নাম্বার ১ এর ৮৩ নং কেন্দ্রের ফলাফল</a></li>
                    <li class="nav-item"><a class="nav-link" href="result_detail.html">ঢাকা আসন নাম্বার ১ এর ৮৩ নং কেন্দ্রের ফলাফল</a></li>
                    <li class="nav-item"><a class="nav-link" href="result_detail.html">ঢাকা আসন নাম্বার ১ এর ৮৩ নং কেন্দ্রের ফলাফল</a></li>
                    <li class="nav-item"><a class="nav-link" href="result_detail.html">ঢাকা আসন নাম্বার ১ এর ৮৩ নং কেন্দ্রের ফলাফল</a></li>
                    <li class="nav-item"><a class="nav-link" href="result_detail.html">ঢাকা আসন নাম্বার ১ এর ৮৩ নং কেন্দ্রের ফলাফল</a></li>
                  </ul>
                </div>
              </div>

              <div>
                <div class="card-body">
                  <div class="row">
                    <div class="col-md-6" style="margin-left: -3rem">
                      <div id="chart2"></div>
                    </div>
                    <div class="col-md-6" style="margin-left: -1rem">
                      <div id="chart3"></div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

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
import sideb from "@/pages/sidebar";



export default {
  name: 'LandingWelcome',
  props: {
    msg: String
  },components: {

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
 /*.my-st{*/
 /*  display: flex;*/
 /*  justify-content: space-around;*/
 /*}*/
</style>
