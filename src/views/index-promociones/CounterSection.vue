<template>
  <section class="counter-section gradient-bg ptb-40">
    <div class="container">
      <div class="row">
        <div class="col-sm-6 col-md-6 col-lg-3">
          <div class="text-white p-2 count-data text-center my-3">
            <span class="fas fa-users icon-size-lg mb-2"></span>
            <h3 class="count-number mb-1 text-white font-weight-bolder">
              <!-- 21023 -->
              <animated-number
                :value="customers"
                :formatValue="formatCustomers"
                :duration="duration"
              />
            </h3>
            <span>Customers</span>
          </div>
        </div>
        <div class="col-sm-6 col-md-6 col-lg-3">
          <div class="text-white p-2 count-data text-center my-3">
            <span class="fas fa-cloud-download-alt icon-size-lg mb-2"></span>
            <h3 class="count-number mb-1 text-white font-weight-bolder">
              <!-- 44023 -->
              <animated-number
                :value="downloads"
                :formatValue="formatDownloads"
                :duration="duration"
              />
            </h3>
            <span>Downloads</span>
          </div>
        </div>
        <div class="col-sm-6 col-md-6 col-lg-3">
          <div class="text-white p-2 count-data text-center my-3">
            <span class="fas fa-smile icon-size-lg mb-2"></span>
            <h3 class="count-number mb-1 text-white font-weight-bolder">
              <!-- 35023 -->
              <animated-number
                :value="satisfied"
                :formatValue="formatSatisfied"
                :duration="duration"
              />
            </h3>
            <span>Satisfied</span>
          </div>
        </div>
        <div class="col-sm-6 col-md-6 col-lg-3">
          <div class="text-white p-2 count-data text-center my-3">
            <span class="fas fa-mug-hot icon-size-lg mb-2"></span>
            <h3 class="count-number mb-1 text-white font-weight-bolder">
              <!-- 2323 -->
              <animated-number
                :value="cupCoffee"
                :formatValue="formatCupCoffee"
                :duration="duration"
              />
            </h3>
            <span>Cup of Coffee</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AnimatedNumber from "animated-number-vue";
export default {
  name: "CounterSection",
  components: {
    AnimatedNumber,
  },
  data() {
    return {
      value: 0,
      customers: 21023,
      downloads: 35023,
      satisfied: 35023,
      cupCoffee: 2323,
      duration: 2
    };
  },
  methods: {
    formatCustomers(customers) {
      return `${Number(customers).toFixed(0)}`;
    },
    formatDownloads(downloads) {
      return `${Number(downloads).toFixed(0)}`;
    },
    formatSatisfied(satisfied) {
      return `${Number(satisfied).toFixed(0)}`;
    },
    formatCupCoffee(cupCoffee) {
      return `${Number(cupCoffee).toFixed(0)}`;
    },
  },
};
</script>

<style></style>
