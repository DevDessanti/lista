<template>
    <div class="dolars">
      <div>
        <h6>{{ code }}</h6>
        <h5>{{ dolar }}</h5>
      </div>
      <div class="img">
        <img class="imgtemp" src="../../public/bolsavalor.png" />
      </div>
    </div>
          </template>
      <script>
    
    import axios from 'axios';
    
    export default {
      data() {
        return {
          dolar: null,
          code: null,
          error: false,
          condicao: null,
        };
      },
        mounted() {
          this.getDolar();
        },
        methods: {
          getDolar() {
            const url = `https://economia.awesomeapi.com.br/json/last/USD-BRL`;
            
            axios.get(url)
            .then(response => {
              this.DolarData = response.data;
              this.dolar = this.DolarData.USDBRL.high
              this.code = this.DolarData.USDBRL.code
              
            })
            .catch(error => {
              console.error(error);
            });
          },
        },
      }
    </script>
      <style>
    
    h5{
      color: #fff;
    }
    h6{
      color: #fff;
    }
    .dolars{
    display: flex;
    justify-content: space-between;
    }
    .img{
      margin-left: 10px;
    }
    
    
    
    </style>