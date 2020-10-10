<template>
  <section class="bg-image ptb-100" image-overlay="8">
    <div class="background-image-wraper download-bg" style=" opacity: 1;"></div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-9 col-lg-8">
          <div class="section-heading text-center mb-1 text-white">
            <h2 class="text-white">Download Our Apps</h2>
            <p>
              Start working with that can provide everything you need to
              generate awareness, drive traffic, connect. Efficiently transform
              granular value with client-focused content. Energistically
              redefine market.
            </p>
            <div class="action-btns mt-4">
              <ul class="list-inline">
                <li class="list-inline-item">
                  <a
                    href="#"
                    class="d-flex align-items-center app-download-btn btn btn-brand-02 btn-rounded"
                  >
                    <span class="fab fa-windows icon-size-sm mr-3"></span>
                    <div class="download-text text-left">
                      <small>Download form</small>
                      <h5 class="mb-0">Windows</h5>
                    </div>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a
                    href="#"
                    class="d-flex align-items-center app-download-btn btn btn-brand-02 btn-rounded"
                  >
                    <span class="fab fa-apple icon-size-sm mr-3"></span>
                    <div class="download-text text-left">
                      <small>Download form</small>
                      <h5 class="mb-0">App Store</h5>
                    </div>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a
                    href="#"
                    class="d-flex align-items-center app-download-btn btn btn-brand-02 btn-rounded"
                  >
                    <span class="fab fa-google-play icon-size-sm mr-3"></span>
                    <div class="download-text text-left">
                      <small>Download form</small>
                      <h5 class="mb-0">Google Play</h5>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!--end col-->
      </div>
      <!--end row-->
    </div>
  </section>
</template>

<script>
export default {
  name: "Download",
};
</script>

<style lang="scss">
.download-bg {
  background: url("../../assets/img/cta-bg.jpg") no-repeat center center / cover
    fixed;
  // opacity: 1;
}
</style>
