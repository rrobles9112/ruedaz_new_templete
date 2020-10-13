<template>
  <section
    class="promo-section ptb-100"
    v-bind:class="{ 'gray-light-bg': isGray }"
  >
    <div class="container">
      <div class="row" v-show="showDesc">
        <div class="col-lg-7 col-md-10">
          <div class="section-heading">
            <h2>We Will Helps You to Build Beautiful App</h2>
            <p>
              Uniquely repurpose strategic core competencies with progressive
              content. Assertively transition ethical imperatives and
              collaborative manufactured products.
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 col-lg-4 d-flex">
          <div class="card border-0 single-promo-card p-2 mt-4 shadow">
            <div class="card-body">
              <div class="pb-2 d-flex justify-content-center">
                <img :src="require('@/assets/img/ruedaz/icon-feature-1.svg')" class="mx-auto" alt="RUEDAZ">
              </div>
              <div class="pt-2 pb-3">
                <h5>Más de 130 parqueaderos disponibles</h5>
                <p class="mb-0">
                  Disfruta de la red más amplia de parqueaderos del país.
                  ¡Puedes usarlos todos!.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4 d-flex">
          <div class="card border-0 single-promo-card p-2 mt-4 shadow">
            <div class="card-body">
              <div class="pb-2 d-flex justify-content-center">
                <img :src="require('@/assets/img/ruedaz/icon-feature-2.svg')" alt="">
              </div>
              <div class="pt-2 pb-3">
                <h5>Hasta 3 horas en cada parqueadero sin costo adicional</h5>
                <p class="mb-0">
                  El tiempo suficiente para que hagas todo lo que quieras. Luego
                  aplican las tarifas de cada parqueadero.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4 d-flex">
          <div class="card border-0 single-promo-card p-2 mt-4 shadow">
            <div class="card-body">
              <div class="pb-2 d-flex justify-content-center">
                <img :src="require('@/assets/img/ruedaz/icon-feature-3.svg')" alt="RUEDAZ">
              </div>
              <div class="pt-2 pb-3">
                <h5>Una placa por suscripción</h5>
                <p class="mb-0">
                  Ahorra tiempo y dinero suscribiendo tu vehículo. ¡Todas las
                  veces que quieras parquear!
                </p>
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
      default: false,
    },
    isGray: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style></style>
