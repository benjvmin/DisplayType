<template lang="pug">

  div

    section.grid(class="dt-df dt-jcsb" data-dt-lg="dt-jcc")
      .grid__cell.dt-df.dt-w4 Hello 
      .grid__cell.dt-w4 Hello

    section.grid(class="dt-df dt-jcsb")
      .grid__cell.dt-w4 Hello
      .grid__cell.dt-w4 Hello
      .grid__cell.dt-w4 Hello
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


nav {


  & ul {
    & li { background: pink; }
  }
  
}

.grid {

  &__cell {
    background: #ededed;
    color: #282828;
    // padding: 5px;
    border: 1px solid #282828;
  }
}


</style>
