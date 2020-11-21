<template>
    <div>
        <span class="badge badge-info m-1" v-for="movie in movies" :key="movie">{{movie}}</span>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        data() {
            return {
                movies: []
            }
        },
        props: {
            films: {
                default: () => [],
                type: Array
            }
        },
        async created() {
            for(let i = 0; i < this.films.length; i++) {
                const data = await axios.get(this.films[i]).then(result => result.data);
                this.movies.push(data.title);
            }
        }        
    }
</script>