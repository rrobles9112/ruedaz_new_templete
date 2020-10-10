<template>
    <section id="pricing" class="pricing-section ptb-100" v-bind:class="{ 'gray-light-bg' : isGray }">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-9 col-lg-8">
                    <div class="section-heading text-center mb-4">
                        <h2>Our Flexible Price</h2>
                        <p>
                            Professional hosting at an affordable price. Distinctively recaptiualize principle-centered
                            core competencies through client-centered
                            core competencies.
                        </p>
                    </div>
                </div>
            </div>
            <div class="row align-items-center justify-content-md-center justify-content-center">
                <div class="col-12">
                    <div class="d-flex justify-content-center text-center">
                        <label class="pricing-switch-wrap">
                            <span class="beforeinput year-switch" v-bind:class="{ 'text-success' : beforeInputTextSuccess }">Monthly</span>
                            <input type="checkbox" class="d-none" id="js-contcheckbox" @change="checkChanged" />
                            <span class="switch-icon"></span>
                            <span class="afterinput year-switch"  v-bind:class="{ 'text-success' : afterInputTextSuccess }">Yearly</span>
                        </label>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-8">
                    <div class="text-center bg-white single-pricing-pack mt-4">
                        <div class="price-img pt-4">
                            <img src="../../assets/img/priching-img-1.png" alt="price" width="120" class="img-fluid" />
                        </div>
                        <div class="py-4 border-0 pricing-header">
                            <div
                                class="price text-center mb-0 monthly-price color-secondary"
                                v-bind:style="{ display: monthlyPriceDisplay }">
                                $19
                                <span>.99</span>
                            </div>
                            <div
                                class="price text-center mb-0 yearly-price color-secondary"
                                v-bind:style="{ display: yearlyPriceDisplay }">
                                $69
                                <span>.99</span>
                            </div>
                        </div>
                        <div class="price-name">
                            <h5 class="mb-0">Standard</h5>
                        </div>
                        <div class="pricing-content">
                            <ul class="list-unstyled mb-4 pricing-feature-list">
                                <li>
                                    <span>Limited</span> access for a month
                                </li>
                                <li>
                                    <span>15</span> customize sub page
                                </li>
                                <li class="text-deem">
                                    <span>105</span> disk space
                                </li>
                                <li class="text-deem">
                                    <span>3</span> domain access
                                </li>
                                <li class="text-deem">24/7 phone support</li>
                            </ul>
                            <a
                                href="#"
                                class="btn btn-outline-brand-02 btn-rounded mb-3"
                                target="_blank">Purchase now</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-8">
                    <div class="popular-price bg-white text-center single-pricing-pack mt-4">
                    <div class="price-img pt-4">
                        <img src="../../assets/img/priching-img-2.png" alt="price" width="120" class="img-fluid" />
                    </div>
                    <div class="py-4 border-0 pricing-header">
                        <div
                            class="price text-center mb-0 monthly-price color-secondary"
                            v-bind:style="{ display: monthlyPriceDisplay }">
                            $49
                            <span>.99</span>
                        </div>
                        <div
                            class="price text-center mb-0 yearly-price color-secondary"
                            v-bind:style="{ display: yearlyPriceDisplay }">
                            $159
                            <span>.99</span>
                        </div>
                    </div>
                    <div class="price-name">
                        <h5 class="mb-0">Premium</h5>
                    </div>
                    <div class="pricing-content">
                        <ul class="list-unstyled mb-4 pricing-feature-list">
                          <li>
                              <span>Unlimited</span> access for a month
                          </li>
                          <li>
                              <span>25</span> customize sub page
                          </li>
                          <li>
                              <span>150</span> disk space
                          </li>
                          <li class="text-deem">
                              <span>5</span> domain access
                          </li>
                          <li class="text-deem">24/7 phone support</li>
                      </ul>
                      <a href="#" class="btn btn-brand-02 btn-rounded mb-3" target="_blank">Purchase now</a>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-8">
                    <div class="text-center bg-white single-pricing-pack mt-4">
                        <div class="price-img pt-4">
                      <img src="../../assets/img/priching-img-3.png" alt="price" width="120" class="img-fluid" />
                    </div>
                        <div class="py-4 border-0 pricing-header">
                      <div
                        class="price text-center mb-0 monthly-price color-secondary"
                        v-bind:style="{ display: monthlyPriceDisplay }"
                      >
                        $69
                        <span>.99</span>
                      </div>
                      <div
                        class="price text-center mb-0 yearly-price color-secondary"
                        v-bind:style="{ display: yearlyPriceDisplay }"
                      >
                        $259
                        <span>.99</span>
                      </div>
                    </div>
                        <div class="price-name">
                            <h5 class="mb-0">Unlimited</h5>
                        </div>
                        <div class="pricing-content">
                      <ul class="list-unstyled mb-4 pricing-feature-list">
                        <li>
                          <span>Limited</span> access for a month
                        </li>
                        <li>
                          <span>15</span> customize sub page
                        </li>
                        <li>
                          <span>120</span> disk space
                        </li>
                        <li>
                          <span>5</span> domain access
                        </li>
                        <li>24/7 phone support</li>
                      </ul>
                      <a
                        href="#"
                        class="btn btn-outline-brand-02 btn-rounded mb-3"
                        target="_blank"
                      >Purchase now</a>
                    </div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="support-cta text-center mt-5">
                        <h5 class="mb-1">
                            <span class="ti-headphone-alt color-primary mr-3"></span>We're Here to Help You
                        </h5>
                        <p>
                            Have some questions?
                            <a href="#">Chat with us now</a>, or
                            <a href="#">send us an email</a> to get in touch.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Price",
    props: {
        isGray: {
            type: Boolean,
            default: false
        },
    },
    data: function() {
        return {
            monthlyPriceDisplay: 'block',
            yearlyPriceDisplay: 'none',
            afterInputTextSuccess: false,
            beforeInputTextSuccess: true
        };
    },
    methods: {
        checkChanged: function(e) {
            if (e.srcElement.checked) {
                this.monthlyPriceDisplay = 'none';
                this.yearlyPriceDisplay = 'block';
                this.afterInputTextSuccess = true;
                this.beforeInputTextSuccess = false;
            } else {
               this.monthlyPriceDisplay = 'block';
               this.yearlyPriceDisplay = 'none';
               this.afterInputTextSuccess = false;
               this.beforeInputTextSuccess = true;
            }
        }
    }

};
</script>

<style>
</style>