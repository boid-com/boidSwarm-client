<template lang="pug">
  div(id="q-app")
    router-view(:thisUser="thisUser")
    div()
      q-dialog(v-model="showModal" @close="thisModal=null")
        component(:is="activeModal")
</template>

<script>
import auth from 'components/Auth'
export default { 
  name: 'App',
  components:{auth},
  data(){
    return {
      activeModal:false,
      showModal:false,
      thisUser:null
    }
  },
  mounted(){
    this.init()
  },
  methods:{
    init(){
      console.log('Init')
      this.autoLogin()
      this.$root.$on('modal',this.handleModal)
      this.$root.$on('set',this.handleSet)
      this.$root.$on('logout',this.handleLogout)
    },
    handleModal(data){
      if (data) this.showModal = true
      else this.showModal = false
      this.activeModal = data
    },
    handleSet(property,data) {
      if (!property) return
      this[property] = data
    },
    handleLogout(){
      this.thisUser = null
      window.localStorage.clear()
    },
    autoLogin(){
      try {
        const localUser = window.localStorage.getItem('thisUser')
        if (localUser) this.thisUser = JSON.parse(localUser)
      } catch (error) {
        console.error(error.toString())
        window.localStorage.clear()
      }

    }
  }
  
  }
</script>
