<template>
    <section id="faq" class="ptb-100" v-bind:class="{ 'gray-light-bg' : isGray }">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-9 col-lg-8">
                    <div class="section-heading text-center mb-5">
                        <h2>Frequently Asked Queries</h2>
                        <p>Efficiently productivate reliable paradigms before ubiquitous models. Continually utilize frictionless expertise whereas tactical relationships. Still have questions? Contact us</p>
                    </div>
                </div>
            </div>
            <div class="row align-items-center">
                <div class="col-md-12 col-lg-6 mb-5 mb-md-5 mb-sm-5 mb-lg-0">
                    <div class="img-wrap">
                        <img src="../../assets/img/health.png" alt="download" class="img-fluid" />
                    </div>
                </div>
                <div class="col-md-12 col-lg-6">
                    <accordian :contents="contents" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
  import Accordian from '../../components/Accordian';
  export default {
      name: "Faq",
      props: {
          isGray: {
              type: Boolean,
              default: false
          },
      },
      components: {
          Accordian
      },
      data: function() {
          return {
              contents: [{
                title: 'Which license do I need?',
                description: 'Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven&#x27;t heard of them accusamus labore sustainable VHS.',
                active: true
              },{
                title: 'How do I get access to a theme?',
                description: 'Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven&#x27;t heard of them accusamus. Seamlessly optimize empowered testing procedures before revolutionary processes. Progressively facilitate client-centered technologies whereas extensive users. Authoritatively.',
                active: false
              },{
                title: 'How do I see previous orders?',
                description: 'Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven&#x27;t heard of them accusamus labore sustainable VHS.',
                active: false
              }, {
                title: 'Support related issues for the template?',
                description: 'Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table. Professionally embrace customer directed value vis-a-vis high-quality portals. Quickly underwhelm B2C users with maintainable benefits.',
                active: false
              }]
          };
      }

  };
</script>
