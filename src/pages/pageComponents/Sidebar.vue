<template>
<div>
  <!--start sidebar -->

  <aside class="sidebar-wrapper" data-simplebar="true">
    <div class="sidebar-header">
      <RouterLink to="/">

        <img src="/custom/design/img/eru-logo.png" class="logo-icon" alt="logo icon">
      </RouterLink>
      <div>

      </div>
      <div class="toggle-icon ms-auto"><ion-icon name="menu-sharp"></ion-icon>
      </div>
    </div>
    <!--navigation-->
    <ul class="metismenu" id="menu">
      <li>
        <a href="javascript:;" class="has-arrow">
          <div class="parent-icon"><ion-icon name="home-sharp"></ion-icon>
          </div>
          <div class="menu-title">ম্যাপস</div>
        </a>
        <ul>
          <li> <a href="#"><ion-icon name="ellipse-outline"></ion-icon>বিভাগ</a>
          </li>
          <li> <a href="#"><ion-icon name="ellipse-outline"></ion-icon>জেলা</a>
          </li>
          <li> <a href="#"><ion-icon name="ellipse-outline"></ion-icon>আসন</a>
          </li>


        </ul>
      </li>
      <li>
        <a href="javascript:;" class="has-arrow">
          <div class="parent-icon"><ion-icon name="bag-handle-sharp"></ion-icon>
          </div>
          <div class="menu-title">অন্যান্য তথ্য</div>
        </a>
        <ul>
          <li><a href="#"><ion-icon name="ellipse-outline"></ion-icon>ভোটের ফলাফল</a>
          </li>
          <li> <a href="#"><ion-icon name="ellipse-outline"></ion-icon>আসন</a>
          </li>
          <li> <a href="#"><ion-icon name="ellipse-outline"></ion-icon>জেলা</a>
          </li>
          <li> <a href="#"><ion-icon name="ellipse-outline"></ion-icon>বিভাগ</a>
          </li>
          <li><a href="#"><ion-icon name="ellipse-outline"></ion-icon>কেন্দ্র</a>
          </li>
          <li><a href="#"><ion-icon name="ellipse-outline"></ion-icon>দলের নাম</a>
          </li>
          <li><a href="#"><ion-icon name="ellipse-outline"></ion-icon>রাজনৈতিক দলের তথ্য</a>
          </li>
          <li><a href="#"><ion-icon name="ellipse-outline"></ion-icon>প্রার্থীর তথ্য</a>
          </li>
        </ul>
      </li>

    </ul>
    <!--end navigation-->
  </aside>

  <!--end sidebar -->
</div>
</template>

<script>
export default {
  name: "SidebarComponent",
}
</script>

