<template>
  <!--footer section start-->
  <!--when you want to remove subscribe newsletter container then you should remove .footer-with-newsletter class-->
  <footer
    class="footer-1 gradient-bg ptb-60"
    v-bind:class="{ 'footer-with-newsletter': showSubscribe }"
  >
    <!--subscribe newsletter start-->
    <div class="container" v-show="showSubscribe">
      <div class="row newsletter-wrap primary-bg rounded shadow-lg p-5">
        <div class="col-md-6 col-lg-7 mb-4 mb-md-0 mb-sm-4 mb-lg-0">
          <div class="newsletter-content text-white">
            <h3 class="mb-0 text-white">
              Suscribete a nuestras ultimas novedades
            </h3>
            <p class="mb-0">
              Somos un equipo de personas que realmente se preocupan porque tu
              movilidad sea mas facil.
            </p>
          </div>
        </div>
        <div class="col-md-6 col-lg-5">
          <form class="newsletter-form position-relative">
            <input
              type="text"
              class="input-newsletter form-control"
              placeholder="Escribe tu correo electronico"
              name="email"
              required
              autocomplete="off"
            />
            <button type="submit" class="disabled">
              <i class="fas fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
    <!--subscribe newsletter end-->

    <div class="container">
      <div class="row">
        <div class="col-md-12 col-lg-4 mb-4 mb-md-4 mb-sm-4 mb-lg-0">
          <a href="#" class="navbar-brand mb-2">
            <img
              :src="require('@/assets/img/ruedaz/logo-horizontal.svg')"
              alt="logo"
              class="img-fluid"
            />
          </a>
          <br />
          <p>
            Movilidad colaborativa.
          </p>
          <div
            class="list-inline social-list-default background-color social-hover-2 mt-2"
          >
            <li class="list-inline-item">
              <a class="twitter" href="#">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a class="youtube" href="#">
                <i class="fab fa-youtube"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a class="linkedin" href="#">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a class="dribbble" href="#">
                <i class="fab fa-dribbble"></i>
              </a>
            </li>
          </div>
        </div>
        <div class="col-md-12 col-lg-8">
          <div class="row mt-0">
            <div
              class="col-sm-6 col-md-3 col-lg-3 mb-4 mb-sm-4 mb-md-0 mb-lg-0"
            >
              <h6 class="text-uppercase">Nosotros</h6>
              <ul>
                <li>
                  <a href="#">Carrera 14 #89 -48</a>
                </li>
                <li>
                  <a href="#">Bogotá, Colombia</a>
                </li>
                <li>
                  <a href="#">PBX +57 (1) 234 22 77</a>
                </li>
                <li>
                  <a href="#">contactenos@ruedaz.com</a>
                </li>
              </ul>
            </div>
            <div class="col-sm-6 col-md-3 col-lg-3">
              <h6 class="text-uppercase">Soporte</h6>
              <ul>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Ventas</a>
                </li>
                <li>
                  <a href="#">Atencion al usuario</a>
                </li>
                <li>
                  <a href="#">Estado de congestion</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--end of container-->
  </footer>
</template>

<script>
export default {
  name: "SiteFooter",
  props: {
    showSubscribe: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
