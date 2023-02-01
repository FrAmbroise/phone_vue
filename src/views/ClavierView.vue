<template>
  <div class="clavier">
    <h1>Clavier</h1>
  </div>
  <div class="main-container">
    <div class="mystere">
      <p class="numero">{{ numero }}</p>
      <p class="contact">{{ contactname }}</p>
    </div>
    <div class="buttons">
    
      <button class="btn-1" @click="updateNum('1')">1</button>
      <button class="btn-2" @click="updateNum('2')">2</button>
      <button class="btn-3" @click="updateNum('3')">3</button>
      <button class="btn-4" @click="updateNum('4')">4</button>
      <button class="btn-5" @click="updateNum('5')">5</button>
      <button class="btn-6" @click="updateNum('6')">6</button>
      <button class="btn-7" @click="updateNum('7')">7</button>
      <button class="btn-8" @click="updateNum('8')">8</button>
      <button class="btn-9" @click="updateNum('9')">9</button>
      <button class="btn-0" @click="updateNum('0')">0</button>
      <button class="btn-clear" @click="suppNum">Supprimer</button>
    </div>
    <button class="appeler" v-if="this.numero.length===10" @click="addAppel">&#9742;</button>
  </div>
  
</template>

<script>
export default{
  name: 'ClavierView',
  data(){
    return{
      numero: '',
      contactname: '',
      appel:{
        num: '',
        nom: '',
        date:''
      }
    }
  },
  methods:{
    updateNum(button){
      if(this.numero.length >= 10) return
      this.numero+=button
      this.findContact()
    },
    suppNum(){
      this.numero = ''
      this.contactname = ''
    },
    findContact(){
      if(this.numero.length < 10)return
      if(this.$store.state.contacts.find(contact => contact.num === this.numero)){
        this.contactname = (this.$store.state.contacts.find(contact => contact.num === this.numero)).nom
      }
      
      
    },
    addAppel(){
      if(this.numero.length != 10) return
      this.appel.num = this.numero
      this.appel.nom = this.contactname
      if(this.contactname === '') this.appel.nom = "Anonyme"
      this.appel.date = (new Date()).toUTCString()
      this.$store.commit("addAppel", this.appel)
      this.numero = ''
      this.contactname = ''

    }
  }
}
</script>

<style scoped>
.main-container{
  background-color: #42b983;
  display: inline-block;
  border-radius: 8px;
}
.buttons{
  padding: 40px;
  color: #2c3e50;
}
.mystere{
  color: #2c3e50;
  padding-top: 16px;
}
button{
  padding: 16px;
  margin-left: 8px;
  font-size: 24px;
}
.numero{
  height: 40px;
  width: 250px;
  margin-left: auto;
  margin-right: auto;
  font-size: 32px;
}
.contact{
  height: 32px;
  margin-left: auto;
  margin-right: auto;
  margin-block-end: 0;
  font-size: 24px
}
.appeler{
  margin-top: 8px;
  color: #2c3e50;
  border: none;
  border-radius: 4px;
  font-size: 40px;
  background-color: #42b983;
}

</style>