<template>
    <section class="position-relative bg-image pt-100" image-overlay="8">
        <div class="background-image-wraper bg" style="opacity: 1;"></div>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-10 col-lg-9">
                    <div class="section-heading text-center text-white py-5">
                        <h1 class="text-white">The Most Uses App Platform</h1>
                        <p>Start working with that can provide everything you need to generate awareness, drive traffic, connect. Efficiently transform granular value with client-focused content. Energistically redefine market.</p>
                        <div class="action-btns mt-3">
                            <a href="#" class="btn btn-brand-03 btn-rounded mr-3">Download Now <i class="fas fa-cloud-download-alt pl-2"></i></a>
                            <a
                                @click="showYouTubeModal"
                                href="https://www.youtube.com/watch?v=1APwq1df6Mw"
                                class="popup-youtube btn btn-white btn-circle btn-icon">
                                    <i class="fas fa-play"></i>
                            </a>
                            <span class="pl-2">Watch Now</span>
                        </div>
                    </div>
                </div>
            </div>
            <!--end row-->
            <div class="row justify-content-center">
                <div class="col-sm-12 col-md-11 col-lg-9">
                    <div class="hero-animation-img">
                        <img src="../../assets/img/macbook.png" alt="shape" class="bottom-shape img-fluid">
                    </div>
                </div>
            </div>
        </div>
        <div class="shape-bottom">
            <img src="../../assets/img/curve-shape-top.svg" alt="shape" class="bottom-shape img-fluid">
        </div>

        <YTModal url="https://www.youtube.com/watch?v=1APwq1df6Mw" v-if="showModal" @close="showModal = false">
            This is my first modal
        </YTModal>
    </section>


</template>

<script>
    import YTModal from '../../components/YTModal';
    export default {
        name: "Banner",
        components: { YTModal },
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
    };
</script>

<style scoped lang="scss">
    .bg {
        background: url('../../assets/img/header-img2.jpg');
    }
</style>

