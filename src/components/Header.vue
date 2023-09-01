<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header class="wrapper" :class="{ sticky: isSticky }">
    <!-- Main nav -->
    <nav class="navbar navbar-expand-lg py-1" :class="{ hovered: isHovered }">
      <div class="container">
        <router-link class="navbar-brand" to="/">SWAY </router-link>
        <ul class="navbar-nav justify-content-end flex-row flex-grow-1">
            <li class="nav-item search position-relative d-block d-lg-none">
                <router-link to="/" class="nav-link py-0" @click="searchClick()">
                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" v-if="IsActive == false"/>
                    <font-awesome-icon icon="fa-solid fa-xmark" v-else @click.stop.prevent="closeClick()"/>
                </router-link>
                <!-- Search Box -->
                <div
                    class="input-box position-absolute"
                    :class="{ active: IsActive }"
                >
                    <input type="text" class="border w-100 h-50 p-2" placeholder="Search..." />
                    <span class="close ms-2">
                        <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                    </span>
                </div>
                <!-- Search Box -->
            </li>
            
        </ul>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div class="offcanvas-header">
            <router-link class="navbar-brand" to="/">SWAY</router-link>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 main-nav">
              <li class="nav-item" 
              v-for="(menu, index) in megamenus" 
              :key="index"
              @mouseover="menu.dropdown ? setHovered(true) : '' "
              @mouseout="setHovered(false)"
              >
                <router-link
                  class="nav-link"
                  :class="{ 'dropdown-toggle': menu.dropdown }"
                  :to="menu.url"
                  >{{ menu.text }}
                </router-link>
                <div
                  class="mega-menu w-100 py-lg-5 position-absolute d-none"
                  :class="{ active: menu.dropdown }"
                >
                  <div class="row">
                    <div class="mega-main mb-lg-0 mb-2 col-lg" v-for="(submenu, subindex) in menu.subnav" :key="subindex" >
                      <ul class="dropdown-menu pt-0">
                        <li v-if="submenu.isTitleText"><span class="titleText">{{ submenu.titleText }}</span></li>
                        <li v-for="(item, itemindex) in submenu.submainNav" :key="itemindex">
                          <router-link class="dropdown-item" :to="item.url">
                            {{item.text}}
                            <span class="link-badge" :class="{'red': item.ishot, 'green': item.isnew, 'blue': item.isexclusive}" v-if="item.isexclusive || item.isnew || item.ishot">
                              {{ item.badge }}
                            </span>
                          </router-link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              <li class="nav-item flag-item position-relative">
                <router-link class="nav-link dropdown-toggle d-block" to="/" @click.prevent="showubmenu">
                  <img src="@/assets/images/en-flag.png" alt="flag"/>
                  <span class="d-md-none ms-2">English</span>
                </router-link>
                <ul class="flag position-absolute" :class="{active: isClicked}">
                  <li v-for="flag in flags" :key="flag.value">
                    <router-link to="/" class="d-block pb-1">
                      <img :src="flag.value" :alt="flag.value" />
                      <span class="d-inline-block ms-2">{{ flag.name }}</span
                      ></router-link
                    >
                  </li>
                </ul>
              </li>
              
              <li class="nav-item search position-relative d-none d-lg-block">
                <router-link to="/" @click="searchClick()">
                  <font-awesome-icon icon="fa-solid fa-magnifying-glass" v-if="IsActive == false"/>
                  <font-awesome-icon icon="fa-solid fa-xmark" v-else @click.stop.prevent="closeClick()"/>
                </router-link>
                <!-- Search Box -->
                <div
                  class="input-box position-absolute"
                  :class="{ active: IsActive }"
                >
                  <input type="text" class="border-0 w-100 h-50 p-2" placeholder="Search..." />
                  <span class="close ms-2">
                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                  </span>
                </div>
                <!-- Search Box -->
              </li>
              <li class="nav-item contact-btn">
                <router-link to="/" class="nav-link text-center bg-primary-color">Contact Us</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
