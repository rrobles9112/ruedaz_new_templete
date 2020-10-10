<template>
    <section class="promo-block ptb-100" v-bind:class="{ 'gray-light-bg' : isGray }">
        <div class="container">
            <div class="row align-items-center justify-content-between">
                <div class="col-md-6 col-lg-6">
                    <div class="promo-content-wrap">
                        <h2>We Help to Create Strategies, Design & Development</h2>
                        <p>Credibly matrix extensible sources through tactical leadership skills. Energistically strategize error-free sources vis-a-vis client-focused value. </p>
                        <ul class="check-list-wrap pt-3">
                            <li><strong>Big Data Consulting</strong> – Holisticly leverage existing tactical core competencies with error-free methods of empowerment. Holisticly foster client-centric partnerships iterate viral technologies.</li>
                            <li><strong>Machine Learning</strong> – Assertively engage backend web-readiness through efficient web services. Enthusiastically innovate frictionless e-commerce after prospective visualize user friendly synergy.</li>
                            <li><strong>Lifetime updates</strong> – Distinctively redefine top-line experiences rather than client-based infomediaries. Assertively actualize high-payoff channels rather pontificate team driven deliverables.</li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-6 col-lg-6">
                    <div class="row">
                        <div class="col-md-6 col-lg-6">
                            <div class="card border-0 single-promo-card single-promo-hover-2 p-2 mt-4">
                                <div class="card-body">
                                    <div class="pb-2">
                                        <span class="fas fa-concierge-bell icon-size-md color-secondary"></span>
                                    </div>
                                    <div class="pt-2 pb-3">
                                        <h5>Modular</h5>
                                        <p class="mb-0">All components are built to be used in combination.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-6">
                            <div class="card border-0 single-promo-card single-promo-hover-2 p-2 mt-4">
                                <div class="card-body">
                                    <div class="pb-2">
                                        <span class="fas fa-window-restore icon-size-md color-secondary"></span>
                                    </div>
                                    <div class="pt-2 pb-3">
                                        <h5>Responsive</h5>
                                        <p class="mb-0">Quick is optimized to work for most devices.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-6">
                            <div class="card border-0 single-promo-card single-promo-hover-2 p-2 mt-4">
                                <div class="card-body">
                                    <div class="pb-2">
                                        <span class="fas fa-sync-alt icon-size-md color-secondary"></span>
                                    </div>
                                    <div class="pt-2 pb-3">
                                        <h5>Scalable</h5>
                                        <p class="mb-0">Remain consistent while developing new features.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-6">
                            <div class="card border-0 single-promo-card single-promo-hover-2 p-2 mt-4">
                                <div class="card-body">
                                    <div class="pb-2">
                                        <span class="fas fa-bezier-curve icon-size-md color-secondary"></span>
                                    </div>
                                    <div class="pt-2 pb-3">
                                        <h5>Customizable</h5>
                                        <p class="mb-0">Change a few variables and the whole theme adapts.</p>
                                    </div>
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