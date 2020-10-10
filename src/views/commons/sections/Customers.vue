<template>
    <section class="client-section" v-bind:class="{ 'gray-light-bg' : isGray, 'pb-100': paddingBottom, 'pt-100': paddingTop  }">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="section-heading text-center mb-5">
                      <h2>Our Valuable Customers</h2>
                      <p>
                        Rapidiously morph transparent internal or sources whereas resource
                        sucking e-business. Conveniently innovate compelling internal.
                      </p>
                    </div>
                </div>
            </div>

            <div class="row align-items-center">
                <div class="col-md-12">
                    <carousel
                        :items="1"
                        :nav="false"
                        :autoplay="true"
                        :dots="false"
                        :loop="true"
                        :margin="15"
                        slideTransition="linear"
                        :autoplayTimeout="4000"
                        :autoplaySpeed="false"
                        :smartSpeed="6000"
                        :responsive="{0:{items: 2},500: {items: 3},600: {items: 4},800: {items: 5},1200: {items: 6}}"
                        class="owl-theme clients-carousel dot-indicator owl-loaded owl-drag">

                        <div class="item single-customer">
                            <img
                                src="../../../assets/img/customers/clients-logo-01.png"
                                alt="client logo"
                                class="customer-logo"
                            />
                        </div>
                        <div class="item single-customer">
                            <img
                                src="../../../assets/img/customers/clients-logo-02.png"
                                alt="client logo"
                                class="customer-logo"
                            />
                        </div>
                        <div class="item single-customer">
                            <img
                                src="../../../assets/img/customers/clients-logo-03.png"
                                alt="client logo"
                                class="customer-logo"
                            />
                        </div>
                        <div class="item single-customer">
                            <img
                                src="../../../assets/img/customers/clients-logo-04.png"
                                alt="client logo"
                                class="customer-logo"
                            />
                        </div>
                        <div class="item single-customer">
                            <img
                                src="../../../assets/img/customers/clients-logo-05.png"
                                alt="client logo"
                                class="customer-logo"
                            />
                        </div>
                        <div class="item single-customer">
                            <img
                                src="../../../assets/img/customers/clients-logo-06.png"
                                alt="client logo"
                                class="customer-logo"
                            />
                        </div>
                        <div class="item single-customer">
                            <img
                                src="../../../assets/img/customers/clients-logo-07.png"
                                alt="client logo"
                                class="customer-logo"
                            />
                        </div>
                        <div class="item single-customer">
                            <img
                                src="../../../assets/img/customers/clients-logo-08.png"
                                alt="client logo"
                                class="customer-logo"
                            />
                        </div>
                </carousel>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import carousel from "vue-owl-carousel";
    export default {
        name: "Customer",
        components: { carousel },
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
        }
    };
</script>

