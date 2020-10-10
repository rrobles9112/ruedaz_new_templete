<template>
  <div id="features" class="feature-section ptb-100" v-bind:class="{ 'gray-light-bg': isGray }">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-9 col-lg-9">
          <div class="section-heading text-center mb-5">
            <h2>Apdash Features</h2>
            <p>Objectively deliver professional value with diverse web-readiness. Collaboratively transition wireless customer service without goal-oriented catalysts for change. Collaboratively.</p>
          </div>
        </div>
      </div>

      <!--feature new style start-->
      <div class="row align-items-center justify-content-md-center">
        <div class="col-lg-4 col-md-12">
          <div class="row">
            <div class="col-12">
              <div class="d-flex align-items-start mb-sm-0 mb-md-3 mb-lg-3">
                <span class="ti-face-smile icon-size-md color-secondary mr-4"></span>
                <div class="icon-text">
                  <h5 class="mb-2">Responsive web design</h5>
                  <p>Modular and monetize an componente between layouts monetize array. Core competencies for testing.</p>
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="d-flex align-items-start mb-sm-0 mb-md-3 mb-lg-3">
                <span class="ti-vector icon-size-md color-secondary mr-4"></span>
                <div class="icon-text">
                  <h5 class="mb-2">Loaded with features</h5>
                  <p>Holisticly aggregate client centered the manufactured products transparent. Organic sources content.</p>
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="d-flex align-items-start mb-sm-0 mb-md-3 mb-lg-3">
                <span class="ti-headphone-alt icon-size-md color-secondary mr-4"></span>
                <div class="icon-text">
                  <h5 class="mb-2">Friendly online support</h5>
                  <p>Monotonectally recaptiualize client the centric customize clicks niche markets for this meta-services via.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-5 d-none d-sm-none d-md-block d-lg-block">
          <div class="position-relative pb-md-5 py-lg-0">
            <img
              alt="Image placeholder"
              src="../../assets/img/app-mobile-image.png"
              class="img-center img-fluid"
            />
          </div>
        </div>
        <div class="col-lg-4 col-md-12">
          <div class="row">
            <div class="col-12">
              <div class="d-flex align-items-start mb-sm-0 mb-md-3 mb-lg-3">
                <span class="ti-layout-media-right icon-size-md color-secondary mr-4"></span>
                <div class="icon-text">
                  <h5 class="mb-2">Free updates forever</h5>
                  <p>Compellingly formulate installed base imperatives high standards in benefits for highly efficient client.</p>
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="d-flex align-items-start mb-sm-0 mb-md-3 mb-lg-3">
                <span class="ti-layout-cta-right icon-size-md color-secondary mr-4"></span>
                <div class="icon-text">
                  <h5 class="mb-2">Built with Sass</h5>
                  <p>Energistically initiate client-centric the maximize market positioning synergy rather client-based data.</p>
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="d-flex align-items-start mb-sm-0 mb-md-3 mb-lg-3">
                <span class="ti-palette icon-size-md color-secondary mr-4"></span>
                <div class="icon-text">
                  <h5 class="mb-2">Infinite colors</h5>
                  <p>Energistically initiate client-centric e-tailers rather than-based data. Morph business technology before.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--feature new style end-->
    </div>
  </div>
</template>

<script>
export default {
  name: "Features",
  props: {
    isGray: {
      type: Boolean,
      default: false
    },
  },
};
</script>

<style>
</style>