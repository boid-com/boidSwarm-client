<template lang="pug">
  div
    q-card.q-pa-lg(style="min-width:300px;")
      p.text-center Boid Swarm
      div(v-if="page==1")
        p.text-center Liquid Account
        q-form(@submit="login" )
          q-input(v-model="form.username" label="Username" :error="!usernameValid")
            template(v-slot:error) {{usernameErrorMsg}}
          //- q-input(v-model="form.email" label="Email" :error="!emailValid" type="email")
          //-   template(v-slot:error) {{emailErrorMsg}}
          q-input(v-model="form.password" label="Password")
            template(v-slot:error) {{passErrorMsg}}
        q-card.bg-red.q-pa-sm.q-ma-sm.text-white(v-if="errormsg")
          p Error: {{errormsg}}
        .row.justify-center.q-pt-lg
          q-btn.on-left(@click="register()") Register
          q-btn(@click="login()") Login
      div(v-if="page==2")
        h6.text-center {{statusmsg}}
        .flex.flex-center.q-pa-lg
          q-spinner(v-if="loading" size="50px" color="green")
          q-icon(v-else  name="check" size="50px" color="green")

</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {
      page:1,
      errormsg:null,
      loading:true,
      statusmsg:null,
      emailErrorMsg:null,
      passErrorMsg:null,
      usernameErrorMsg:null,
      emailValid:true,
      passValid:true,
      usernameValid:true,
      form:{
        username:"",
        email:"",
        password:""
      }
    }
  },
  methods:{
    async login(){
      if (!(await this.validForm())) return
      this.statusmsg = "Logging you in..."
      this.page = 2
      setTimeout(el => {
        this.statusmsg = "Login Successful"
        this.loading = false
        window.localStorage.setItem('thisUser',JSON.stringify(this.form))
        this.$root.$emit('set','thisUser',this.form)
        setTimeout(el => {
          this.$root.$emit('modal')
        },500)
      },1000)
    },
    async register(){
      if (!(await this.validForm())) return
      this.statusmsg = "Registering Account..."
      this.page = 2
      setTimeout(el => {
        this.statusmsg = "Registration Successful"
        this.loading = false
        window.localStorage.setItem('thisUser',JSON.stringify(this.form))
        this.$root.$emit('set','thisUser',this.form)
        setTimeout(el => {
          this.$root.$emit('modal')
        },500)
      },1000)
    },
    validForm(){
      return true
    }
  }
}
</script>
