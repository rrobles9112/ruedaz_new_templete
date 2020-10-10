<template>
    <section class="page-header-section ptb-100 bg-image full-height" image-overlay="8">
        <div class="background-image-wraper bg" style="opacity: 1;"></div>
        <div class="container">
            <div class="row align-items-center justify-content-center">
                <div class="col-12 col-md-8 col-lg-6">
                    <div class="login-signup-wrap p-5 gray-light-bg rounded shadow">
                        <div class="login-signup-header text-center">
                            <a href="/"><img src="../../assets/img/logo-color.png" class="img-fluid mb-3" alt="Logo"></a>
                            <h4 class="mb-5">Create Your Account</h4>
                        </div>
                        <form class="login-signup-form">
                            <div class="form-group">
                                <!-- Label -->
                                <label class="pb-1">
                                    Your Name
                                </label>
                                <!-- Input group -->
                                <div class="input-group input-group-merge">
                                    <div class="input-icon">
                                        <span class="ti-user"></span>
                                    </div>
                                    <input type="text" class="form-control" placeholder="Enter your name">
                                </div>
                            </div>
                            <div class="form-group">
                                <!-- Label -->
                                <label class="pb-1">
                                    Email Address
                                </label>
                                <!-- Input group -->
                                <div class="input-group input-group-merge">
                                    <div class="input-icon">
                                        <span class="ti-email"></span>
                                    </div>
                                    <input type="email" class="form-control" placeholder="name@address.com">
                                </div>
                            </div>

                            <!-- Password -->
                            <div class="form-group">
                                <!-- Label -->
                                <label class="pb-1">
                                    Password
                                </label>
                                <!-- Input group -->
                                <div class="input-group input-group-merge">
                                    <div class="input-icon">
                                        <span class="ti-lock"></span>
                                    </div>
                                    <input type="password" class="form-control" placeholder="Enter your password">
                                </div>
                            </div>

                            <div class="my-4">
                                <div class="custom-control custom-checkbox mb-3">
                                    <input type="checkbox" class="custom-control-input" id="check-terms">
                                    <label class="custom-control-label small-text" for="check-terms">I agree to the <a href="#">Terms &amp; Conditions</a></label>
                                </div>
                            </div>

                            <!-- Submit -->
                            <button class="btn btn-block btn-brand-02 border-radius mt-4 mb-3">
                                Sign up
                            </button>
                        </form>
                        <div class="other-login-signup my-3">
                            <div class="or-login-signup text-center">
                                <strong>Or Sign Up With</strong>
                            </div>
                        </div>
                        <ul class="list-inline social-login-signup text-center">
                            <li class="list-inline-item my-1">
                                <a href="#" class="btn btn-facebook"><i class="fab fa-facebook-f pr-1"></i> Facebook</a>
                            </li>
                            <li class="list-inline-item my-1">
                                <a href="#" class="btn btn-google"><i class="fab fa-google pr-1"></i> Google</a>
                            </li>
                            <li class="list-inline-item my-1">
                                <a href="#" class="btn btn-twitter"><i class="fab fa-twitter pr-1"></i> Twitter</a>
                            </li>
                        </ul>
                        <p class="text-center mb-0">Already have an account? <a href="#/login">Login</a></p>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-md-8 col-lg-6">
                    <div class="copyright-wrap small-text text-center mt-5 text-white">
                        <p class="mb-0">&copy; ThemeTags Design Agency, All rights reserved</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
    .bg {
        background: url('../../assets/img/cta-bg.jpg');
    }
</style>