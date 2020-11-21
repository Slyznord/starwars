<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-sm-12"> 
                <div class="row align-items-center">
                    <div class="col">
                        <h2 >{{peoples[number].name}}</h2>
                    </div>
                    
                    <div class="col text-right">
                        <a @click="$router.go(-1)" class="btn btn-sm btn-success">Back to List</a>
                    </div>
                </div>
                
                <hr>
                
                <div class="row">
                    <div class="col-md-6">
                        <ul class="list-group">
                            <li class="list-group-item list-group-item-info"> Birth Year: <strong>{{peoples[number].birth_year}}</strong></li>
                            <li class="list-group-item list-group-item-info"> Gender: <strong>{{peoples[number].gender}}</strong></li>
                            <li class="list-group-item list-group-item-info"> Height: <strong>{{peoples[number].height}}</strong></li>
                            <li class="list-group-item list-group-item-info"> Mass: <strong>{{peoples[number].mass}}</strong></li>
                            <li class="list-group-item list-group-item-info"> Hair Color: <strong>{{peoples[number].hair_color}}</strong></li>
                            <li class="list-group-item list-group-item-info"> Skin Color: <strong>{{peoples[number].skin_color}}</strong></li>
                            <li class="list-group-item list-group-item-info"> Eye Color: <strong>{{peoples[number].eye_color}}</strong></li>
                        </ul>
                    </div>
                    
                    <div class="col-md-6">
                        <h4>Films</h4>
                        <films :films="peoples[number].films"></films>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import films from '@/components/films'
    import { mapState } from 'vuex'

    export default {
        data() {
            return {
                number: ''
            }
        },
        components: { 
            films 
        },
        computed: {
            ...mapState({
                peoples: state => state.people.results
            })
        },
        created() {
            this.number = this.$route.params.id
        }
    }
</script>