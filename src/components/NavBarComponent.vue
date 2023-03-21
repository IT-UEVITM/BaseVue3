<template>
  <nav class="top-right open">
    <a class="disc l0">
      <div>sdsd</div>
    </a>
    <a class="disc l1">
      <div>Messages</div>
    </a>
    <a class="disc l2">
      <div>OVA</div>
    </a>
    <a class="disc l3" href="/elementos">
      <div>Elementos</div>
    </a>
    <a class="disc l4" href="/actividades">
      <div>Actividades</div>
    </a>
    <a class="disc l5 toggle"> Menú </a>
  </nav>
</template>

<script>
export default {
  name: 'NavBarComponent',
  props: {
    msg: {}
  },
  mounted() {
    const toggle = document.querySelectorAll('.toggle')[0]
    const nav = document.querySelectorAll('nav')[0]
    const toggleOpenText = 'Menú'
    const toggleCloseText = 'Cerrar'

    toggle.addEventListener(
      'click',
      function () {
        nav.classList.toggle('open')

        if (nav.classList.contains('open')) {
          toggle.innerHTML = toggleCloseText
        } else {
          toggle.innerHTML = toggleOpenText
        }
      },
      false
    )

    setTimeout(function () {
      nav.classList.toggle('open')
    }, 800)
  }
}
</script>
