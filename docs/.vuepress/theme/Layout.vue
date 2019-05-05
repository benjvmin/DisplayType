<template lang="pug">

  div

    section.grid(class="dt-dfc dt-df-md dt-jcc-md dt-jcsa-lg")
      .grid__cell.dt-fba.dt-w4-md Hello
      .grid__cell.ft-fba.dt-w4-md Hello
    
    section.grid
      .grid__cell Hello
      .grid__cell Hello
      .grid__cell Hello

    main
      Content




</template>


<script>


export default {

  data() {
    return {
      color: 'pink',
      columns: [0, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12]
    }
  }, 

  methods: {
    hello() {
      console.log('hi');
    }
  }
  
}
</script>


<style lang="scss">
@import './styles/normalize';
@import './styles/tinyreset';
@import './styles/breakpoints';
@import './styles/typography';


body {
  margin: 0;
  padding: 0;
}


.grid {

  &__cell {
    background: #282828;
    color: white;
  } 


}


</style>
