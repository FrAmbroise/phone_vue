<template>
  <div class="contact">
    <h1>Contacts</h1>
  </div>
  <FormContact/>
  <div class="liste-de-contacts">
    <div v-for="contact in contacts" :key="contact.nom">
      <ContactInfo :contact="contact"/>
    </div>
  </div>
</template>

<script>
import ContactInfo from'@/components/ContactInfo.vue'
import FormContact from '@/components/FormContact.vue'

export default {
  name: 'ContactView',
  components: {
    ContactInfo,
    FormContact
  },
  computed: {
        contacts(){
            return this.$store.state.contacts
        }
    }
}
</script>
