<template lang="pug">
  q-page(padding)
    h4.q-ma-xs.q-mb-lg Profile
    div(v-if="!thisUser")
      .row.justify-center
        div You need to login first...
      .row.justify-center.q-pa-md
        q-btn(@click="$root.$emit('modal','auth')") Login
    div(v-else)
      .row.justify-center.q-pb-lg
        .col-4
          .row.justify-center
            img(src="https://2.gravatar.com/avatar/8f584a63a4a55bac2f7601bd232d5694?d=https%3A%2F%2Fidenticons.github.com%2F64b3550f718afd7aabd201fb3b89353f.png&s=420" style="height:100px; width:100px;").avatar.on-left
          h5.text-center {{thisUser.username}}
        .col-auto
          h6.text-weight-light.q-ma-xs My current team
          h5.q-ma-xs Blood Barons
          q-btn(flat label="View Team" @click="$router.push({name:'Teams'})")
          q-btn(flat label="Change Team" @click="$router.push({name:'Teams'})")
      .row.justify-center.q-gutter-md
        q-card.q-pa-md
          h5.q-ma-xs Contributions
          .row(style="max-width:300px;")
            div.full-width(v-for="({research},index) of teamList" :key="index").bg-grey-2.q-ma-sm.q-pa-md.text-grey-9
              h6.q-ma-sm {{research}}
              .q-ma-sm
                div Total Work Units: #[strong.text-body1 {{rand(1,3400)}}]
                div Score: #[strong.text-body1 {{rand(1,34000)}}]
        q-card.q-pa-md
          h5.q-ma-xs NFT Medals Earned
          .row(style="max-width:300px;")
            div.full-width(v-for="(medal,index) of medals" :key="index").bg-grey-2.q-ma-sm.q-pa-md.text-grey-9
              .row.items-center
                img.q-mr-sm(:src="medal.img" style="width:50px;")
                h6.q-ma-sm {{medal.name}}

        q-card.q-pa-md
          h5.q-ma-xs Devices
          .row(style="max-width:300px;")
            div.full-width(v-for="(device,index) of devices" :key="index").bg-grey-2.q-ma-sm.q-pa-md.text-grey-9
              .row.items-center
                q-icon.q-mr-sm(:name="device.icon" size="35px")
                h6.q-ma-md {{device.name}}
              div Status: #[strong.text-body1.q-pa-xs.q-ma-xs.bg-grey.text-white {{device.status}}]
              div Total Work Units: #[strong.text-body1 {{rand(1,34000)}}]
              div Score: #[strong.text-body1 {{rand(1,34000)}}]
</template>

<script>
import teamList from '../proto/teams'

export default {
  data(){
    return {
      teamList,
      devices:[
        {
          icon:"fas fa-desktop",
          name:"Home PC",
          status:"Active"
        },
        {
          icon:"fas fa-laptop",
          name:"Laptop PC",
          status:"Paused"
        },
        {
          icon:"fas fa-tablet-alt",
          name:"Tablet",
          status:"Offline"
        }
      ],
      medals:[
        {
          name: "Early Adopter",
          img:"https://image.flaticon.com/icons/svg/95/95309.svg"
        },
        {
          name: "Star Gazer",
          img:"https://image.flaticon.com/icons/svg/95/95309.svg"
        },
        {
          name: "Weather Predictor",
          img:"https://image.flaticon.com/icons/svg/95/95309.svg"
        },
        {
          name: "Fun-gi",
          img:"https://image.flaticon.com/icons/svg/95/95309.svg"
        }
      ]
    }
  },props:['thisUser'],
  methods:{
     rand(min,max) {
      return Math.floor(Math.random() * Math.floor(max)) + min
    }
  }
}
</script>
