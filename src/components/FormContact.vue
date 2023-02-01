<template>
    <form @submit.prevent="addContact">
        <input type="text" placeholder="Nom" v-model="formContact.nom">
        
        <input type="numero" maxlength="10" placeholder="Numéro" v-model="formContact.num">
        
        <button type="submit">Ajouter</button>
        <br>
        <span class="error" v-if="formContact.nom.length < 2 && errornom">Le nom doit faire à minima 2 caractères</span>
        <span class="error" v-if="this.$store.state.contacts.find(cont => (cont.nom).toUpperCase() === (this.formContact.nom).toUpperCase()) && errorsamenom">Le nom est déjà attribué à un autre contact</span>
        <span class="error" v-if="formContact.num.length != 10 && errornum">Le numéro doit faire 10 chiffres exactement</span>
        <span class="error" v-if="this.$store.state.contacts.find(cont => cont.num === this.formContact.num) && errorsamenum">Le numéro est déjà attribué à un autre contact</span>
    </form>
</template>
<script>

export default {
    name: 'FormContact',

    computed: {
        contacts(){
            return this.$store.state.contacts
        }
    },
    data(){
        return{
            errornom: false,
            errornum: false,
            errorsamenum: false,
            errorsamenom: false,
            formContact:{
                nom: '',
                num: ''
            }
        }
    },
    methods: {
        addContact() {
            if(this.formContact.nom.length < 2){
                this.errornom = true;
                return
            }
            if(this.formContact.num.length != 10) {
                this.errornum = true
                return
            }
            if(this.$store.state.contacts.find(cont => cont.num === this.formContact.num)) {
                this.errorsamenum = true
                return
            }
            if(this.$store.state.contacts.find(cont => (cont.nom).toUpperCase() === (this.formContact.nom).toUpperCase())) {
                this.errorsamenom = true
                return
            }
            this.$store.commit("addContact", this.formContact)
            this.formContact = {
                nom: '',
                num: ''
            }
            this.errornom = false;
            this.errornum = false;
            this.errorsamenum = false;
        }
    }
}
</script>
<style scoped>
    .error{
        color: red;
    }
</style>