// import {en} from "@/lang/en";
import enFlag from '@/assets/images/en-flag.png'
import frFlag from '@/assets/images/fr-flag.png'
import deFlag from '@/assets/images/de-flag.png'

export default {
  name: 'HeaderComponent',
  data() {
    return {
      IsActive: false,
      isHovered: false,
      isSticky: false,
      isClicked: false,
      megamenus: [
        { 
          text: 'Home', 
          url: '/',
          dropdown: true,
          subnav: [
            { 
              isTitleText: false,
              submainNav: [
                { text: '2 Column', url: '/', ishot: true, badge:'hot' },
                { text: '3 column', url: '/' },
                { text: '4 column', url: '/' },
                { text: 'Full width', url: '/' }, 
                { text: '2 Column', url: '/', isexclusive: true, badge:'exclusive'  },
                { text: '3 column', url: '/' },
                { text: '4 column', url: '/' },
                { text: 'Full width', url: '/' }, 
                { text: '2 Column', url: '/', ishot: true, badge:'hot' },
                { text: '3 column', url: '/' },
                { text: '4 column', url: '/' },
                { text: 'Full width', url: '/' }, 
              ]
            },
            { 
              isTitleText: false,
              submainNav: [
                { text: '2 Column', url: '/' },
                { text: '3 column', url: '/', isnew: true, badge: 'new'  },
                { text: '4 column', url: '/' },
                { text: 'Full width', url: '/' }, 
                { text: '2 Column', url: '/' },
                { text: '3 column', url: '/', isexclusive: true, badge:'exclusive'   },
                { text: '4 column', url: '/' },
                { text: 'Full width', url: '/' }, 
                { text: '2 Column', url: '/' },
                { text: '3 column', url: '/', isnew: true, badge: 'new'  },
                { text: '4 column', url: '/' },
                { text: 'Full width', url: '/' }, 
              ]
            },
            { 
              isTitleText: false,
              submainNav: [
                { text: '2 Column', url: '/', isexclusive: true, badge:'exclusive'  },
                { text: '3 column', url: '/' },
                { text: '4 column', url: '/' },
                { text: 'Full width', url: '/' }, 
                { text: '2 Column', url: '/' },
                { text: '3 column', url: '/', isnew: true, badge: 'new'  },
                { text: '4 column', url: '/' },
                { text: 'Full width', url: '/' }, 
                { text: '2 Column', url: '/' },
                { text: '3 column', url: '/' },
                { text: '4 column', url: '/' },
                { text: 'Full width', url: '/' }, 
                { text: '2 Column', url: '/' },
                { text: '3 column', url: '/' },

              ]
            },
            { 
              isTitleText: false,
              submainNav: [
                { text: '2 Column', url: '/' },
                { text: '3 column', url: '/', isnew: true, badge: 'new'  },
                { text: '4 column', url: '/' },
                { text: 'Full width', url: '/' }, 
                { text: '2 Column', url: '/' },
                { text: '3 column', url: '/', isnew: true, badge: 'new'  },
                { text: '4 column', url: '/' },
                { text: 'Full width', url: '/' }, 
                { text: '2 Column', url: '/' },
                { text: '3 column', url: '/' },
                { text: '4 column', url: '/' },
                { text: 'Full width', url: '/' }, 
                { text: '2 Column', url: '/' },
                { text: '3 column', url: '/', isnew: true, badge: 'new'  },
              ]
            },
            { 
              isTitleText: false,
              submainNav: [
                { text: 'Slider Project', url: '/'},
                { text: 'Masonry Project', url: '/' },
                { text: 'Slider list', url: '/' },
                { text: 'Image list', url: '/', isnew: true, badge: 'new'  }, 
                { text: 'Slider Project', url: '/', isexclusive: true, badge:'exclusive' },
                { text: 'Masonry Project', url: '/' },
                { text: 'Slider list', url: '/' },
                { text: 'Image list', url: '/', isnew: true, badge: 'new'  }, 
                { text: 'Slider Project', url: '/'},
                { text: 'Masonry Project', url: '/' },
                { text: 'Image list', url: '/'}, 
              ]
            },   
          ], 
        },
        { text: 'About', url: '/' },
        {
          text: 'Portfolio',
          url: '/',
          dropdown: true,
          subnav: [
            { 
              isTitleText: true,
              titleText: 'Grid Minimal',
              submainNav: [
                { text: '2 Column', url: '/', ishot: true, badge:'hot' },
                { text: '3 column', url: '/' },
                { text: '4 column', url: '/' },
                { text: 'Full width', url: '/' }, 
              ]
            },
            { 
              isTitleText: true,
              titleText: 'Masonry Minimal',
              submainNav: [
                { text: '2 Column', url: '/' },
                { text: '3 column', url: '/', isnew: true, badge: 'new'  },
                { text: '4 column', url: '/' },
                { text: 'Full width', url: '/' }, 
              ]
            },
            { 
              isTitleText: true,
              titleText: 'Grid Detail',
              submainNav: [
                { text: '2 Column', url: '/' },
                { text: '3 column', url: '/' },
                { text: '4 column', url: '/' },
                { text: 'Full width', url: '/' }, 
              ]
            },
            { 
              isTitleText: true,
              titleText: 'Masonry Minimal',
              submainNav: [
                { text: '2 Column', url: '/' },
                { text: '3 column', url: '/', isnew: true, badge: 'new'  },
                { text: '4 column', url: '/' },
                { text: 'Full width', url: '/' }, 
              ]
            },
            { 
              isTitleText: true,
              titleText: 'Single Project',
              submainNav: [
                { text: 'Slider Project', url: '/', isexclusive: true, badge:'exclusive' },
                { text: 'Masonry Project', url: '/' },
                { text: 'Slider list', url: '/' },
                { text: 'Image list', url: '/', isnew: true, badge: 'new'  }, 
              ]
            },
            { 
              isTitleText: true,
              titleText: 'Grid Minimal',
              submainNav: [
                { text: '2 Column', url: '/' },
                { text: '3 column', url: '/' },
                { text: '4 column', url: '/' },
                { text: 'Full width', url: '/' }, 
              ]
            },
          ],
        },
        {
          text: 'Blog',
          url: '/',
          dropdown: true,
          subnav: [
            {
              isTitleText: true,
              titleText: 'List Layout',
              submainNav: [
                { text: 'Classic', url: '/', ishot: true, badge:'hot'},
                { text: 'Classic sidebar', url: '/' },
                { text: 'Left image list', url: '/' },
                { text: 'Left image sidebar', url: '/', isnew: true, badge: 'new'},
                { text: 'Minimal list', url: '/' },
                { text: 'Minimal list sidebar', url: '/' },
              ]
            },
            {
              isTitleText: true,
              titleText: 'Grid Layout',
              submainNav:[
                { text: 'Detailed grid', url: '/' },
                { text: 'Detailed grid sidebar', url: '/' },
                { text: 'Minimal grid', url: '/', isexclusive: true, badge:'exclusive' },
                { text: 'Minimal grid sidebar', url: '/' },
              ]
            },
            {
              isTitleText: true,
              titleText: 'Single post layout',
              submainNav:[
                { text: 'Classic', url: '/' },
                { text: 'Classic sidebar', url: '/', isnew: true, badge: 'new'},
                { text: 'Modern', url: '/' },
                { text: 'Modern sidebar', url: '/' },
              ]
            },
            {
              isTitleText: true,
              titleText: 'Single post types',
              submainNav:[
                { text: 'Standard post', url: '/' },
                { text: 'Video post', url: '/', isexclusive: true, badge:'exclusive' },
                { text: 'Gallery post', url: '/' },
                { text: 'Audio post', url: '/' },
              ]
            }
          ], 
        },
        {
          text: 'Shop',
          url: '/',
          dropdown: true,
          subnav: [
            {
              isTitleText: true,
              titleText: 'Shop minimal',
              submainNav:[
                { text: 'Shop 1', url: '/', ishot: true, badge:'hot' },
                { text: 'Shop 2', url: '/' },
                { text: 'Shop 3', url: '/' },
                { text: 'Shop 4', url: '/', isexclusive: true, badge:'exclusive'},
                { text: 'Shop 5', url: '/' }
              ]
            },
            {
              isTitleText: true,
              titleText: 'Shop detail',
              submainNav:[
                { text: '2 columns sidebar right', url: '/' },
                { text: '3 columns sidebar right', url: '/', isnew: true, badge: 'new'   },
                { text: '3 columns sidebar left', url: '/' },
                { text: '4 columns fullwidth', url: '/' },
                { text: 'columns fullwidth', url: '/' }
              ]
            },
            {
              isTitleText: true,
              titleText: 'Single Product',
              submainNav:[
                { text: 'Left image – Thumbnails', url: '/', isexclusive: true, badge:'exclusive'  },
                { text: 'Left image – Gallery list', url: '/' },
                { text: 'Right image – Thumbnails', url: '/' },
                { text: 'Right image – Gallery list', url: '/', isexclusive: true, badge:'exclusive'  },
                { text: 'Right sidebar – Thumbnails', url: '/' },
                { text: 'Right sidebar – Gallery list', url: '/', ishot: true, badge:'hot' },
                { text: 'Left sidebar – Thumbnails', url: '/' },
                { text: 'Left sidebar – Gallery list', url: '/' },
              ]
            },
            {
              isTitleText: true,
              titleText: 'Shop pages',
              submainNav:[
                { text: 'Cart', url: '/' },
                { text: 'Checkout', url: '/', isexclusive: true, badge:'exclusive'  },
                { text: 'My account', url: '/' },
                { text: 'Terms and conditions', url: '/' },
              ]
            },
          ],
        },
        {
          text: 'Blocks',
          url: '/',
          dropdown: true,
          subnav: [
            {
              isTitleText: true,
              titleText: 'List Layout',
              submainNav: [
                { text: 'Classic', url: '/' },
                { text: 'Classic sidebar', url: '/', isexclusive: true, badge:'exclusive' },
                { text: 'Left image list', url: '/' },
                { text: 'Left image sidebar', url: '/' },
                { text: 'Minimal list', url: '/' },
                { text: 'Minimal list sidebar', url: '/' },
              ]
            },
            {
              isTitleText: true,
              titleText: 'Grid Layout',
              submainNav:[
                { text: 'Detailed grid', url: '/', isnew: true, badge: 'new'},
                { text: 'Detailed grid sidebar', url: '/' },
                { text: 'Minimal grid', url: '/' },
                { text: 'Minimal grid sidebar', url: '/', isnew: true, badge: 'new' },
              ]
            },
            {
              isTitleText: true,
              titleText: 'Single post layout',
              submainNav:[
                { text: 'Classic', url: '/' },
                { text: 'Classic sidebar', url: '/', ishot: true, badge:'hot'},
                { text: 'Modern', url: '/' },
                { text: 'Modern sidebar', url: '/' },
              ]
            },
            {
              isTitleText: true,
              titleText: 'Single post types',
              submainNav:[
                { text: 'Standard post', url: '/' },
                { text: 'Video post', url: '/' },
                { text: 'Gallery post', url: '/' },
                { text: 'Audio post', url: '/' },
              ]
            }
          ], 
        },
        { text: 'Elements', url: '/' },
        { text: 'Extra', url: '/' }
      ],
      flags: [
        { value: enFlag, name: 'English' },
        { value: frFlag, name: 'Francais' },
        { value: deFlag, name: 'Deutsch' }
      ]
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmounted() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    searchClick() {
      this.IsActive = true
    },
    closeClick() {
      this.IsActive = false
    },
    setHovered(value) {
      this.isHovered = value  
    },
    showubmenu(){
      this.isClicked = !this.isClicked;
    },
    handleScroll(){
      if (window.scrollY > 150) {
        this.isSticky = true;
      } else {
        this.isSticky = false;
      }
    },
  }

  
}
</script>

<style>


</style>