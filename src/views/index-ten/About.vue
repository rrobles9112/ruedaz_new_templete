<template>
    <section id="about" class="about-section position-relative overflow-hidden ptb-100" v-bind:class="{ 'gray-light-bg' : isGray }">
        <div class="container">
            <div class="row align-items-center justify-content-between">
                <div class="col-md-6 col-lg-6">
                    <div class="image-wrap">
                        <img class="img-fluid" src="../../assets/img/mobile-pana.svg" alt="animation image">
                    </div>
                </div>
                <div class="col-md-12 col-lg-6">
                    <div class="feature-contents section-heading">
                        <h2>The Most Useful Resource Created For Designers</h2>
                        <p>Objectively deliver professional value with diverse web-readiness.
                            Collaboratively transition wireless customer service without goal-oriented catalysts for
                            change. Collaboratively.</p>

                        <ul class="check-list-wrap list-two-col py-3">
                            <li>Data driven quality review</li>
                            <li>Secure work environment</li>
                            <li>24x7 coverage</li>
                            <li>Lifetime updates</li>
                            <li>Management team</li>
                            <li>Tech support</li>
                            <li>Integration ready</li>
                            <li>Tons of assets</li>
                            <li>Compliance driven process</li>
                            <li>Workforce management</li>
                        </ul>
                        <div class="row pt-4">
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
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'About',
        props: {
            isGray: {
                type: Boolean,
                default: false
            }
        }
    }
</script>