<template>
    <section class="position-relative overflow-hidden ptb-100" v-bind:class="{ 'gray-light-bg' : isGray }">
        <div class="background-image-wraper mask-65"></div>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-9 col-lg-8">
                    <div class="section-heading text-center text-white">
                        <h2 class="text-white">The Most Uses App Platform</h2>
                        <p>Start working with that can provide everything you need to generate awareness, drive traffic, connect. Efficiently transform granular value with client-focused content. Energistically redefine market.</p>
                    </div>
                    <div class="video-promo-content my-5">
                        <a href="https://www.youtube.com/watch?v=9No-FiEInLA"
                           class="popup-youtube video-play-icon text-center m-auto">
                            <span class="ti-control-play"></span>
                        </a>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6 col-md-6 col-lg-3">
                    <div class="bg-white p-5 rounded shadow count-data text-center mt-4">
                        <span class="fas fa-users  color-primary icon-size-lg mb-2"></span>
                        <h3 class="count-number mb-1 color-secondary font-weight-bolder">21023</h3>
                        <h6 class="mb-0">Customers</h6>
                    </div>
                </div>
                <div class="col-sm-6 col-md-6 col-lg-3">
                    <div class="bg-white p-5 rounded shadow count-data text-center mt-4">
                        <span class="fas fa-cloud-download-alt  color-primary icon-size-lg mb-2"></span>
                        <h3 class="count-number mb-1 color-secondary font-weight-bolder">44023</h3>
                        <h6 class="mb-0">Downloads</h6>
                    </div>
                </div>
                <div class="col-sm-6 col-md-6 col-lg-3">
                    <div class="bg-white p-5 rounded shadow count-data text-center mt-4">
                        <span class="fas fa-smile  color-primary icon-size-lg mb-2"></span>
                        <h3 class="count-number mb-1 color-secondary font-weight-bolder">35023</h3>
                        <h6 class="mb-0">Satisfied</h6>
                    </div>
                </div>
                <div class="col-sm-6 col-md-6 col-lg-3">
                    <div class="bg-white p-5 rounded shadow count-data text-center mt-4">
                        <span class="fas fa-mug-hot  color-primary icon-size-lg mb-2"></span>
                        <h3 class="count-number mb-1 color-secondary font-weight-bolder">2323</h3>
                        <h6 class="mb-0">Cup of Coffee</h6>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Stats',
        props: {
            isGray: {
                type: Boolean,
                default: false
            }
        }
    }
</script>