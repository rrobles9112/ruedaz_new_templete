<template>
    <section class="ptb-100 bg-image" image-overlay="8">
        <div class="background-image-wraper bg" style="opacity: 1;"></div>
        <div class="animated-shape-wrap">
            <div class="animated-shape-item"></div>
            <div class="animated-shape-item"></div>
            <div class="animated-shape-item"></div>
            <div class="animated-shape-item"></div>
            <div class="animated-shape-item"></div>
        </div>
        <div class="container">
            <div class="row align-items-center justify-content-lg-between justify-content-md-center justify-content-sm-center">
                <div class="col-md-12 col-lg-6">
                    <div class="hero-slider-content text-white py-5">
                        <h1 class="text-white">Best Way to Connect with Your Customers</h1>
                        <p class="lead">Holisticly procrastinate mission-critical convergence with reliable customer service. Assertively underwhelm idea-sharing for impactful solutions.</p>
                        <div id="clock" class="hero-countdown-wrap my-4 text-center">

                            <vue-countdown :time="2 * 365 * 24 * 60 * 60 * 1000" class="my-4">
                                <template slot-scope="props">
                                    <div class="row">
                                        <div class="col">
                                            <h2 class="mb-0">{{ props.days }}</h2>
                                            <h5 class="mb-0">Days</h5>
                                        </div>
                                        <div class="col">
                                            <h2 class="mb-0">{{ props.hours }}</h2>
                                            <h5 class="mb-0">Hours</h5>
                                        </div>
                                        <div class="col">
                                            <h2 class="mb-0">{{ props.minutes }}</h2>
                                            <h5 class="mb-0">Minutes</h5>
                                        </div>
                                        <div class="col">
                                            <h2 class="mb-0">{{ props.seconds }}</h2>
                                            <h5 class="mb-0">Seconds</h5>
                                        </div>
                                    </div>

                                </template>
                            </vue-countdown>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="discount-banner bg-white rounded text-center">
                        <p class="lead">Join our Newsletter It's Free and Get offer discount on your first project</p>
                        <h2 class="color-accent">20%</h2>
                        <form action="#" method="post" class="subscribe-form subscribe-form-footer">
                            <div class="d-flex align-items-center">
                                <input type="text" class="form-control input" id="email-subscribe" name="email" placeholder="info@yourdomain.com">
                            </div>
                        </form>
                        <a href="#" class="btn btn-brand-01 mt-4 d-block">Subscribe Now</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import VueCountdown from '@chenfengyuan/vue-countdown';

    export default {
        components: { VueCountdown }
    }
</script>
<style scoped lang="scss">
    .bg {
        background: url('../../assets/img/cta-bg.jpg')no-repeat center center / cover fixed;
    }
</style>