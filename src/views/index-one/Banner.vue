<template>
  <!--hero section start-->
  <section class="ptb-100 bg-image overflow-hidden" image-overlay="10">
    <div class="hero-bottom-shape-two hero-bottom-shape-bg"></div>

    <!--style="background: url('../../assets/img/hero-bottom-shape-2.svg')no-repeat bottom center"-->

    <div class="container">
      <div
        class="row align-items-center justify-content-lg-between justify-content-md-center justify-content-sm-center"
      >
        <div class="col-md-12 col-lg-6">
          <div class="hero-slider-content text-white py-5">
            <h1 class="text-white">Todas las veces que quieras parquear</h1>
            <p class="lead">
              Por sólo $59.900 mensuales. Aplican TyC
            </p>

            <div class="action-btns mt-3">
              <a href="#" class="btn btn-brand-03 btn-rounded mr-3">
                Descargar ahora
                <i class="fas fa-cloud-download-alt pl-2"></i>
              </a>
              <a
                href="#"
                class="popup-youtube btn btn-white btn-circle btn-icon"
                @click="showYouTubeModal"
              >
                <i class="fas fa-play"></i>
              </a>
              <span class="pl-2">Watch Now</span>
            </div>
            <div class="hero-counter mt-4">
              <div class="row">
                <div class="col-6 col-sm-4">
                  <div class="counter-item d-flex align-items-center py-3">
                    <div class="single-counter-item">
                      <span class="h4 count-number text-white">672,086</span>
                      <h6 class="text-white mb-0">Total Instaladas</h6>
                    </div>
                    <span class="color-6 ml-2 p-2 rounded-circle">
                      <i class="fas fa-arrow-up icon-sm"></i>
                    </span>
                  </div>
                </div>
                <div class="col-6 col-sm-4">
                  <div class="counter-item d-flex align-items-center py-3">
                    <div class="single-counter-item">
                      <span class="h4 count-number text-white">143,870</span>
                      <h6 class="text-white mb-0">Total Descargadas</h6>
                    </div>
                    <span class="color-6 ml-2 p-2 rounded-circle">
                      <i class="fas fa-arrow-up icon-sm"></i>
                    </span>
                  </div>
                </div>
                <div class="col-6 col-sm-4">
                  <div class="counter-item d-flex align-items-center py-3">
                    <div class="single-counter-item">
                      <span class="h4 count-number text-white">31,191</span>
                      <h6 class="text-white mb-0">Usuarios Activos</h6>
                    </div>
                    <span class="color-6 ml-2 p-2 rounded-circle">
                      <i class="fas fa-arrow-up icon-sm"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-sm-6 col-lg-5">
          <div class="img-wrap d-flex justify-content-end">
            <img
              :src="require('@/assets/img/ruedaz/foto_banner_principal.png')"
              alt="app image"
              class="ml-auto img-fluid"
            />
          </div>
        </div>
      </div>
      <!--end of row-->
    </div>
    <!--end of container-->

    <YTModal
      url="https://www.youtube.com/watch?v=1APwq1df6Mw"
      v-if="showModal"
      @close="showModal = false"
    >
      This is my first modal
    </YTModal>
  </section>
</template>

<script>
import YTModal from "../../components/YTModal";
export default {
  name: "Banner",
  components: { YTModal },
  data: function() {
    return {
      showModal: false,
    };
  },
  methods: {
    showYouTubeModal: function(e) {
      e.preventDefault();
      this.showModal = true;
    },
  },
};
</script>

<style lang="scss">
.hero-bottom-shape-bg {
  background: url("../../assets/img/hero-bottom-shape-2.svg") no-repeat bottom
    center;
}
</style>
