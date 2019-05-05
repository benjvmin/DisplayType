<template lang="pug">

  div(@click="hello()")
    nav
    
    section.grid(data-dt="d-f" data-dt-md="jc-sa")
      .grid__cell(data-dt="w-2") Hello
      .grid__cell(data-dt="d-f w-10") Hello

    section.grid(data-dt="d-fc" data-dt-md="jc-sa")
      .grid__cell(data-dt="w-10") Hello
      .grid__cell(data-dt="d-f w-2") Hello

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
@import './styles/breakpoints';
@import './styles/typography';

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}


.grid {
  &__cell {
    background: steelblue;
    color: white;
  }
}

</style>
