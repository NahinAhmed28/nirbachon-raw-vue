<template>
<div>
  <!--start sidebar -->

  <aside class="sidebar-wrapper" data-simplebar="true">
    <div class="sidebar-header">
      <div>
        <img src="/custom/design/img/eru-logo.png" class="logo-icon" alt="logo icon">
      </div>
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
          <div class="menu-title">Maps</div>
        </a>
        <ul>
          <li> <a href="#"><ion-icon name="ellipse-outline"></ion-icon>আসন</a>
          </li>
          <li> <a href="#"><ion-icon name="ellipse-outline"></ion-icon>জেলা</a>
          </li>
          <li> <a href="#"><ion-icon name="ellipse-outline"></ion-icon>বিভাগ</a>
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
  name: "SidebarComponent"
}
</script>

