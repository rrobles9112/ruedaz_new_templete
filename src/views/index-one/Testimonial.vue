<template>
  <section class="position-relative gradient-bg ptb-100">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-6 col-lg-5 mb-4 mb-sm-4 mb-md-0 mb-lg-0">
          <div class="testimonial-heading text-white">
            <h2 class="text-white">What Our Client Say About Apdash</h2>
            <p>
              Collaboratively actualize excellent schemas without effective
              models. Synergistically engineer functionalized applications
              rather than backend e-commerce.
            </p>
          </div>
        </div>
        <div class="col-md-6 col-lg-6">
          <div class="testimonial-content-wrap">
            <!-- <div
              class="owl-carousel owl-theme client-testimonial-1 dot-indicator testimonial-shape"
            > -->
            <carousel
              :autoplay="true"
              :dots="true"
              class="owl-theme client-testimonial-1 dot-indicator testimonial-shape owl-loaded owl-drag"
              :loop="true"
              :margin="30"
              :nav="false"
              :responsiveClass="true"
              :autoplayHoverPause="true"
              :lazyLoad="true"
              :items="1"
            >
              <div class="item">
                <div class="testimonial-quote-wrap">
                  <div class="media author-info mb-3">
                    <div class="author-img mr-3">
                      <img
                        src="../../assets/img/client/1.jpg"
                        alt="client"
                        class="img-fluid"
                      />
                    </div>
                    <div class="media-body text-white">
                      <h5 class="mb-0 text-white">John Charles</h5>
                      <span>Head Of Admin</span>
                    </div>
                    <i class="fas fa-quote-right text-white"></i>
                  </div>
                  <div class="client-say text-white">
                    <p>
                      Interactively optimize fully researched expertise
                      vis-a-vis plug-and-play relationships. Intrinsicly develop
                      viral core competencies for fully tested customer service.
                      Enthusiastically create next-generation growth strategies
                      and.
                    </p>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="testimonial-quote-wrap">
                  <div class="media author-info mb-3">
                    <div class="author-img mr-3">
                      <img
                        src="../../assets/img/client/2.jpg"
                        alt="client"
                        class="img-fluid"
                      />
                    </div>
                    <div class="media-body text-white">
                      <h5 class="mb-0 text-white">Arabella Ora</h5>
                      <span>HR Manager</span>
                    </div>
                    <i class="fas fa-quote-right text-white"></i>
                  </div>
                  <div class="client-say text-white">
                    <p>
                      Rapidiously develop user friendly growth strategies after
                      extensive initiatives. Conveniently grow innovative
                      benefits through fully tested deliverables. Rapidiously
                      utilize focused platforms through end-to-end schemas.
                    </p>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="testimonial-quote-wrap">
                  <div class="media author-info mb-3">
                    <div class="author-img mr-3">
                      <img
                        src="../../assets/img/client/3.jpg"
                        alt="client"
                        class="img-fluid"
                      />
                    </div>
                    <div class="media-body text-white">
                      <h5 class="mb-0 text-white">Jeremy Jere</h5>
                      <span>Team Leader</span>
                    </div>
                    <i class="fas fa-quote-right text-white"></i>
                  </div>
                  <div class="client-say text-white">
                    <p>
                      Objectively synthesize client-centered e-tailers for
                      maintainable channels. Holisticly administrate customer
                      directed vortals whereas tactical functionalities.
                      Energistically monetize reliable imperatives through
                      client-centric.
                    </p>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="testimonial-quote-wrap">
                  <div class="media author-info mb-3">
                    <div class="author-img mr-3">
                      <img
                        src="../../assets/img/client/4.jpg"
                        alt="client"
                        class="img-fluid"
                      />
                    </div>
                    <div class="media-body text-white">
                      <h5 class="mb-0 text-white">John Charles</h5>
                      <span>Marketing Head</span>
                    </div>
                    <i class="fas fa-quote-right text-white"></i>
                  </div>
                  <div class="client-say text-white">
                    <p>
                      Enthusiastically innovate B2C data without
                      clicks-and-mortar convergence. Monotonectally deliver
                      compelling testing procedures vis-a-vis B2B testing
                      procedures. Competently evisculate integrated resources
                      whereas global.
                    </p>
                  </div>
                </div>
              </div>
            </carousel>
            <!-- </div> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import carousel from "vue-owl-carousel";
export default {
  name: "Testimonial",
  components: { carousel },
};
</script>

<style></style>
