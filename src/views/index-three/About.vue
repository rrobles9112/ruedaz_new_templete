<template>
    <section id="about" class="about-us ptb-100 position-relative" v-bind:class="{ 'gray-light-bg' : isGray }">
        <div class="container">
            <div class="row align-items-center justify-content-lg-between justify-content-md-center">
                <div class="col-md-5 col-lg-4">
                    <div class="about-content-right">
                        <img src="../../assets/img/app-mobile-image-2.png" alt="about us" class="img-fluid">
                    </div>
                </div>
                <div class="col-md-12 col-lg-7">
                    <div class="about-content-left section-heading">
                        <h2>Use Our App to Manage Everything.</h2>

                        <ul class="check-list-wrap pt-3">
                            <li><strong>Big Data Consulting</strong> – Holisticly leverage existing tactical core competencies with error-free methods of empowerment. Holisticly foster client-centric partnerships.</li>
                            <li><strong>Machine Learning</strong> – Assertively engage backend web-readiness through efficient web services. Enthusiastically innovate frictionless e-commerce after prospective.</li>
                            <li><strong>Artificial Intelligence</strong> – Dynamically incubate transparent technologies after cost effective action items. Competently promote user-centric sources via empowered experiences.</li>
                            <li><strong>Big Data Analytics</strong> – Quickly incubate revolutionary data and effective infomediaries. Credibly transform high standards in convergence via market positioning interfaces.</li>
                        </ul>
                        <div class="action-btns mt-4">
                            <a href="#" class="btn btn-brand-02 mr-3">Get Start Now</a>
                            <a href="#" class="btn btn-outline-brand-02">Learn More</a>
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