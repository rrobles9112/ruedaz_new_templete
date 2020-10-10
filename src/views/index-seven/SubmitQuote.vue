<template>
    <div class="sign-up-form-wrap position-relative z-index shadow-lg rounded p-5 w-100 gray-light-bg">
        <div class="sign-up-form-header text-center mb-4">
            <h4 class="mb-1">Get a quote today</h4>
            <p>Get response from us within 24 hours</p>
        </div>
        <div class="message-box" v-bind:class="{ 'd-none': !isSuccess && !hasError, 'd-block': isSuccess || hasError }">
            <div class="alert" v-bind:class="{ 'alert-danger': hasError, 'alert-success': isSuccess}">{{ alertText }}</div>
        </div>
        <form id="getQuoteFrm" class="login-signup-form get-quote-form-wrap" v-on:submit="submit" >
            <div class="form-group">
                <label>Your Name</label>
                <div class="input-group input-group-merge">
                    <div class="input-icon">
                        <span class="ti-user"></span>
                    </div>
                    <input type="text" name="name" class="form-control" placeholder="Enter your name" v-model="name" />
                </div>
            </div>
            <div class="form-group">
                <label>Your Email</label>
                <div class="input-group input-group-merge">
                    <div class="input-icon">
                        <span class="ti-email"></span>
                    </div>
                    <input type="email" name="email" class="form-control" placeholder="Enter your email" v-model="email" />
                </div>
            </div>
            <div class="form-group">
                <label>Write your message</label>
                <div class="input-group input-group-merge">
                    <div class="input-icon textarea-icon">
                        <span class="ti-comment-alt"></span>
                    </div>
                    <textarea name="message" class="form-control" placeholder="Write your message" cols="30" rows="4" required="" v-model="message"></textarea>
                </div>
            </div>
            <!-- Submit -->
            <button class="btn btn-block btn-brand-02 mt-4 mb-3">
                Send your query
            </button>

            <!-- Link -->
            <div class="form-check d-flex align-items-center text-center">
                <input type="checkbox" class="form-check-input mt-0 mr-3" id="exampleCheck1" v-model="agree" required>
                <label class="form-check-label small" for="exampleCheck1">I agree your <a href="#">terms &amp; conditions</a></label>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "SubmitQuote",
        data() {
            return {
                name: '',
                email: '',
                message: '',
                agree: false,
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

                fetch("/php/quote-form-process.php", {
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

<style scoped>

</style>