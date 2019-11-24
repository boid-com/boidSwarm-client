<template lang="pug">
  q-page(padding)
    h4.q-ma-xs.q-mb-lg Active Teams
    .row.justify-center.q-gutter-md
      q-card(v-for="(team,index) of teams" style="max-width:350px;" :key="index").q-pa-md
        .row
          .col
            h4.q-ma-xs {{team.name}}
            div Score
            h4.q-ma-xs.text-accent {{team.score}}
          .col
            img(:src="team.img").teamIMG
        q-card.text-grey-8.q-pa-sm.shadow-4
          .row
            .col-4
              p Researching:
            .col
              h6.q-ma-xs {{team.research}}
          .row
            .col-4
              p Progress:
            .col
              h6.q-ma-xs.text-accent {{team.progress}}%
              q-linear-progress(:value="team.progress/100" rounded style="height: 20px;" color="accent")
        .row.justify-center
          q-btn(flat color="green" icon="people" label="join team")
          q-btn(flat color="blue" icon="fas fa-flask" label="view research")

        q-list(padding)
          q-item(v-for="(member,index) in (team.members)" :key="index")
            q-item-section(avatar)
              img(:src="member.img").avatar
            q-item-section
              q-item-label(overline)
              q-item-label {{member.name}}
            q-item-section
              q-item-label Score: {{member.score}}
              div Devices: {{parseInt(member.score/1000)}}
</template>

<script>
import teamList from '../proto/teams'

export default {
  data(){
    return {
      
    }
  },methods:{
    sort(data) {
      if (!data) return []
      return data.sort((a,b) => b.score - a.score)
    }
  },
  computed:{
    teams() {
      return teamList.map(team => {
        team.members = team.members.sort((a,b) => b.score - a.score)
        team.score = team.members.reduce((acc,el) => parseInt(el.score) + acc,0)
        return team
      })
    }
  }
}
</script>


<style lang="stylus" scoped>
.teamIMG
  max-width:100%; 
  overflow:hidden; 
  height:120px; 
  width:300px; 
  object-fit: cover;
</style>