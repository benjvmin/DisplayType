<template lang="pug">

  div

    section.grid(class="dt-df")
      .grid__cell.dt-w1.dt-ml1 Hello
      .grid__cell.dt-w1 Hello 
      .grid__cell.dt-w1 Hello  
      .grid__cell.dt-w4.dt-ml3 Hello

    section.grid(class="dt-df")
      .grid__cell.dt-w3 Hello
      .grid__cell.dt-w3 Hello

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
