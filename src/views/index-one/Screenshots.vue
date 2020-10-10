<template>
  <section id="screenshots"
      class="screenshots-section"
      v-bind:class="{ 'gray-light-bg': isGray, 'pb-100': paddingBottom, 'pt-100': paddingTop }">
      <div class="container">
          <div class="row justify-content-center">
              <div class="col-md-9 col-lg-8">
                  <div class="section-heading text-center mb-5">
                      <h2>Apps Screenshots</h2>
                      <p>
                          Proactively impact value-added channels via backend leadership
                          skills. Efficiently revolutionize worldwide networks whereas
                          strategic catalysts for change.
                      </p>
                  </div>
              </div>
          </div>
          <div class="screenshot-wrap">
              <div class="screenshot-frame"></div>

              <carousel
                  :autoplay="true"
                  :dots="true"
                  :loop="true"
                  :responsive="{0:{items: 1},768:{items: 3},991:{items: 4},1200:{items:4},1920:{items: 4}}"
                  :margin="0"
                  :center="true"
                  :nav="false"
                  class="screen-carousel owl-theme dot-indicator">
                  <img
                      src="../../assets/img/01.jpg"
                      class="img-fluid"
                      alt="screenshots"
                  />
                  <img
                      src="../../assets/img/02.jpg"
                      class="img-fluid"
                      alt="screenshots"
                  />
                  <img
                      src="../../assets/img/03.jpg"
                      class="img-fluid"
                      alt="screenshots"
                  />
                  <img
                      src="../../assets/img/04.jpg"
                      class="img-fluid"
                      alt="screenshots"
                  />
                  <img
                      src="../../assets/img/05.jpg"
                      class="img-fluid"
                      alt="screenshots"
                  />
                  <img
                      src="../../assets/img/06.jpg"
                      class="img-fluid"
                      alt="screenshots"
                  />
              </carousel>

          </div>
      </div>
  </section>
</template>

<script>
    import carousel from "vue-owl-carousel";
    export default {
        name: "Screenshots",
        props: {
            isGray: {
                type: Boolean,
                default: false
            },
            paddingTop: {
                type: Boolean,
                default: true
            },
            paddingBottom: {
                type: Boolean,
                default: true
            }
        },
        components: { carousel },
    };
</script>

<style>

</style>
