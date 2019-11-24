<template lang="pug">
  q-page(padding)
   h4.q-ma-xs.q-mb-lg.text-accent Research
   .row.justify-center.q-gutter-md
    .col-3(v-for="(proj,index) of research" :key="index")
      q-card.q-pa-md
        img(:src="proj.img" style="width:100%").projIMG
        h6.q-ma-sm {{proj.name}}
        div.bg-grey-2.q-pa-md
          p.text-weight-light Researchers
          .row.q-gutter-md.justify-center
            .col-3(v-for="(researcher,index) of proj.researchers" :key="index")
              .row
                .col-auto
                  div
                    .row.justify-center
                      img.avatar(:src="researcher.img")
                    div.text-center {{researcher.name}}
        div.q-pt-md(v-bind:class="{expanded:proj.expand,retracted:!proj.expand}") {{proj.description}}
        .row
          .col
            q-btn.q-mt-md(flat color="accent") Prize Pool
          .col
            q-btn.full-width(flat @click="proj.expand = true" v-if="!proj.expand" color="green" icon="expand").q-mt-md Expand
            q-btn.full-width(flat @click="proj.expand = false" v-else color="grey").q-mt-md Minimize

</template>

<script>
import research from '../proto/research'

export default {
  data(){
    return {
      research
    }
  },methods:{
    shouldExpand(){
      return true
    }
  }
}
</script>

<style lang="stylus" scoped>
.projIMG
  overflow:hidden; 
  height:120px; 
  object-fit: cover;
.expanded
  height auto;
  overflow auto;
.retracted
  height 100px;
  overflow hidden;
</style>
