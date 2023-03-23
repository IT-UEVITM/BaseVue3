<template>
  <div class="menu-container" id="toggle">
    <a href="#" class="menu icon"
      ><i class="fa fa-bars" aria-hidden="true"></i
    ></a>
  </div>
  <div class="overlay" id="overlay">
    <nav class="overlay-menu">
      <ul>
        <li><a href="/actividades">Actividades</a></li>
        <li><a href="/elementos">Elementos</a></li>
        <li><a href="/OVAs">OVA</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavBarComponent',
  data() {
    return {
      iconoMenu: null
    }
  },
  props: {
    msg: {}
  },
  mounted() {
    const menu = document.querySelector('#toggle')
    const menuItems = document.querySelector('#overlay')
    const menuContainer = document.querySelector('.menu-container')
    const menuIcon = document.querySelector('i')

    function toggleMenu(e) {
      menuItems.classList.toggle('open')
      menuContainer.classList.toggle('full-menu')
      menuIcon.classList.toggle('fa-bars')
      menuIcon.classList.add('fa-times')
      e.preventDefault()
    }

    menu.addEventListener('click', toggleMenu, false)
  },
  methods: {}
}
</script>
