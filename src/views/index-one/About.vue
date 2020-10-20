<template>
  <div class="overflow-hidden">
    <section
      id="about"
      class="about-us ptb-100 background-shape-img position-relative"
      v-bind:class="{ 'gray-light-bg': isGray }"
    >
      <div class="container">
        <h1 class="text-center">Conoce mas</h1>
        <div
          class="row align-items-center justify-content-lg-between justify-content-md-center justify-content-sm-center"
        >
          <div class="col-12 col-md-4">
            <video
              poster="@/assets/img/ruedaz/poster_1.jpg"
              controls
              style="width: 100%; height: 250px;"
            >
              <source src="@/assets/videos/fase2Socia3.mp4" />
            </video>
          </div>
          <div class="col-12 col-md-4">
            <video
              poster="@/assets/img/ruedaz/poster_2.jpg"
              controls
              style="width: 100%; height: 250px;"
            >
              <source src="@/assets/videos/video_2.mp4" />
            </video>
          </div>
          <div class="col-12 col-md-4">
            <video
              poster="@/assets/img/ruedaz/poster_3.jpg"
              controls
              style="width: 100%; height: 250px;"
            >
              <source src="@/assets/videos/video_3.mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "About",
  props: {
    isGray: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
