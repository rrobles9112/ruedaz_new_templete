<template>
  <section
    id="pricing"
    class="pricing-section ptb-100"
    v-bind:class="{ 'gray-light-bg': isGray }"
  >
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-9 col-lg-8">
          <div class="section-heading text-center mb-4">
            <h2>Nuestro precios flexibles</h2>
            <p>
              Hazte a la mejor tarifa en parqueaderos
            </p>
          </div>
        </div>
      </div>
      <div
        class="row align-items-center justify-content-md-center justify-content-center"
      >
        <div class="col-12">
          <div class="d-flex justify-content-center text-center">
            <label class="pricing-switch-wrap">
              <span
                class="beforeinput year-switch"
                v-bind:class="{ 'text-success': beforeInputTextSuccess }"
                >Mensual</span
              >
              <input
                type="checkbox"
                class="d-none"
                id="js-contcheckbox"
                @change="checkChanged"
              />
              <span class="switch-icon"></span>
              <span
                class="afterinput year-switch"
                v-bind:class="{ 'text-success': afterInputTextSuccess }"
                >Anual</span
              >
            </label>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-8" v-for="(plan, index) in plans" :key="index">
          <div class="text-center bg-white single-pricing-pack mt-4">
            <div class="price-img pt-4">
              <img
                src="../../assets/img/priching-img-1.png"
                alt="price"
                width="120"
                class="img-fluid"
              />
            </div>
            <div class="py-4 border-0 pricing-header">
              <div
                class="price text-center mb-0 monthly-price color-secondary"
                v-bind:style="{ display: monthlyPriceDisplay }"
              >
                {{plan.amount.toLocaleString('es-CO', {
                style: 'currency',
                currency: 'COP',
              })}}

              </div>
              <div
                class="price text-center mb-0 yearly-price color-secondary"
                v-bind:style="{ display: yearlyPriceDisplay }"
              >
                $69
                <span>.99</span>
              </div>
            </div>
            <div class="price-name">
              <h5 class="mb-0">{{ plan.name }}</h5>
            </div>
            <div class="pricing-content">
              <ul class="list-unstyled mb-4 pricing-feature-list">
                <li v-for="(feature, indexFeatures) in plan.features" :key="indexFeatures">{{feature}}</li>
              </ul>
              <a
                href="#"
                class="btn btn-outline-brand-02 btn-rounded mb-3"
                target="_blank"
                >Mas Info</a
              >
            </div>
          </div>
        </div>



      </div>
    </div>
  </section>
</template>

<script>
import { plansCollection } from "@/firebase";
export default {
  name: "Price",
  async mounted() {
    const plansFetched = await plansCollection.get();
    let plansData = [];
    plansFetched.forEach((doc)=>{
      plansData.push(doc.data());
    })
    this.plans = plansData
  },
  props: {
    isGray: {
      type: Boolean,
      default: false,
    },
  },
  data: function() {
    return {
      monthlyPriceDisplay: "block",
      yearlyPriceDisplay: "none",
      plans:[],
      afterInputTextSuccess: false,
      beforeInputTextSuccess: true,
    };
  },
  methods: {
    checkChanged: function(e) {
      if (e.srcElement.checked) {
        this.monthlyPriceDisplay = "none";
        this.yearlyPriceDisplay = "block";
        this.afterInputTextSuccess = true;
        this.beforeInputTextSuccess = false;
      } else {
        this.monthlyPriceDisplay = "block";
        this.yearlyPriceDisplay = "none";
        this.afterInputTextSuccess = false;
        this.beforeInputTextSuccess = true;
      }
    },
  },
};
</script>

<style></style>
