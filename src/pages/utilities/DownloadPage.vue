<template>
    <div>
        <nav-bar />

        <div class="main">
            <page-header
                title="Download"
                subtitle="Rapidiously deploy world-class platforms whereas collaborative interfaces. Phosfluorescently facilitate corporate."
            />
            <breadcrumb :crumbs="crumbs" />

            <section id="about" class="about-section gray-light-bg position-relative overflow-hidden ptb-100">
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
                                            <li>Tons of ../../assets</li>
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
                    <!--about us section end-->

                    <!--video section with counter start-->
                    <section class="position-relative overflow-hidden ptb-100">
                        <div class="mask-65"></div>
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-md-9 col-lg-8">
                                    <div class="section-heading text-center text-white">
                                        <h2 class="text-white">The Most Uses App Platform</h2>
                                        <p>Start working with that can provide everything you need to generate awareness, drive traffic, connect. Efficiently transform granular value with client-focused content.</p>
                                    </div>
                                    <div class="video-promo-content my-5 pb-4">
                                        <a href="#" @click="showYouTubeModal" class="popup-youtube video-play-icon text-center m-auto"><span class="ti-control-play"></span> </a>
                                    </div>
                                </div>
                                <!--end col-->
                            </div>
                            <!--end row-->
                            <div class="row justify-content-md-center justify-content-sm-center">
                                <div class="col-sm-6 col-md-6 col-lg-4">
                                    <div class="bg-white p-5 rounded text-center shadow mt-lg-0 mt-4">
                                        <div class="icon-text-wrap">
                                            <i class="fab fa-apple icon-size-md color-primary mb-2"></i>
                                            <h5>Apple Store</h5>
                                        </div>
                                        <div class="p-20px">
                                            <p class="m-0px">Seamlessly foster fully researched convergence and interactive resources administrate data.</p>
                                            <a class="btn btn-brand-02 btn-sm btn-rounded" href="#">Download Now</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-md-6 col-lg-4">
                                    <div class="bg-white p-5 rounded text-center shadow mt-lg-0 mt-4">
                                        <div class="icon-text-wrap">
                                            <i class="fab fa-google-play icon-size-md color-primary mb-2"></i>
                                            <h5>Google Play</h5>
                                        </div>
                                        <div class="p-20px">
                                            <p class="m-0px">Assertively build B2C manufactured products before front-end optimize frictionless communities tailers.</p>
                                            <a class="btn btn-brand-02 btn-sm btn-rounded" href="#">Download Now</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-md-6 col-lg-4">
                                    <div class="bg-white p-5 rounded text-center shadow mt-lg-0 mt-4">
                                        <div class="icon-text-wrap">
                                            <i class="fab fa-windows icon-size-md color-primary mb-2"></i>
                                            <h5>Microsoft Store</h5>
                                        </div>
                                        <div class="p-20px">
                                            <p class="m-0px">Completely engineer pandemic human capital via reconceptualize installed base niche markets.</p>
                                            <a class="btn btn-brand-02 btn-sm btn-rounded" href="#">Download Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <customers :padding-top="false" />
            <YTModal url="https://www.youtube.com/watch?v=1APwq1df6Mw" v-if="showModal" @close="showModal = false">
                This is my first modal
            </YTModal>
        </div>
        <site-footer />
        <copyright />
    </div>
</template>
<script>
    import YTModal from '../../components/YTModal';
    import NavBar from "../../views/commons/NavBar";
    import PageHeader from "../../views/commons/PageHeader";
    import SiteFooter from "../../views/commons/SiteFooter";
    import Copyright from "../../views/commons/Copyright";
    import Breadcrumb from "../../views/commons/Breadcrumb";
    import Customers from "../../views/commons/sections/Customers";



    export default {
        name: 'Download',
        components: { Breadcrumb, SiteFooter, PageHeader, NavBar, Copyright, Customers, YTModal },
        data: function(){
            return {
                crumbs: [
                    { 'link': '#', 'name': 'Home', 'isActive': false },
                    { 'link': '#', 'name': 'Pages', 'isActive': false },
                    { 'link': '#', 'name': 'Download', 'isActive': true }
                ],
                showModal: false
            }
        },
        methods: {
            showYouTubeModal: function(e) {
                e.preventDefault();
                this.showModal = true;
            }
        }
    }
</script>