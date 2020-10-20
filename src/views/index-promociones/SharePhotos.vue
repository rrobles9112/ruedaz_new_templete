<template>
    <section class="position-relative feature-section ptb-100" v-bind:class="{ 'gray-light-bg' : isGray }">
        <div class="container">
            <div
                class="row align-items-center justify-content-between justify-content-sm-center justify-content-md-center">
                <div class="col-sm-5 col-md-6 col-lg-6 mb-5 mb-md-5 mb-sm-5 mb-lg-0">
                    <div class="download-img">
                        <img src="../../assets/img/about-us.png" alt="download" class="img-fluid" />
                    </div>
                </div>
                <div class="col-md-12 col-lg-6">
                    <div class="feature-contents">
                        <h2>Share Your Photos With Friends Easily</h2>
                        <p>
                            Objectively deliver professional value with diverse web-readiness.
                            Collaboratively transition wireless customer service without goal-oriented catalysts for
                            change. Collaboratively.
                        </p>
                        <p>Uniquely simplify sustainable applications whereas adaptive schemas. Competently brand performance based content and.</p>
                        <ul class="dot-circle pt-2">
                            <li>The only way your business can evolve is in information.</li>
                            <li>Your app will be used by a host and for different.</li>
                            <li>Intrinsicly innovate top-line expertise benefits.</li>
                            <li>Efficiently redefine value-added internal sources without.</li>
                        </ul>

                        <div class="action-btns mt-4">
                            <a href="#" class="btn btn-brand-02 mr-3">Get Start Now</a>
                            <a href="#" class="btn btn-outline-brand-02">More About Us</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
    export default {
        name: 'SharePhotos',
        props: {
            isGray: {
                type: Boolean,
                default: false
            }
        }
    }
</script>