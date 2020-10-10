<template>
    <section id="contact" class="contact-us-section ptb-100" v-bind:class="{ 'gray-light-bg' : isGray }">
        <div class="container">
            <div class="row justify-content-around">
                <div class="col-12 pb-3 message-box"
                     v-bind:class="{ 'd-none': !isSuccess && !hasError, 'd-block': isSuccess || hasError }">
                    <div class="alert" v-bind:class="{ 'alert-danger': hasError, 'alert-success': isSuccess}">{{ alertText }}</div>
                </div>
                <div class="col-md-12 col-lg-5 mb-5 mb-md-5 mb-sm-5 mb-lg-0">
                    <div class="contact-us-form gray-light-bg rounded p-5">
                        <h4>Ready to get started?</h4>
                        <form v-on:submit="submit" id="contactForm" class="contact-us-form">
                            <div class="form-row">
                                <div class="col-12">
                                    <div class="form-group">
                                        <input
                                            type="text"
                                            class="form-control"
                                            name="name"
                                            placeholder="Enter name"
                                            required="required"
                                            v-model="name"
                                        />
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group">
                                        <input
                                            type="email"
                                            class="form-control"
                                            name="email"
                                            placeholder="Enter email"
                                            required="required"
                                            v-model="email"
                                        />
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group">
                                        <textarea
                                            name="message"
                                            id="message"
                                            class="form-control"
                                            rows="7"
                                            cols="25"
                                            placeholder="Message"
                                            v-model="message"
                                        ></textarea>
                                    </div>
                                </div>
                                <div class="col-sm-12 mt-3">
                                    <button type="submit" class="btn btn-brand-02" id="btnContactUs">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-md-12 col-lg-6">
                    <div class="contact-us-content">
                        <h2>Looking for a excellent Business idea?</h2>
                        <p  class="lead">Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days.</p>
                        <a href="#" class="btn btn-outline-brand-01 align-items-center">
                            Get Directions
                            <span class="ti-arrow-right pl-2"></span>
                        </a>
                        <hr class="my-5" />
                        <ul class="contact-info-list">
                            <li class="d-flex pb-3">
                                <div class="contact-icon mr-3">
                                    <span class="fas fa-location-arrow color-primary rounded-circle p-3"></span>
                                </div>
                                <div class="contact-text">
                                    <h5 class="mb-1">Company Location</h5>
                                    <p>100 Yellow House, Mn Factory, United State, 13420</p>
                                </div>
                            </li>
                            <li class="d-flex pb-3">
                                <div class="contact-icon mr-3">
                                    <span class="fas fa-envelope color-primary rounded-circle p-3"></span>
                                </div>
                                <div class="contact-text">
                                    <h5 class="mb-1">Email Address</h5>
                                    <p>hello@yourdomain.com</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
    export default {
        name: 'Contact',
        props: {
            isGray: {
                type: Boolean,
                default: false
            }
        },
        data(){
            return {
                email: '',
                message: '',
                name: '',
                alertText: '',
                hasError: false,
                isSuccess: false
            };

        },
        methods: {
            submit: function(e) {

                e.preventDefault();


                let formData = new FormData();
                formData.append('name', this.name);
                formData.append('message', this.message);
                formData.append('email', this.email);

                fetch("/php/contact-form-process.php", {
                        body: formData,
                        method: "POST"
                }).then(response => {
                    if (response.status === 200) {
                        this.name = '';
                        this.message = '';
                        this.email = '';
                        this.alertText = 'Form submitted successfully';
                        this.hasError = false;
                        this.isSuccess = true;
                    } else {
                        this.alertText = 'Found error in the form. Please check again.';
                        this.isSuccess = false;
                        this.hasError = true;
                    }

                }).catch(error => {
                    console.log(error);
                    this.alertText = 'Found error in the form. Please check again.';
                    this.isSuccess = false;
                    this.hasError = true;
                });
            },
            mounted() {
                this.alertText = '';
                this.hasError = false;
                this.isSuccess = false;
            }
        }
    }
</script>

