<template>

    <div class="accordion faq-wrap">
        <accordion-item
            class="accordion-item card mb-3"
            v-for="(content, i) in contents"
            v-bind:class="{ 'accordion-active': content.active }"
            v-bind:content="content"
            v-bind:index="i"
            v-bind:key="i"
            v-on:on-expanded="onExpanded"
            :ref="i"
        />
    </div>
    
</template>

<script>

    import AccordionItem from './AccordianItem.vue';

    export default {
        name: "Accordian",
        props: {
            contents: {
                type: Array,
                required: true
            }
        },
        components: {
            AccordionItem
        },
        methods: {
            onExpanded: function(index) {
                for (let i = 0; i < this.contents.length; i++) {
                    if (i !== index) {
                        this.$refs[i][0].closeIfOpen();
                    }
                }
            }
        }

    }
</script>

