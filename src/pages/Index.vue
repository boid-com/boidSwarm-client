<template lang="pug">
  q-page
    .flex.flex-center
      img(src="~assets/boidswarmlogo.png")
    .row.flex-center
      q-btn(@click="$root.$emit('modal','auth')") Login
</template>
<script>
console.log('Index')
export default { name: 'Index' }
</script>
