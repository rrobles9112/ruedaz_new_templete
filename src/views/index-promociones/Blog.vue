<template>
    <section class="our-blog-section ptb-100" v-bind:class="{ 'gray-light-bg' : isGray }">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-9 col-lg-8">
                    <div class="section-heading text-center">
                        <h2>Our Latest News</h2>
                        <p>Efficiently matrix robust total linkage after market positioning bandwidth. Holisticly restore B2B materials rather than brand flexible paradigms vis-a-vis mission-critical e-commerce.</p>
                    </div>
                </div>
            </div>
          <div class="row justify-content-center">
              <div v-for="blog in blogs" class="col-md-6 col-lg-4" v-bind:key="blog.imageUrl">
                  <small-blog-item
                      :image-url="blog.imageUrl"
                      :comments="blog.comments"
                      :shares="blog.shares"
                      :day="blog.day"
                      :month="blog.month"
                      :title="blog.title"
                      :desc="blog.desc"
                  />
              </div>
          </div>
        </div>
    </section>
</template>

<script>
    import SmallBlogItem from '../../components/SmallBlogItem';
    export default {
        name: "Blog",
      components: {SmallBlogItem},
        props: {
            isGray: {
                type: Boolean,
                default: false
            },
        },
      data() {
            return {
                blogs: [
                    {
                        imageUrl: 'assets/img/blog/1.jpg',
                        day: 24,
                        month: 'Apr',
                        comments: 45,
                        shares: 10,
                        title: 'Appropriately productize fully',
                        desc: 'Some quick example text to build on the card title and make up the bulk.'
                    },
                    {
                        imageUrl: 'assets/img/blog/2.jpg',
                        day: 24,
                        month: 'Apr',
                        comments: 45,
                        shares: 10,
                        title: 'Quickly formulate backend',
                        desc: 'Synergistically engage effective ROI after customer directed partnerships.'
                    },
                    {
                        imageUrl: 'assets/img/blog/3.jpg',
                        day: 24,
                        month: 'Apr',
                        comments: 45,
                        shares: 10,
                        title: 'Objectively extend extensive',
                        desc: 'Holisticly mesh open-source leadership rather than proactive users.'
                    }
                ]
            }
        }
    };
</script>

<style>
</style>