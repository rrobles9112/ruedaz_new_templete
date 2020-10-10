<template>
    <section id="features" class="feature-section ptb-100" v-bind:class="{ 'gray-light-bg' : isGray }">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-9 col-lg-8">
                    <div class="section-heading text-center mb-5">
                        <h2>App Features</h2>
                        <p class="text-muted para-desc mb-0 mx-auto">Start working with that can provide everything you need to generate awareness, drive traffic, connect. Efficiently transform granular value with client-focused content. Energistically redefine market.</p>
                    </div>
                </div>
            </div>

            <div class="row align-items-center">
                <div class="col-lg-8 col-md-12">
                    <div class="row align-items-center">
                        <div class="col-md-6 col-12">
                            <div class="features-single-wrap mb-sm-0 mb-md-5 mb-lg-5">
                                <span class="ti-layout p-3 mr-4 mt-1 rounded-circle float-left"></span>
                                <div class="features-single-content d-block overflow-hidden">
                                    <h5 class="mb-2">Use On Any Device</h5>
                                    <p>composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 col-12">
                            <div class="features-single-wrap mb-sm-0 mb-md-5 mb-lg-5">
                                <span class="ti-themify-favicon-alt p-3 mr-4 mt-1 rounded-circle float-left"></span>
                                <div class="features-single-content d-block overflow-hidden">
                                    <h5 class="mb-2">Themify Icon</h5>
                                    <p>composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 col-12">
                            <div class="features-single-wrap mb-sm-0 mb-md-5 mb-lg-5">
                                <span class="ti-eye p-3 mr-4 mt-1 rounded-circle float-left"></span>
                                <div class="features-single-content d-block overflow-hidden">
                                    <h5 class="mb-2">Retina Ready</h5>
                                    <p>composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 col-12">
                            <div class="features-single-wrap mb-sm-0 mb-md-5 mb-lg-5">
                                <span class="ti-thumb-up p-3 mr-4 mt-1 rounded-circle float-left"></span>
                                <div class="features-single-content d-block overflow-hidden">
                                    <h5 class="mb-2">W3c Valid Code</h5>
                                    <p>composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 col-12">
                            <div class="features-single-wrap mb-sm-0 mb-md-5 mb-lg-5">
                                <span class="ti-mobile p-3 mr-4 mt-1 rounded-circle float-left"></span>
                                <div class="features-single-content d-block overflow-hidden">
                                    <h5 class="mb-2">Fully Responsive</h5>
                                    <p>composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 col-12">
                            <div class="features-single-wrap mb-sm-0 mb-md-5 mb-lg-5">
                                <span class="ti-world p-3 mr-4 mt-1 rounded-circle float-left"></span>
                                <div class="features-single-content d-block overflow-hidden">
                                    <h5 class="mb-2">Browser Compatibility</h5>
                                    <p>composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-4 col-12">
                    <img src="../../assets/img/app-mobile-image.png" class="img-fluid mx-auto d-lg-block d-none" alt="app screen">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Features',
        props: {
            isGray: {
                type: Boolean,
                default: false
            }
        }
    }
</script>