<template>
    <div>
        <h2>{{ appel.num }}</h2>
        <p class="nom-contact">{{ appel.nom }}</p>
        <p>{{ appel.date }}</p>
    </div>
</template>
<script>
export default {
    name: 'AppelInfo',
    props:[
        'appel'
    ]
}
</script>
<style scoped>
    .nom-contact{
        font-weight: 700;
    }
</style>