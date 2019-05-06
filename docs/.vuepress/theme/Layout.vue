<template lang="pug">

  div
  
    nav.d-f.jc-sb
      ul.d-fc.w-5(data-dt-md="d-f")
        li.d-f.jc-vc.fg-2
          a(href="#") Link-1
        li.d-f.jc-vc.fg-1
          a(href="#") Link-1
        li.d-f.jc-vc.fg-1
          a(href="#") Link-2
        li.d-f.jc-vc.fg-1
          a(href="#") Link-3

      ul.d-f.w-5
        li.fg-1
          a(href="#") Link-1
        li.fg-1
          a(href="#") Link-1
        li.fg-1
          a(href="#") Link-1

    section.grid.d-f(data-dt-sm="d-f jc-c")
      .grid__cell.w-3 Hello
      .grid__cell.w-3.ml-1 Hello  


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
    padding: 4px;
    border: 1px solid #282828;
  }
}


</style>
