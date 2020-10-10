<template>
    <section class="ptb-100 hero-bg-shape">
        <div class="container">
            <div class="row align-items-center justify-content-lg-between justify-content-md-center justify-content-sm-center">
                <div class="col-md-12 col-lg-6">
                    <div class="hero-slider-content text-white py-5">
                        <h1 class="text-white">Best Way to Connect with Customers</h1>
                        <p class="lead">Holisticly procrastinate mission-critical convergence with reliable customer service. Assertively underwhelm idea-sharing for impactful solutions.</p>

                        <div class="action-btns mt-3">
                            <a href="#" class="btn btn-brand-03 btn-rounded mr-3">Download Now <i class="fas fa-cloud-download-alt pl-2"></i></a>
                            <a href="#" @click="showYouTubeModal" class="popup-youtube btn btn-white btn-circle btn-icon"><i class="fas fa-play"></i> </a> <span class="pl-2">Watch Now</span>
                        </div>
                        <div class="hero-counter mt-5">
                            <div class="row">
                                <div class="col-6 col-sm-4">
                                    <div class="counter-item d-flex align-items-center">
                                        <div class="single-counter-item">
                                            <span class="h4 count-number text-white">672,086</span>
                                            <h6 class="text-white mb-0">Total Install</h6>
                                        </div>
                                        <span class="color-6 ml-2 p-2 rounded-circle">
                                            <i class="fas fa-arrow-up icon-sm"></i>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-6 col-sm-4">
                                    <div class="counter-item d-flex align-items-center">
                                        <div class="single-counter-item">
                                            <span class="h4 count-number text-white">143,870</span>
                                            <h6 class="text-white mb-0">Total Download</h6>
                                        </div>
                                        <span class="color-6 ml-2 p-2 rounded-circle">
                                            <i class="fas fa-arrow-up icon-sm"></i>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-6 col-sm-4">
                                    <div class="counter-item d-flex align-items-center">
                                        <div class="single-counter-item">
                                            <span class="h4 count-number text-white">31,191</span>
                                            <h6 class="text-white mb-0">Active Users</h6>
                                        </div>
                                        <span class="color-6 ml-2 p-2 rounded-circle">
                                            <i class="fas fa-arrow-up icon-sm"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-7 col-sm-9 col-lg-5">
                    <submit-quote />
                </div>
            </div>
        </div>
        <YTModal url="https://www.youtube.com/watch?v=1APwq1df6Mw" v-if="showModal" @close="showModal = false">
            This is my first modal
        </YTModal>
    </section>
</template>
<script>
    import YTModal from '../../components/YTModal';

    import SubmitQuote from './SubmitQuote';
    export default {
        components: { SubmitQuote, YTModal },
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