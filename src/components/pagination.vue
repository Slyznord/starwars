<template>
    <nav aria-label="Page navigation example" class="pr-15 pl-15">
        <ul  class="pagination">
            <router-link 
                tag="li" 
                exact-active-class="active" 
                :to="item == 1 ? 'people' : `people?page=${item}`" 
                @click.native="moveToPage(item)" 
                class="page-item" 
                v-for="item in 9" 
                :key="item"
            >
                <a class="page-link">{{item}}</a>
            </router-link>
        </ul>
    </nav>
</template>

<script>
    import axios from 'axios'
    import { mapActions } from 'vuex'

    export default {
        methods: {
            async moveToPage(id) {
                this.getData(id)
            },
            ...mapActions({
                getData: 'getData'
            })
        }
    }
</script>