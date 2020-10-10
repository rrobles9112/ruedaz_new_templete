<template>
    <section class="position-relative feature-section ptb-100" v-bind:class="{ 'gray-light-bg' : isGray }">
        <div class="container">
            <div class="row align-items-center justify-content-between">
                <div class="col-md-12 col-lg-6">
                    <div class="feature-contents section-heading">
                        <h2>Share Your Photos With Friends Easily</h2>
                        <p>Objectively deliver professional value with diverse web-readiness.
                            Collaboratively transition wireless customer service without goal-oriented catalysts for
                            change. Collaboratively.</p>
                        <p>Uniquely simplify sustainable applications whereas adaptive schemas. Competently brand performance based content and.</p>
                        <ul class="dot-circle pt-2">
                            <li>The only way your business can to the information.</li>
                            <li>Your app will be used by a host and for different.</li>
                            <li>Intrinsicly innovate top-line collaborative benefits. </li>
                            <li>Efficiently redefine value-added sources without.</li>
                        </ul>
                        <div class="row pt-3">
                            <div class="col-4 col-lg-3 border-right">
                                <div class="count-data text-center">
                                    <h4 class="count-number mb-0 color-primary font-weight-bold">1023</h4>
                                    <span>Customers</span>
                                </div>
                            </div>
                            <div class="col-4 col-lg-3 border-right">
                                <div class="count-data text-center">
                                    <h4 class="count-number mb-0 color-primary font-weight-bold">5470</h4>
                                    <span>Downloads</span>
                                </div>
                            </div>
                            <div class="col-4 col-lg-3 border-right">
                                <div class="count-data text-center">
                                    <h4 class="count-number mb-0 color-primary font-weight-bold">3560</h4>
                                    <span>Satisfied</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-6">
                    <div class="download-img">
                        <img src="../../assets/img/mobile-pana.svg" alt="download" class="img-fluid">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'SharePhotos',
        props: {
            isGray: {
                type: Boolean,
                default: false
            }
        }
    }
</script>