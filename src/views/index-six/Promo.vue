<template>
    <section class="promo-block ptb-100" v-bind:class="{ 'gray-light-bg' : isGray }">
        <div class="container">
            <div class="row justify-content-md-center">
                <div class="col-lg-4 col-md-6">
                    <div class="promo-one-single rounded p-5 my-3 my-md-3 my-lg-0 shadow-lg text-center">
                        <img src="../../assets/img/app-icon-4.svg" alt="promo" class="mb-3" width="100">
                        <h5>Advertising Agency</h5>
                        <p class="mb-0">Intrinsicly create 2.0 testing procedures rather than interdependent
                            schemas. Quickly.</p>
                        <a href="#" class="icon-link accent-bg"><span class="ti-angle-double-right"></span></a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="promo-one-single rounded p-5 my-3 my-md-3 my-lg-0 shadow-lg text-center">
                        <img src="../../assets/img/app-icon-5.svg" alt="promo" class="mb-3" width="100">
                        <h5>Creative Business</h5>
                        <p class="mb-0">Conveniently myocardinate efficient opportunities rather than
                            distributed catalysts for change.</p>
                        <a href="#" class="icon-link accent-bg"><span class="ti-angle-double-right"></span></a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="promo-one-single rounded p-5 my-3 my-md-3 my-lg-0 shadow-lg text-center">
                        <img src="../../assets/img/app-icon-6.svg" alt="promo" class="mb-3" width="100">
                        <h5>Total SEO Services</h5>
                        <p class="mb-0">Quickly expedite cross-media information rather than open-source
                            metrics maintain.</p>
                        <a href="#" class="icon-link accent-bg"><span class="ti-angle-double-right"></span></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    export default {
        name: 'Promo',
        props: {
            isGray: {
                type: Boolean,
                default: false
            }
        }
    }
</script>