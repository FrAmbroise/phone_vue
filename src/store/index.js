import { createStore } from 'vuex'

export default createStore({
  state: {
    contacts: [
      {
        nom: 'Ward',
        num: '0748992108'
      },
      {
        nom: 'Reese',
        num: '0688103830'
      },
      {
        nom: 'Aegina',
        num: '0607080900'
      },
      {
        nom: 'Test',
        num: '0000000000'
      }
    ],
    appels:[
      {
        num: '0606060606',
        nom: 'Anonyme',
        date: (new Date()).toUTCString()
      }
    ]
  },
  getters: {
  },
  mutations: {
    addContact(state, contact){
      state.contacts.push(contact)
    },
    addAppel(state, appel){
      state.appels.push(appel)
    }
  },
  actions: {
  },
  modules: {
  }
})
