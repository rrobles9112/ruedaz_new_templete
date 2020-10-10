<template>
    <section class="promo-section ptb-100 position-relative overflow-hidden" v-bind:class="{ 'gray-light-bg' : isGray }">
        <div class="effect-2 opacity-1">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 463.6 616" style="enable-background:new 0 0 463.6 616;" xml:space="preserve" class="injected-svg svg_img dark-color">
                    <path d="M148.4,608.3C25.7,572.5-3.5,442.2,0.3,375.8s24.8-117,124.8-166.5s125.7-77.4,165-129.6 c43.2-57.4,96.5-94.4,127.9-73c63,43,53.9,280,14,358s-68.9,75.5-98.9,118.7S271,644,148.4,608.3z"></path>
                </svg>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-lg-7 col-md-10">
                    <div class="section-heading">
                        <h2>We Will Helps You to Build Beautiful App</h2>
                        <p>Uniquely repurpose strategic core competencies with progressive content. Assertively transition ethical imperatives and collaborative manufactured products. </p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 col-lg-3">
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
                <div class="col-md-6 col-lg-3">
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
                <div class="col-md-6 col-lg-3">
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
                <div class="col-md-6 col-lg-3">
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
