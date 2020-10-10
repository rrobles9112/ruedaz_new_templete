<template>
    <div class="overflow-hidden">
        <section class="position-relative overflow-hidden ptb-100" v-bind:class="{ 'gray-light-bg' : isGray }">
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
            <YTModal url="https://www.youtube.com/watch?v=1APwq1df6Mw" v-if="showModal" @close="showModal = false">
                This is my first modal
            </YTModal>
        </section>
    </div>
</template>

<script>
    import YTModal from '../../components/YTModal';

    export default {
        name: 'Platform',
        components: { YTModal },
        props: {
            isGray: {
                type: Boolean,
                default: false
            }
        },
        data: function(){
            return {
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