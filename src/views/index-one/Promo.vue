<template>
  <section class="promo-section ptb-100" v-bind:class="{ 'gray-light-bg' : isGray }">
    <div class="container">
      <div class="row" v-show="showDesc">
        <div class="col-lg-7 col-md-10">
          <div class="section-heading">
            <h2>We Will Helps You to Build Beautiful App</h2>
            <p>Uniquely repurpose strategic core competencies with progressive content. Assertively transition ethical imperatives and collaborative manufactured products. </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 col-lg-3">
          <div class="card border-0 single-promo-card p-2 mt-4 shadow">
            <div class="card-body">
              <div class="pb-2">
                <span class="fas fa-concierge-bell icon-size-md color-secondary"></span>
              </div>
              <div class="pt-2 pb-3">
                <h5>Modular</h5>
                <p class="mb-0">All components are built to be used in combination.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="card border-0 single-promo-card p-2 mt-4 shadow">
            <div class="card-body">
              <div class="pb-2">
                <span class="fas fa-window-restore icon-size-md color-secondary"></span>
              </div>
              <div class="pt-2 pb-3">
                <h5>Responsive</h5>
                <p class="mb-0">Quick is optimized to work for most devices.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="card border-0 single-promo-card p-2 mt-4 shadow">
            <div class="card-body">
              <div class="pb-2">
                <span class="fas fa-sync-alt icon-size-md color-secondary"></span>
              </div>
              <div class="pt-2 pb-3">
                <h5>Scalable</h5>
                <p class="mb-0">Remain consistent while developing new features.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="card border-0 single-promo-card p-2 mt-4 shadow">
            <div class="card-body">
              <div class="pb-2">
                <span class="fas fa-bezier-curve icon-size-md color-secondary"></span>
              </div>
              <div class="pt-2 pb-3">
                <h5>Customizable</h5>
                <p class="mb-0">Change a few variables and the whole theme adapts.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Promo",
  props: {
    showDesc: {
      type: Boolean,
      default: false
    },
    isGray: {
      type: Boolean,
      default: false
    },
  }
};
</script>

<style>
</style>