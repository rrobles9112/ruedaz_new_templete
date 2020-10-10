<template>
    <div class="main">

        <div class="main">

            <!--coming soon section start-->
            <section class="ptb-100 bg-image full-height" image-overlay="8">
                <div class="background-image-wraper bg" style="opacity: 1;"></div>
                <div class="container">
                    <div class="row align-items-center justify-content-center">
                        <div class="col-12 col-md-9 col-lg-7">
                            <div class="hero-content-left text-white text-center">
                                <h1 class="text-white">We're Coming Soon</h1>
                                <p class="lead">Our website is under construction. We'll be here soon with our new awesome site, subscribe to be notified.</p>
                                <div id="clock" class="countdown-wrap my-4">
                                    <vue-countdown :time="2 * 365 * 24 * 60 * 60 * 1000" class="countdown-wrap my-4">
                                        <template slot-scope="props">
                                            <div class="row">
                                                <div class="col">
                                                    <h2 class="mb-0">{{ props.days }}</h2>
                                                    <h5 class="mb-0">Day</h5>
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
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-12 col-md-5 col-lg-5">
                            <form class="newsletter-form position-relative">
                                <input type="text" class="input-newsletter form-control" placeholder="Enter your email" name="email" required="" autocomplete="off">
                                <button type="submit" class="disabled">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <!--coming soon section end-->

        </div>

    </div>
</template>

<script>
    import VueCountdown from '@chenfengyuan/vue-countdown';

    export default {
        components: { VueCountdown }
    }
</script>

<style lang="scss">
    .bg {
        background: url('../../assets/img/cta-bg.jpg');
    }
</style>