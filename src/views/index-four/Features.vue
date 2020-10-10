<template>
    <div id="features" class="feature-section ptb-100" v-bind:class="{ 'gray-light-bg' : isGray }">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-9 col-lg-9">
                    <div class="section-heading text-center mb-5">
                        <h2>Quick &amp; Easy Process With Best Features</h2>
                        <p>Objectively deliver professional value with diverse web-readiness.
                            Collaboratively transition wireless customer service without goal-oriented catalysts for
                            change. Collaboratively.</p>
                    </div>
                </div>
            </div>

            <div class="row align-items-center justify-content-md-center">
                <div class="col-lg-4 col-md-12">
                    <div class="row">
                        <div class="col-12">
                            <div class="d-flex align-items-start mb-sm-0 mb-md-5 mb-lg-5">
                                <img src="../../assets/img/app-icon-3.svg" alt="app icon" width="50" class="img-fluid mr-3">
                                <div class="icon-text">
                                    <h5 class="mb-2">Responsive web design</h5>
                                    <p>Modular and interchangable componente between layouts and even demos.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="d-flex align-items-start mb-sm-0 mb-md-5 mb-lg-5">
                                <img src="../../assets/img/app-icon-4.svg" alt="app icon" width="50" class="img-fluid mr-3">
                                <div class="icon-text">
                                    <h5 class="mb-2">Loaded with features</h5>
                                    <p>Modular and interchangable componente between layouts and even demos.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="d-flex align-items-start mb-sm-0 mb-md-5 mb-lg-5">
                                <img src="../../assets/img/app-icon-5.svg" alt="app icon" width="50" class="img-fluid mr-3">
                                <div class="icon-text">
                                    <h5 class="mb-2">Friendly online support</h5>
                                    <p>Modular and interchangable componente between layouts and even demos.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-5 d-none d-sm-none d-md-block d-lg-block">
                    <div class="position-relative pb-md-5 py-lg-0">
                        <img alt="Image placeholder" src="../../assets/img/app-mobile-image.png" class="img-center img-fluid" />
                    </div>
                </div>
                <div class="col-lg-4 col-md-12">
                    <div class="row">
                        <div class="col-12">
                            <div class="d-flex align-items-start mb-sm-0 mb-md-5 mb-lg-5">
                                <img src="../../assets/img/app-icon-7.svg" alt="app icon" width="50" class="img-fluid mr-3">
                                <div class="icon-text">
                                    <h5 class="mb-2">Free updates forever</h5>
                                    <p>Modular and interchangable componente between layouts and even demos.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="d-flex align-items-start mb-sm-0 mb-md-5 mb-lg-5">
                                <img src="../../assets/img/app-icon-8.svg" alt="app icon" width="50" class="img-fluid mr-3">
                                <div class="icon-text">
                                    <h5 class="mb-2">Built with Sass</h5>
                                    <p>Modular and interchangable componente between layouts and even demos.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="d-flex align-items-start mb-sm-0 mb-md-5 mb-lg-5">
                                <img src="../../assets/img/app-icon-9.svg" alt="app icon" width="50" class="img-fluid mr-3">
                                <div class="icon-text">
                                    <h5 class="mb-2">Infinite colors</h5>
                                    <p>Modular and interchangable componente between layouts and even demos.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Features",
        props: {
            isGray: {
                type: Boolean,
                default: false
            }
        }
    }
</script>
