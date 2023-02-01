<template>
    <div>
        <h2>{{ contact.nom }}</h2>
        <p>{{ contact.num }}</p>
        <button class="phone" @click="addAppel">&#9742;</button>
    </div>
</template>
<script>
export default {
    name: 'ContactInfo',
    props:[
        'contact'
    ],
    data(){
        return{
            appel:{
            num: this.contact.num,
            nom: this.contact.nom,
            date: (new Date()).toUTCString()
            }
        }

    },

    methods:{
        addAppel(){
            this.$store.commit("addAppel", this.appel)
        }
    }
}
</script>
<style scoped>
    .phone{
        color:#42b983;
    }
    div{
        background-color: #42b983;
        display: inline-block;
        border-radius: 8px;
        padding: 16px 40px 16px 40px;
        margin: 8px;
    }
</style>