<template>
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

      <div class="card" style="background-color: aliceblue">
        <div class="card-header">
          <div class="row">
            <div class="col-8"></div>
            <div class="col-4">
              <div class="input-group">
                <div class="input-group-prepend">
                  <div class="input-group-text" id="btnGroupAddon2">search</div>
                </div>
                <input type="text" style="background-color: aliceblue;" class="form-control"
                       placeholder="Input group example" aria-label="Input group example"
                       aria-describedby="btnGroupAddon2">
              </div>
            </div>
          </div>
        </div>
        <table class="table-striped">
          <tr>
            <td rowspan="2" style="width: 30%">কেন্দ্র</td>
            <td>শেখ মোঃ হাবিবুর রহমান</td>
            <td>আল রাশেদ</td>
            <td>মোঃ সুমন রানা</td>
            <td>ব্যারিস্টার নওশাদ</td>
            <td>মোঃ আব্দুল্লাহ</td>
            <td>মোঃ মাজহারুল</td>
            <td>মোঃ আবু সালেক</td>
            <td rowspan="2" style="width: 15%">সময়</td>
          </tr>
          <tr>
            <td>নৌকা</td>
            <td>ধানের শিষ</td>
            <td>লাঙ্গল</td>
            <td>নৌকা</td>
            <td>ধানের শিষ</td>
            <td>লাঙ্গল</td>
            <td>ধানের শিষ</td>
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
        </table>
        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-end">
            <li class="page-item disabled">
              <a class="page-link" href="#" tabindex="-1">Previous</a>
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
              <a class="page-link" href="#">Next</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'DashboardPage',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.sidebarFixed{
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: whitesmoke;
  overflow-x: hidden;
  padding-top: 40px;
  padding-right: 0px !important;

}
.sidebarFixed a{
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 16px;
  color: #4941be;
  display: block;
  text-align: left;
}
.sidebarFixed a:hover {
  color: #8782ce;
  text-decoration: none;
}
.list-group-item{
  background-color: transparent !important;
  border-right: none !important
}

.list-group-item:hover {
  background-color: rgba(224, 208, 208, 0.76) !important;

}

</style>
