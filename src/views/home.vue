<template>
    <div class="container p-4">
        <div class="row">
            <div class="col">
                <cards></cards>
                <pagination></pagination>
            </div>
        </div>
    </div>
</template>

<script>
    import cards from '@/components/cards'
    import pagination from '@/components/pagination'

    export default {
        components: {
            cards,
            pagination
        }
    }
</script>
