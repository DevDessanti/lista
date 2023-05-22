<template>
    <footer class="footer">
      <div class="container">
        <div class="clima">
          <Clima/>
        </div>
      </div>
      <div class="dolar">
        <Dolar/>
      </div>
    </footer>
  </template>
  
  <script>

import Clima from './climaTempo.vue';
import Dolar from './bolsaValores.vue';


  export default {
    components: {
      Clima,
      Dolar
    },
    data() {
      return {
        currentYear: new Date().getFullYear(),
      };
    },
  };
  </script>
  
  <style>
  .footer {
    background-color: #2380EB;
    padding: 0px 0;
    text-align: center;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
  }
  .dolar{
    display: flex;
    justify-content: flex-start;
    margin-left: 20px;
  }
  </style>