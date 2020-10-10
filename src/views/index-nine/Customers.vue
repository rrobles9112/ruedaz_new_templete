<template>
    <section class="client-section ptb-60" v-bind:class="{ 'gray-light-bg' : isGray }">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-12">
                    <carousel
                        :autoplay="true"
                        :loop="true"
                        :margin="15"
                        :dots="false"
                        :nav="false"
                        :autoplayTimeout="4500"
                        slideTransition="linear"
                        :responsive="{0: {items: 2},500: {items: 3},600: {items: 4},800: {items: 5},1200: {items: 6}}"
                        class="owl-theme clients-carousel-2 dot-indicator">

                        <div class="item single-customer">
                            <img src="../../assets/img/customers/clients-logo-01.png" alt="client logo" class="customer-logo" />
                        </div>
                        <div class="item single-customer">
                            <img src="../../assets/img/customers/clients-logo-02.png" alt="client logo" class="customer-logo" />
                        </div>
                        <div class="item single-customer">
                            <img src="../../assets/img/customers/clients-logo-03.png" alt="client logo" class="customer-logo" />
                        </div>
                        <div class="item single-customer">
                            <img src="../../assets/img/customers/clients-logo-04.png" alt="client logo" class="customer-logo" />
                        </div>
                        <div class="item single-customer">
                            <img src="../../assets/img/customers/clients-logo-05.png" alt="client logo" class="customer-logo" />
                        </div>
                        <div class="item single-customer">
                            <img src="../../assets/img/customers/clients-logo-06.png" alt="client logo" class="customer-logo" />
                        </div>
                        <div class="item single-customer">
                            <img src="../../assets/img/customers/clients-logo-07.png" alt="client logo" class="customer-logo" />
                        </div>
                        <div class="item single-customer">
                            <img src="../../assets/img/customers/clients-logo-08.png" alt="client logo" class="customer-logo" />
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
            }
        }
    };
</script>