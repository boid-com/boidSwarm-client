<template lang="pug">
  q-layout(view="lHh Lpr lFf")
    q-header(elevated)
      q-toolbar.bg-white.text-black
        q-btn(flat dense round icon="menu" aria-label="Menu" @click="leftDrawerOpen = !leftDrawerOpen")
        q-toolbar-title
          div Boid Swarm
        div(v-if="thisUser")
          .row
            q-toolbar-title {{thisUser.username}}
            q-btn.inline(@click="$root.$emit('logout')")
              q-tooltip Logout
              q-icon(name="logout")
        div(v-else)
          q-btn(@click="$root.$emit('modal','auth')") login
    q-drawer(v-model="leftDrawerOpen" show-if-above bordered content-class="bg-grey-2")
      q-list
        q-item-label(header) Navigation
        q-item(clickable tag="a" target="_blank" href="https://quasar.dev")
          q-item-section(avatar) 
            q-icon(name="school")
          q-item-section(title) hello
    q-page-container
      router-view(:thisUser="thisUser")
            
</template>

<script>
export default {
  name: 'MyLayout',
  props:['thisUser'],
  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>
