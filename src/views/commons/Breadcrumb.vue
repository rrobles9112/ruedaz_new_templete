<template>
    <div class="breadcrumb-bar gray-light-bg border-bottom">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="custom-breadcrumb">
                        <ol class="breadcrumb pl-0 mb-0 bg-transparent">
                            <li class="breadcrumb-item" v-bind:class="{ active: bread.isActive }" v-for="(bread, i) in crumbs" :key="i">
                                <template v-if="!bread.isActive">
                                    <a :href="bread.link"> {{ bread.name }} </a>
                                </template>
                                <template v-else>
                                    {{ bread.name }}
                                </template>

                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            crumbs: {
                type: Array,
                required: true
            }
        }
    }
</script>
