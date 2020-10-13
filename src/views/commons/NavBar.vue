<template>
  <header class="header">
    <nav
      class="navbar navbar-expand-lg fixed-top"
      v-bind:class="{
        affix: hasAffix,
        'custom-nav': coloredLogo,
        'bg-transparent': !coloredLogo,
      }"
    >
      <div class="container">
        <a class="navbar-brand" href="/">
          <img
            :src="
              coloredLogo
                ? require('../../assets/img/ruedaz/logo-horizontal.svg')
                : require('../../assets/img/ruedaz/logo-horizontal.svg')
            "
            alt="logo"
            class="img-fluid"
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          @click="mobileNavClicked"
          v-bind:class="{ collapsed: collapsed }"
        >
          <span class="ti-menu"></span>
        </button>
        <div
          class="collapse navbar-collapse h-auto"
          v-bind:class="{ show: !collapsed }"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav ml-auto menu">
            <li>
              <a href="#" class="dropdown-toggle">CONOCE MAS DE RUEDAZ</a>
              <!-- <ul class="sub-menu">
                <li>
                  <router-link to="/">Home Page 01</router-link>
                </li>
                <li>
                  <router-link to="index-2" v-scroll-to="'#index-2'"
                    >Home Page 02</router-link
                  >
                </li>
                <li>
                  <router-link to="index-3" v-scroll-to="'#index-3'"
                    >Home Page 03</router-link
                  >
                </li>
                <li>
                  <router-link to="index-4" v-scroll-to="'#index-4'"
                    >Home Page 04</router-link
                  >
                </li>
                <li>
                  <router-link to="index-5" v-scroll-to="'#index-5'"
                    >Home Page 05</router-link
                  >
                </li>
                <li>
                  <router-link to="index-6" v-scroll-to="'#index-6'"
                    >Home Page 06</router-link
                  >
                </li>
                <li>
                  <router-link to="index-7" v-scroll-to="'#index-7'"
                    >Home Page 07</router-link
                  >
                </li>
                <li>
                  <router-link to="index-8" v-scroll-to="'#index-8'"
                    >Home Page 08</router-link
                  >
                </li>
                <li>
                  <router-link to="index-9" v-scroll-to="'#index-8'"
                    >Home Page 09</router-link
                  >
                </li>
                <li>
                  <router-link to="index-10" v-scroll-to="'#index-10'"
                    >Home Page 10
                    <span class="badge badge-danger">New</span></router-link
                  >
                </li>
              </ul> -->
            </li>
            <li>
              <router-link to="#about" v-scroll-to="'#about'"
                >¿COMO FUNCIONA?</router-link
              >
            </li>
            <li>
              <router-link to="#features" v-scroll-to="'#features'"
                >RED DE PARQUEADEROS</router-link
              >
            </li>
            <li>
              <a href="#" class="dropdown-toggle">CONTACTENOS</a>
              <!-- <ul class="sub-menu">
                <li>
                  <a href="#" class="dropdown-toggle-inner">Login & Sign Up</a>
                  <ul class="sub-menu">
                    <li>
                      <router-link to="login" v-scroll-to="'#login'"
                        >Login Page</router-link
                      >
                    </li>
                    <li>
                      <router-link to="sign-up" v-scroll-to="'#sign-up'"
                        >Signup Page</router-link
                      >
                    </li>
                    <li>
                      <router-link to="reset" v-scroll-to="'#reset'"
                        >Reset Password</router-link
                      >
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#" class="dropdown-toggle-inner">Utilities</a>
                  <ul class="sub-menu">
                    <li>
                      <router-link to="faq" v-scroll-to="'#faq'"
                        >FAQ Page</router-link
                      >
                    </li>
                    <li>
                      <router-link to="404" v-scroll-to="'#404'"
                        >404 Page</router-link
                      >
                    </li>
                    <li>
                      <router-link to="coming-soon" v-scroll-to="'#coming-soon'"
                        >Coming Soon</router-link
                      >
                    </li>
                    <li>
                      <router-link to="thank-you" v-scroll-to="'#thank-you'"
                        >Thank You</router-link
                      >
                    </li>
                    <li>
                      <router-link to="download" v-scroll-to="'#download'"
                        >Download Page
                        <span class="badge accent-bg text-white"
                          >New</span
                        ></router-link
                      >
                    </li>
                    <li>
                      <router-link to="review" v-scroll-to="'#review'"
                        >Review Page
                        <span class="badge accent-bg text-white"
                          >New</span
                        ></router-link
                      >
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#" class="dropdown-toggle-inner">Team</a>
                  <ul class="sub-menu">
                    <li>
                      <router-link to="team" v-scroll-to="'#team'"
                        >Our Team Members</router-link
                      >
                    </li>
                    <li>
                      <router-link to="profile" v-scroll-to="'#profile'"
                        >Team Member Profile</router-link
                      >
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#" class="dropdown-toggle-inner">Our Blog</a>
                  <ul class="sub-menu">
                    <li>
                      <router-link to="blog-grid" v-scroll-to="'#blog-grid'"
                        >Blog Grid</router-link
                      >
                    </li>
                    <li>
                      <router-link to="blog-large" v-scroll-to="'#blog-large'"
                        >Blog No Sidebar</router-link
                      >
                    </li>
                    <li>
                      <router-link
                        to="blog-left-sidebar"
                        v-scroll-to="'#blog-left-sidebar'"
                        >Blog Left Sidebar</router-link
                      >
                    </li>
                    <li>
                      <router-link
                        to="blog-right-sidebar"
                        v-scroll-to="'#blog-right-sidebar'"
                        >Blog Right Sidebar</router-link
                      >
                    </li>
                    <li>
                      <router-link
                        to="blog-details-left-sidebar"
                        v-scroll-to="'#blog-details-left-sidebar'"
                        >Blog Detail Left Sidebar</router-link
                      >
                    </li>
                    <li>
                      <router-link
                        to="blog-details-right-sidebar"
                        v-scroll-to="'#blog-details-right-sidebar'"
                        >Blog Detail Right Sidebar</router-link
                      >
                    </li>
                  </ul>
                </li>
                <li>
                  <router-link to="about-us" v-scroll-to="'#about-us'"
                    >About Us</router-link
                  >
                </li>
                <li>
                  <router-link to="contact-us" v-scroll-to="'#contact-us'"
                    >Contact Us</router-link
                  >
                </li>
                <li>
                  <router-link to="invoice" v-scroll-to="'#invoice'"
                    >Sale Invoice
                    <span class="badge badge-danger">New</span></router-link
                  >
                </li>
              </ul> -->
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  props: {
    coloredLogo: {
      type: Boolean,
      default: false,
    },
  },
  data: function() {
    return {
      windowTop: 0,
      collapsed: true,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll: function() {
      this.windowTop = window.top.scrollY;
    },
    mobileNavClicked: function() {
      this.collapsed = !this.collapsed;
    },
  },
  computed: {
    hasAffix: function() {
      return this.windowTop > 0;
    },
  },
};
</script>
