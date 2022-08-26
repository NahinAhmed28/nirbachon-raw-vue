<template>
  <WrapperComponent>
    <SidebarComponent/>
  <HeaderComponent />
  <!-- start page content wrapper-->
  <div class="page-content-wrapper">
    <!-- start page content-->
    <div class="col-md-8">
      <div class="container">
        <h2 style="padding-top: 2rem">ভোটের ফলাফল জমা দিন</h2>
        <div style="border: 0.5px solid lightgrey;" class="rounded">
          <div style="padding: 1rem">
            <div class="row">
              <div class="col-md-12" style="font-family: monospace">
                <form action="center_result.html">
                  <div class="form-group row">
                    <label for="inputx1" class="col-sm-4 col-form-label">বিভাগ</label>
                    <div class="col-sm-7">
                      <select class="form-control form-control-lg" id="inputx1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="inputx2" class="col-sm-4 col-form-label">জেলা</label>
                    <div class="col-sm-7">
                      <select class="form-control form-control-lg " id="inputx2"
                              style="margin-bottom:5pt;">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="inputx3" class="col-sm-4 col-form-label">আসন</label>
                    <div class="col-sm-7">
                      <select class="form-control form-control-lg " id="inputx3"
                              style="margin-bottom:5pt;">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="inputx4" class="col-sm-4 col-form-label">কেন্দ্র</label>
                    <div class="col-sm-7">
                      <select class="form-control form-control-lg " id="inputx4"
                              style="margin-bottom:5pt;">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="inputx5" class="col-sm-4 col-form-label">মোট ভোটার</label>
                    <div class="col-sm-7">
                      <input type="number" class="form-control" id="inputx5"
                             aria-describedby="emailHelp" placeholder="" style="margin-bottom:5pt;">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="inputx6" class="col-sm-4 col-form-label">মোট বৈধ</label>
                    <div class="col-sm-7">
                      <input type="email" class="form-control" id="inputx6"
                             aria-describedby="emailHelp" placeholder="" disabled>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="inputx7" class="col-sm-4 col-form-label">মোট বাতিল</label>
                    <div class="col-sm-7">
                      <input type="email" class="form-control" id="inputx7"
                             aria-describedby="emailHelp" placeholder="" disabled>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="inputx8" class="col-sm-4 col-form-label">প্রদত্ত ভোট</label>
                    <div class="col-sm-7">
                      <input type="email" class="form-control" id="inputx8"
                             aria-describedby="emailHelp" placeholder="" disabled>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="inputx9" class="col-sm-4 col-form-label">শতকরা হার</label>
                    <div class="col-sm-7">
                      <input type="email" class="form-control" id="inputx9"
                             aria-describedby="emailHelp" placeholder="" disabled>
                    </div>
                  </div>
                  <!-- Default radio -->
                  <div class="row">
                    <div class="col-md-4">

                    </div>

                    <div class="col-md-7 pb-3">
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault"
                               id="flexRadioDefault1"/>
                        <label class="form-check-label" for="flexRadioDefault1">অফিসিয়াল
                          ফলাফল</label>
                      </div>


                      <!-- Default checked radio -->

                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault"
                               id="flexRadioDefault2" checked/>
                        <label class="form-check-label" for="flexRadioDefault2">বেসরকারি
                          ফলাফল</label>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-4">
                      রাজনৈতিক দল
                    </div>
                    <div class="col-md-7">
                      <div class="form-group row">
                        <label for="inputx10" class="col-sm-2 col-form-label">দলের নাম</label>
                        <div class="col-sm-10">
                          <input type="email" class="form-control" id="inputx10"
                                 aria-describedby="emailHelp" placeholder="" disabled>
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="inputx11" class="col-sm-2 col-form-label">প্রার্থীর নাম</label>
                        <div class="col-sm-10">
                          <input type="email" class="form-control" id="inputx11"
                                 aria-describedby="emailHelp" placeholder="" disabled>
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="inputx12" class="col-sm-2 col-form-label">প্রার্থীর ছবি</label>
                        <div class="col-sm-10">
                          <input type="email" class="form-control" id="inputx12"
                                 aria-describedby="emailHelp" placeholder="" disabled>
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="inputx13" class="col-sm-2 col-form-label">ভোট</label>
                        <div class="col-sm-10">
                          <input type="number" class="form-control" id="inputx13"
                                 aria-describedby="emailHelp" placeholder="">
                        </div>
                      </div>
                    </div>
                  </div>
                  <!--                <div class="text-aligin-center ">-->
                  <!--                  <button class="btn  py-4 mb-3" style="background-color: #5f7fee;color: white; " type="button">-->
                  <!--                    জমা দিন-->
                  <!--                  </button>-->
                  <!--                </div>-->
                  <div class="form-group row">
                    <label for="inputx13" class="col-sm-5 col-form-label"></label>
                    <div class="col-sm-7">
                      <button type="submit" style="margin-left: 1rem" class="btn btn-success rounded">জমা
                        করুন
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </WrapperComponent>
</template>


<script>
import HeaderComponent from "@/pages/pageComponents/Header";
import WrapperComponent from "@/pages/pageComponents/Wrapper";
import SidebarComponent from "@/pages/pageComponents/Sidebar";
import sideb from "@/pages/sidebar";

export default {
  name: 'DashboardStaffPage',
  props: {
    msg: String
  },
  components: {
    WrapperComponent,
    SidebarComponent,
    HeaderComponent,
  },
  mounted() {
    sideb()
  }
}
</script>


