<template>
    <div>
        <span class="badge badge-info mr-1" v-for="item in ship" :key="item.name">{{item.name}}</span>
        <span class="badge badge-danger" v-if="ships.length == 0">{{empty}}</span>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        props: {
            ships: { 
                default: () => [], 
                type: Array 
            }
        },
        data() {
            return {
                ship: [],
                empty: 'I haven\'t starship'
            }
        },
        async created() {
            for(let i = 0; i < this.ships.length; i++) {
                const data = await axios.get(this.ships[i]).then(result => result.data)
                this.ship.push(data)
            }
        }        
    }
</script>