<template>
    <div class="appel">
        <h1>Journal d'appel</h1>
    </div>
    <div class="liste-d-appels">
        <div class="appels" v-for="appel in appels" :key="appel.num">
            <AppelInfo :appel="appel"/>
        </div>
    </div>
</template>

<script>
import AppelInfo from '@/components/AppelInfo.vue'

export default{
    name: 'AppelView',
    components : {
        AppelInfo
    },
    computed: {
        appels(){
            return this.$store.state.appels
        }
    }
}
</script>

<style scoped>
.appels{
    background-color: #42b983;
    padding: 16px;
    display: inline-block;
    border-radius: 8px;
    margin-bottom: 16px;
    margin-left: 16px;
}
/*.liste-d-appels{
    display: flex;
    flex-direction: column;

}*/
</style>