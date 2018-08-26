<script>
  import Extension from './com/Ext.vue';

  const images = [
    require('./img/bg-1.jpg'),
    require('./img/bg-2.jpg'),
    require('./img/bg-3.jpg'),
    require('./img/bg-4.jpg'),
    require('./img/bg-5.jpg'),
    require('./img/bg-6.jpg'),
    require('./img/bg-7.jpg'),
    require('./img/bg-8.jpg'),
    require('./img/bg-9.jpg'),
    require('./img/bg-10.jpg'),
    require('./img/bg-11.jpg'),
    require('./img/bg-12.jpg'),
    require('./img/bg-13.jpg'),
    require('./img/bg-14.jpg'),
    require('./img/bg-15.jpg'),
    require('./img/bg-16.jpg'),
    require('./img/bg-17.jpg'),
    require('./img/bg-18.jpg'),
    require('./img/bg-19.jpg'),
    require('./img/bg-20.jpg'),
    require('./img/bg-21.jpg'),
    require('./img/bg-22.jpg'),
    require('./img/bg-23.jpg'),
    require('./img/bg-24.jpg'),
    require('./img/bg-25.jpg')
  ];

  export default {
    components: {
      Extension
    },
    data () {
      return {
        images: images
      };
    }
  }
</script>

<template>
  <extension :images="images"/>
</template>

<style>
  body, html {
    padding: 0;
    margin: 0;
    height: 100%;
  }
</style>

