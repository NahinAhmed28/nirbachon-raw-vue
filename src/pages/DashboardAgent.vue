<template>
  <WrapperComponent>
    <SidebarComponent/>
  <HeaderComponent />
  <!-- start page content wrapper-->
  <div class="page-content-wrapper">
    <!-- start page content-->
    <div class="page-content">
        <div class="container" style="padding-top: 2rem">
    <div class="row">
      <div class="col-md-8" style="margin: 0 auto;">
        <h4 style="padding-top: 20px">ফলাফল জমা দিন</h4>
        <div style=" border: 0.5px solid lightgrey;">
          <div style="padding: 30px">
            <div class="row">
              <div class="col-md-12">
                <form>
                  <div class="form-group row">
                    <label for="inputEmail1" class="col-sm-2 col-form-label">আসন</label>
                    <div class="col-sm-9">
                      <select class="form-control form-control-lg" id="inputEmail1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="inputEmail2" class="col-sm-2 col-form-label">কেন্দ্র</label>
                    <div class="col-sm-9">
                      <select class="form-control form-control-lg " id="inputEmail2"
                              style="margin-bottom:5pt;">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                      </select>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <form>
                  <div class="form-group row" style="border-top: 1px solid black;padding-top: 20px  ">
                    <label for="exampleInputEmail1" class="col-sm-2 col-form-label">মোট বৈধ</label>
                    <div class="col-sm-9">
                      <input type="number" class="form-control" id="exampleInputEmail1"
                             aria-describedby="emailHelp" placeholder="">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="exampleInputEmail2" class="col-sm-2 col-form-label">মোট বাতিল</label>
                    <div class="col-sm-9">
                      <input type="number" class="form-control" id="exampleInputEmail2"
                             aria-describedby="emailHelp" placeholder="">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="exampleInputEmail3" class="col-sm-2 col-form-label">প্রদত্ত ভোট</label>
                    <div class="col-sm-9">
                      <input type="number" class="form-control" id="exampleInputEmail3"
                             aria-describedby="emailHelp" placeholder="">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="exampleInputEmail4" class="col-sm-2 col-form-label">শতকরা হার</label>
                    <div class="col-sm-9">
                      <input type="number" class="form-control" id="exampleInputEmail4"
                             aria-describedby="emailHelp" placeholder="">
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
                    <div class="col-md-2 pt-2">
                      রাজনৈতিক দল
                    </div>
                    <div class="col-md-10">
                      <div class="form-group row">
                        <label for="inputx10" class="col-sm-3 col-form-label">দলের নাম</label>
                        <div class="col-sm-8">
                          <input type="email" class="form-control" id="inputx10"
                                 aria-describedby="emailHelp" placeholder="" disabled>
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="inputx11" class="col-sm-3 col-form-label">প্রার্থীর নাম</label>
                        <div class="col-sm-8">
                          <input type="email" class="form-control" id="inputx11"
                                 aria-describedby="emailHelp" placeholder="" disabled>
                        </div>
                      </div>
                      <div class="form-group row">
                        <label class="col-sm-3 col-form-label">প্রার্থীর ছবি</label>
                        <div class="col-sm-8">
                          <img src="https://png.pngtree.com/png-clipart/20190924/original/pngtree-user-vector-avatar-png-image_4830521.jpg"
                               alt="..." style="width: 200px; height: 200px" class="img-thumbnail">
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="inputx13" class="col-sm-3 col-form-label">ভোট</label>
                        <div class="col-sm-8">
                          <input type="number" class="form-control" id="inputx13"
                                 aria-describedby="emailHelp" placeholder="">
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="form-group row">
                    <label class="col-sm-5 col-form-label"></label>
                    <div class="col-sm-7">
                      <button type="button" style="margin-left: -2rem" class="btn btn-success">জমা করুন</button>
                    </div>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="padding-top: 2rem">
      <hr/>
      <h4>পঞ্চগড় ১ আসনের ৮৪ নং কেন্দ্রের ফলাফল</h4>

      <div class="card">
        <div class="card-body">
          <div class="table-responsive">
            <table id="example2" class="table table-striped table-bordered">
              <thead>
              <tr>
                <td>কেন্দ্র</td>
                <td>শেখ মোঃ হাবিবুর রহমান</td>
                <td>আল রাশেদ</td>
                <td>মোঃ সুমন রানা</td>
                <td>ব্যারিস্টার নওশাদ</td>
                <td>মোঃ আব্দুল্লাহ</td>
                <td>মোঃ মাজহারুল</td>
                <td>মোঃ আবু সালেক</td>
                <td>সময়</td>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>-</td>
                <td>নৌকা</td>
                <td>ধানের শিষ</td>
                <td>লাঙ্গল</td>
                <td>নৌকা</td>
                <td>ধানের শিষ</td>
                <td>লাঙ্গল</td>
                <td>ধানের শিষ</td>
                <td>-</td>
              </tr>
              <tr>
                <td>সরকারি প্রাথমিক বিদ্যালয়</td>
                <td>১৯৫৭</td>
                <td>৬৯৩</td>
                <td>০২</td>
                <td>১৮১</td>
                <td>০৫</td>
                <td>২৫০</td>
                <td>০৪</td>
                <td>১২ঃ৩০ PM</td>
              </tr>
              <tr>
                <td>সরকারি প্রাথমিক বিদ্যালয়</td>
                <td>১৯৫৭</td>
                <td>৬৯৩</td>
                <td>০২</td>
                <td>১৮১</td>
                <td>০৫</td>
                <td>২৫০</td>
                <td>০৪</td>
                <td>১২ঃ৩০ PM</td>
              </tr>
              <tr>
                <td>সরকারি প্রাথমিক বিদ্যালয়</td>
                <td>১৯৫৭</td>
                <td>৬৯৩</td>
                <td>০২</td>
                <td>১৮১</td>
                <td>০৫</td>
                <td>২৫০</td>
                <td>০৪</td>
                <td>১২ঃ৩০ PM</td>
              </tr>
              <tr>
                <td>সরকারি প্রাথমিক বিদ্যালয়</td>
                <td>১৯৫৭</td>
                <td>৬৯৩</td>
                <td>০২</td>
                <td>১৮১</td>
                <td>০৫</td>
                <td>২৫০</td>
                <td>০৪</td>
                <td>১২ঃ৩০ PM</td>
              </tr>
              <tr>
                <td>সরকারি প্রাথমিক বিদ্যালয়</td>
                <td>১৯৫৭</td>
                <td>৬৯৩</td>
                <td>০২</td>
                <td>১৮১</td>
                <td>০৫</td>
                <td>২৫০</td>
                <td>০৪</td>
                <td>১২ঃ৩০ PM</td>
              </tr>
              <tr>
                <td>সরকারি প্রাথমিক বিদ্যালয়</td>
                <td>১৯৫৭</td>
                <td>৬৯৩</td>
                <td>০২</td>
                <td>১৮১</td>
                <td>০৫</td>
                <td>২৫০</td>
                <td>০৪</td>
                <td>১২ঃ৩০ PM</td>
              </tr>
              <tr>
                <td>সরকারি প্রাথমিক বিদ্যালয়</td>
                <td>১৯৫৭</td>
                <td>৬৯৩</td>
                <td>০২</td>
                <td>১৮১</td>
                <td>০৫</td>
                <td>২৫০</td>
                <td>০৪</td>
                <td>১২ঃ৩০ PM</td>
              </tr>
              <tr>
                <td>সরকারি প্রাথমিক বিদ্যালয়</td>
                <td>১৯৫৭</td>
                <td>৬৯৩</td>
                <td>০২</td>
                <td>১৮১</td>
                <td>০৫</td>
                <td>২৫০</td>
                <td>০৪</td>
                <td>১২ঃ৩০ PM</td>
              </tr>
              <tr>
                <td>সরকারি প্রাথমিক বিদ্যালয়</td>
                <td>১৯৫৭</td>
                <td>৬৯৩</td>
                <td>০২</td>
                <td>১৮১</td>
                <td>০৫</td>
                <td>২৫০</td>
                <td>০৪</td>
                <td>১২ঃ৩০ PM</td>
              </tr>
              <tr>
                <td>সরকারি প্রাথমিক বিদ্যালয়</td>
                <td>১৯৫৭</td>
                <td>৬৯৩</td>
                <td>০২</td>
                <td>১৮১</td>
                <td>০৫</td>
                <td>২৫০</td>
                <td>০৪</td>
                <td>১২ঃ৩০ PM</td>
              </tr>
              <tr>
                <td>সরকারি প্রাথমিক বিদ্যালয়</td>
                <td>১৯৫৭</td>
                <td>৬৯৩</td>
                <td>০২</td>
                <td>১৮১</td>
                <td>০৫</td>
                <td>২৫০</td>
                <td>০৪</td>
                <td>১২ঃ৩০ PM</td>
              </tr>
              <tr>
                <td>সরকারি প্রাথমিক বিদ্যালয়</td>
                <td>১৯৫৭</td>
                <td>৬৯৩</td>
                <td>০২</td>
                <td>১৮১</td>
                <td>০৫</td>
                <td>২৫০</td>
                <td>০৪</td>
                <td>১২ঃ৩০ PM</td>
              </tr>
              <tr>
                <td>সরকারি প্রাথমিক বিদ্যালয়</td>
                <td>১৯৫৭</td>
                <td>৬৯৩</td>
                <td>০২</td>
                <td>১৮১</td>
                <td>০৫</td>
                <td>২৫০</td>
                <td>০৪</td>
                <td>১২ঃ৩০ PM</td>
              </tr>
              <tr>
                <td>সরকারি প্রাথমিক বিদ্যালয়</td>
                <td>১৯৫৭</td>
                <td>৬৯৩</td>
                <td>০২</td>
                <td>১৮১</td>
                <td>০৫</td>
                <td>২৫০</td>
                <td>০৪</td>
                <td>১২ঃ৩০ PM</td>
              </tr>
              <tr>
                <td>সরকারি প্রাথমিক বিদ্যালয়</td>
                <td>১৯৫৭</td>
                <td>৬৯৩</td>
                <td>০২</td>
                <td>১৮১</td>
                <td>০৫</td>
                <td>২৫০</td>
                <td>০৪</td>
                <td>১২ঃ৩০ PM</td>
              </tr>
              <tr>
                <td>সরকারি প্রাথমিক বিদ্যালয়</td>
                <td>১৯৫৭</td>
                <td>৬৯৩</td>
                <td>০২</td>
                <td>১৮১</td>
                <td>০৫</td>
                <td>২৫০</td>
                <td>০৪</td>
                <td>১২ঃ৩০ PM</td>
              </tr>
              <tr>
                <td>সরকারি প্রাথমিক বিদ্যালয়</td>
                <td>১৯৫৭</td>
                <td>৬৯৩</td>
                <td>০২</td>
                <td>১৮১</td>
                <td>০৫</td>
                <td>২৫০</td>
                <td>০৪</td>
                <td>১২ঃ৩০ PM</td>
              </tr>
              <tr>
                <td>সরকারি প্রাথমিক বিদ্যালয়</td>
                <td>১৯৫৭</td>
                <td>৬৯৩</td>
                <td>০২</td>
                <td>১৮১</td>
                <td>০৫</td>
                <td>২৫০</td>
                <td>০৪</td>
                <td>১২ঃ৩০ PM</td>
              </tr>
              <tr>
                <td>সরকারি প্রাথমিক বিদ্যালয়</td>
                <td>১৯৫৭</td>
                <td>৬৯৩</td>
                <td>০২</td>
                <td>১৮১</td>
                <td>০৫</td>
                <td>২৫০</td>
                <td>০৪</td>
                <td>১২ঃ৩০ PM</td>
              </tr>

              </tbody>
            </table>
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
  name: 'DashboardAgent',
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


