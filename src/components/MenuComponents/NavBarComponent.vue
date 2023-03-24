<template>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-mainbg">
    <!-- Logo -->
    <a class="navbar-brand navbar-logo" href="#">Build Website</a>
    <!-- Collapse Button -->
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars text-white"></i>
    </button>
    <!-- Links -->
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <!-- For Styling -->
        <div class="hori-selector">
          <div class="left"></div>
          <div class="right"></div>
        </div>
        <!-- Nav Links -->
        <!-- <li class="nav-item">
          <a class="nav-link" href="#Dashboard">
            <i class="fas fa-tachometer-alt"> </i>Dashboard
          </a>
        </li> -->
        <li class="nav-item">
          <router-link to="/" class="nav-item nav-link active" exact>
            <i class="fas fa-tachometer-alt"> </i>Inicio
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/actividades" class="nav-item nav-link" exact>
            <i class="fas fa-pencil-alt"></i> Actividades
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/elementos" class="nav-item nav-link" exact>
            <i class="fas fa-box"></i>Elementos
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'NavBarComponent',
  props: {
    msg: {}
  },
  methods: {},
  mounted() {
    /* eslint-disable no-unused-vars */
    function test() {
      const tabsNewAnim = $('#navbarSupportedContent')
      // eslint-disable-next-line no-undef
      const selectorNewAnim = $('#navbarSupportedContent').find('li').length
      const activeItemNewAnim = tabsNewAnim.find('.active')
      const activeWidthNewAnimHeight = activeItemNewAnim.innerHeight()
      const activeWidthNewAnimWidth = activeItemNewAnim.innerWidth()
      const itemPosNewAnimTop = activeItemNewAnim.position()
      const itemPosNewAnimLeft = activeItemNewAnim.position()
      $('.hori-selector').css({
        top: itemPosNewAnimTop.top + 'px',
        left: itemPosNewAnimLeft.left + 'px',
        height: activeWidthNewAnimHeight + 'px',
        width: activeWidthNewAnimWidth + 'px'
      })
      $('#navbarSupportedContent').on('click', 'li a', function (e) {
        $('#navbarSupportedContent ul li a').removeClass('active')
        $(this).addClass('active')
        const activeWidthNewAnimHeight = $(this).innerHeight()
        const activeWidthNewAnimWidth = $(this).innerWidth()
        const itemPosNewAnimTop = $(this).position()
        const itemPosNewAnimLeft = $(this).position()
        $('.hori-selector').css({
          top: itemPosNewAnimTop.top + 'px',
          left: itemPosNewAnimLeft.left + 'px',
          height: activeWidthNewAnimHeight + 'px',
          width: activeWidthNewAnimWidth + 'px'
        })
      })
    }
    $(document).ready(function () {
      setTimeout(function () {
        test()
      })
    })
    $(window).on('resize', function () {
      setTimeout(function () {
        test()
      }, 500)
    })
    $('.navbar-toggler').click(function () {
      setTimeout(function () {
        test()
      })
    })
  }
}
</script>
