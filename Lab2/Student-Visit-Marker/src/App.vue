<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { ref } from 'vue';
import {logout, subscribeAuthChange } from "./assets/firebase-js/auth";
import {toggleBarEvent} from "./assets/template/js/slidebar";

const isLogin = ref(false), username = ref(""), photo = ref("./src/assets/user-1.png");

const logoutUser = ()=>{
  logout().then(()=>{
    window.location.reload();
  }).catch(err=>console.log(err));
};

subscribeAuthChange((user)=>{
  isLogin.value = user?true:false;

  if(user){
    username.value = user.displayName;

    if(user.photoURL){
      photo.value = user.photoURL;
    }
  }
});

</script>

<template>
  <div class="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
  data-sidebar-position="fixed" data-header-position="fixed">
    <!--  Body Wrapper -->
  
  <!-- Sidebar Start -->
  <aside class="left-sidebar">
    <!-- Sidebar scroll-->
    <div>
      <div class="brand-logo d-flex align-items-center justify-content-between">
        <RouterLink to="/" class="text-nowrap logo-img">
          <img src="./assets/logo.png" style="width: 100%;" alt="logo" />
        </RouterLink>
        <div class="close-btn d-xl-none d-block sidebartoggler cursor-pointer" id="sidebarCollapse">
          <i class="ti ti-x fs-8"></i>
        </div>
      </div>
      <!-- Sidebar navigation-->
      <nav class="sidebar-nav scroll-sidebar" data-simplebar="">
        <ul id="sidebarnav" class="sidebar-nav">
          <li v-if="isLogin">
            <span><img :src="photo" alt="" width="35" height="35" class="rounded-circle mr-1"></span>
            <u class="hide-menu">{{ username }}</u>
          </li>
          <li class="nav-small-cap">
            <i class="ti ti-dots nav-small-cap-icon fs-4"></i>
            <span class="hide-menu">Home</span>
          </li>
          <li class="sidebar-item hide-btn">
            <RouterLink class="sidebar-link" to="/" aria-expanded="false">
              <span>
                <i class="ti ti-layout-dashboard"></i>
              </span>
              <span class="hide-menu">Dashboard</span>
            </RouterLink>
          </li>

          <div>
            <li class="nav-small-cap">
              <i class="ti ti-dots nav-small-cap-icon fs-4"></i>
              <span class="hide-menu">Menu</span>
            </li>
            <li class="sidebar-item hide-btn" v-if="false">
              <RouterLink class="sidebar-link" to="/saves" aria-expanded="false">
                <span>
                  <i class="ti ti-bookmark"></i>
                </span>
                <span class="hide-menu">Saves</span>
              </RouterLink>
            </li>
            <li class="sidebar-item hide-btn" v-if="isLogin">
              <RouterLink class="sidebar-link" to="/images" aria-expanded="false">
                <span>
                  <i class="ti ti-cards"></i>
                </span>
                <span class="hide-menu" @click="event=>toggleBarEvent(event.target)">Images</span>
              </RouterLink>
            </li>
            <li class="sidebar-item hide-btn" v-if="isLogin">
              <RouterLink class="sidebar-link" to="/settings" aria-expanded="false">
                <span>
                  <i class="ti ti-adjustments-alt"></i>
                </span>
                <span class="hide-menu" @click="event=>toggleBarEvent(event.target)">Settings</span>
              </RouterLink>
            </li>
            <li class="sidebar-item hide-btn">
              <RouterLink class="sidebar-link" to="/about" aria-expanded="false">
                <span>
                  <i class="ti ti-alert-circle"></i>
                </span>
                <span class="hide-menu">About</span>
              </RouterLink>
            </li>
            <li class="sidebar-item hide-btn">
              <RouterLink class="sidebar-link" to="/help" aria-expanded="false">
                <span>
                  <i class="ti ti-help"></i>
                </span>
                <span class="hide-menu">Help</span>
              </RouterLink>
            </li>
            <li class="sidebar-item hide-btn">
              <RouterLink class="sidebar-link" to="/privacy" aria-expanded="false">
                <span>
                  <i class="ti ti-lock-square"></i>
                </span>
                <span class="hide-menu">Privacy</span>
              </RouterLink>
            </li>
            <div v-if="isLogin">
              <li class="nav-small-cap" >
              <i class="ti ti-dots nav-small-cap-icon fs-4"></i>
              <span class="hide-menu">Exit</span>
            </li>
            <li class="sidebar-item hide-btn">
              <a class="sidebar-link" href="/login" aria-expanded="false">
                <span>
                  <i class="ti ti-logout"></i>
                </span>
                <span class="hide-menu" @click="logoutUser">Logout</span>
              </a>
            </li>
            </div>
          </div>
          <div v-if="!isLogin">
            <li class="nav-small-cap">
              <i class="ti ti-dots nav-small-cap-icon fs-4"></i>
              <span class="hide-menu">Account</span>
            </li>
            <li class="sidebar-item hide-btn">
              <a class="sidebar-link" href="/login" aria-expanded="false">
                <span>
                  <i class="ti ti-login"></i>
                </span>
                <span class="hide-menu" @click="change">Sign In</span>
              </a>
            </li>
            <li class="sidebar-item hide-btn">
              <a class="sidebar-link" href="/register" aria-expanded="false">
                <span>
                  <i class="ti ti-user"></i>
                </span>
                <span class="hide-menu">Sign Up</span>
              </a>
            </li>
          </div>

        </ul>
        
      </nav>
      <!-- End Sidebar navigation -->
    </div>
    <!-- End Sidebar scroll-->
  </aside>
  <!--  Sidebar End -->
  <!--  Main wrapper -->
  <div class="body-wrapper">
      <!--  Header Start -->
      <header class="app-header" style="background-color: rgba(0, 0, 0, 0);">
        <nav class="navbar navbar-expand-lg">
          <ul class="navbar-nav">
            <li class="nav-item d-block d-xl-none">
              <a class="nav-link sidebartoggler nav-icon-hover" id="headerCollapse" href="javascript:void(0)">
                <i class="ti ti-menu-2" style="background-color: white; padding: 10px; box-shadow: 2px 2px rgba(0, 0, 0, 0.263);"></i>
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <!--  Header End -->

      <div class="container-fluid">
        <RouterView/>
      </div>

    </div>
</div>

</template>