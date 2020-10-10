<template>
    <div class="overflow-hidden">
        <section id="about" class="position-relative overflow-hidden feature-section ptb-100" v-bind:class="{ 'gray-light-bg' : isGray }">
            <div class="container">
                <div class="row align-items-center justify-content-between">
                    <div class="col-md-12 col-lg-6">
                        <div class="feature-contents section-heading">
                            <h2>The Most Useful Resource Created For Designers</h2>
                            <p>
                                Objectively deliver professional value with diverse web-readiness.
                                Collaboratively transition wireless customer service without goal-oriented catalysts for
                                change. Collaboratively.
                            </p>

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

                            <div class="action-btns mt-4">
                                <a href="#" class="btn btn-brand-02 mr-3">Get Start Now</a>
                                <a href="#" class="btn btn-outline-brand-02">Learn More</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6">
                        <div class="mask-image">
                            <img src=../../assets/img/about1.jpg class="img-fluid" alt="about">
                            <div class="item-icon video-promo-content">
                                <a href="#" class="popup-youtube video-play-icon text-center m-auto" @click="showYouTubeModal"><span class="ti-control-play"></span> </a>
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
        name: 'Offerings',
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