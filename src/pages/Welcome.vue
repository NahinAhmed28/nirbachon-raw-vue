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

                      <apexchart type="pie"  :options="chartOptionsS1" :colors="colors" :series="series"></apexchart>


                      <apexchart type="pie"  :options="chartOptionsS2" :colors="colors2" :series="series2"></apexchart>

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

import VueApexCharts from "vue3-apexcharts";

export default {
  data: function() {
    return {
      series:  [2.3, 3.1, 4.0, 10.1],
      colors: [ // this array contains different color code for each data
        "#33b2df",
        "#546E7A",
        "#d4526e",
        "#13d8aa",
        "#A5978B",
        "#2b908f",
        "#f9a3a4",
        "#90ee7e",
        "#f48024",
        "#69d2e7"
      ],
      chartOptionsS1: {
        chart: {
          width: 100,
          type: 'pie',
        },
        legend: {
          position: 'bottom'
        },
        labels: ['আওয়ামীলীগ', 'বিএনপি', 'জাতীয় পার্টি', 'অন্যান্য'],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },
      series2: [20, 40, 40],
      colors2:['#F44336', '#E91E63', '#9C27B0','#69d2e7'],
      chartOptionsS2: {
        chart: {
          width: 200,
          type: 'pie',
        },
        legend: {
          position: 'bottom'
        },
        labels: ['প্রকাশিত কেন্দ্র', 'স্থাপিত কেন্দ্র', 'অপ্রকাশিত কেন্দ্র'],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 280
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },

    }
  },
  name: 'LandingWelcome',
  props: {
    msg: String
  },components: {

    WrapperComponent,
    SidebarComponent,
    HeaderComponent,
    DivisionPage,
    apexchart: VueApexCharts,
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
