<template>
    <div class="row">
        <div class="col-sm-6 box" v-for="(people, index) in peoples" :key="people.name">
            <div class="item alert alert-info">
                <h4>{{people.name}}</h4>
                <div class="row">
                    <div class="col">
                        <div> Gender: <strong>{{people.gender}}</strong></div>
                        <div> Height: <strong>{{people.height}}</strong></div>
                        <div> Mass: <strong>{{people.mass}}</strong></div>
                    </div>
                    
                    <div class="col">
                        <strong>Starships:</strong>
                        <ships :ships="people.starships"></ships>
                    </div>
                </div>
                
                <hr>

                <div class="text-right">
                    <router-link :to="{name: 'detail', params: { id: index}}" class="btn btn-info btn-sm" tag="a">See more info person</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ships from '@/components/ships'
    import { mapState } from 'vuex'
    import axios from 'axios'

    export default {
        computed: {
            ...mapState({
                peoples: state => state.people.results
            })
        },
        components: {
            ships
        }
    }
</script>