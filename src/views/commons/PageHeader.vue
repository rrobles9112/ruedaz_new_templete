<template>
    <section class="page-header-section ptb-100 page-header-bg bg-image" image-overlay="8" style="opacity: 1;">
        <div class="background-image-wraper page-header-bg"></div>
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-9 col-lg-7">
                    <div class="page-header-content text-white pt-4">
                        <h1 class="text-white mb-0">{{ title }}</h1>
                        <p class="lead">{{ subtitle }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        props: {
            title: {
                default: "Page Title",
                type: String
            },
            subtitle: {
                default: "Page Subtitle",
                type: String
            }
        }
    }
</script>

<style scoped lang="scss">
    .page-header-bg {
        background: url('../../assets/img/slider-bg-1.jpg');
    }
</style>