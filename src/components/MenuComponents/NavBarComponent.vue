<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Logo ITM</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        id="btnCloseNavBar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li
            class="nav-item navBarItem"
            id="menuLink-1"
            @click="activeNavbarItem(1)"
          >
            <router-link to="/" class="nav-item nav-link" exact>
              <i class="fas navBarItemIco fa-tachometer-alt"> </i> Inicio
            </router-link>
          </li>
          <li
            class="nav-item navBarItem"
            id="menuLink-2"
            @click="activeNavbarItem(2)"
          >
            <router-link to="/actividades" class="nav-item nav-link" exact>
              <i class="fas navBarItemIco fa-pencil-alt"></i> Actividades
            </router-link>
          </li>
          <li
            class="nav-item navBarItem"
            id="menuLink-3"
            @click="activeNavbarItem(3)"
          >
            <router-link to="/elementos" class="nav-item nav-link" exact>
              <i class="fas navBarItemIco fa-box"></i> Elementos
            </router-link>
          </li>
          <li
            class="nav-item navBarItem"
            id="menuLink-4"
            @click="activeNavbarItem(4)"
          >
            <router-link to="/OVAs" class="nav-item nav-link" exact>
              <i class="fas fa-book-open"></i> OVAs
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
// import $ from 'jquery'
import { activeNavbarItem } from '../../assets/js/scripts'

export default {
  name: 'NavBarComponent',
  props: {
    msg: {}
  },
  methods: {
    activeNavbarItem
  },
  mounted() {}
}
</script>
