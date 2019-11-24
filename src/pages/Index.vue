<template lang="pug">
  q-page
    .flex.flex-center
      img(src="~assets/boidswarmlogo.png" style="max-width:100%; overflow:hidden; height:400px; width:100%; object-fit: cover;")
    .row.flex-center(v-if="!thisUser")
      q-btn(@click="$root.$emit('modal','auth')") Login
    .row.flex-center(v-else).q-pa-lg.q-pt-sm
      .col-12.q-pb-md
        h5(style="margin:0px;") Welcome {{thisUser.username}}
        div Get started by choosing a research project and downloading the client application.
      q-btn(outline rounded color="grey-9").on-left Browse Research Projects
      q-btn(type="a" href="https://github.com/han-so1omon/BoidCluster" target="_blank" 
      icon="cloud_download" label="Download Client App" color="accent").on-left
      q-btn(outline rounded color="grey-9" @click="$root.$emit('modal','auth')") View Prize Pool



</template>
<script>
console.log('Index')
export default { name: 'Index', props:['thisUser'] }
</script>
