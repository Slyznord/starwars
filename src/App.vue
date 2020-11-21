<template>
    <div id="app">
        <router-view/>
        <loader v-if="isLoad"></loader>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import loader from '@/components/loader'

    export default {
        components: { 
            loader 
        },
        computed: {
            ...mapState({
                isLoad: state => state.isLoad
            })
        }
    }
</script>

<style lang="scss">
    @import 'node_modules/bootstrap/scss/bootstrap.scss';
    @import 'node_modules/bootstrap-vue/src/index.scss';
</style>
