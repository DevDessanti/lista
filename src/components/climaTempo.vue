<template>
    <div>
      <!-- <h1>Temperatura Atual</h1> -->
      <div v-if="loading">Carregando...</div>
      <div v-else-if="error">Erro ao carregar a temperatura.</div>
      <div class="geral" v-else>
        <div class="temp">
          <h5>{{ temperature }}°C</h5>
          <h6>{{ condicao }}</h6>
        </div>
        <div class="tempimg">
            <div v-if="temperature >= 30">
                <img class="imgtemp" src="../../public/sun.png" />
            </div>
            <div v-else-if="temperature >= 20">
                <img class="imgtemp" src="../../public/sunclouds.png" />
            </div>
            <div v-else-if="temperature >= 10">
                <img class="imgtemp" src="../../public/clouds.png" />
            </div>
            <div v-else>
                <img class="imgtemp" src="../../public/temperature.png" />
            </div>
        </div>
        <!-- <p>Temperatura Máxima: {{ maxTemperature }}°C</p>
        <p>Temperatura Mínima: {{ minTemperature }}°C</p> -->
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        temperature: null,
        maxTemperature: null,
        minTemperature: null,
        loading: false,
        error: false,
        condicao: null,
        //apiKey: '7e6acea87cad310010b144f85e327dff',
        apiKey: '6ceb21ec56cf636b30a078ed76a82717',
        cityId: '4303', //codigo cidade Araçatuba
      };
    },
    mounted() {
      this.getTemperature();
    },
    methods: {
      getTemperature() {
        // this.loading = true;
        const url = `https://apiadvisor.climatempo.com.br/api/v1/weather/locale/${this.cityId}/current?token=${this.apiKey}`;

      axios.get(url)
        .then(response => {
          this.weatherData = response.data.data;
          this.temperature = this.weatherData.temperature
          this.condicao =  this.weatherData.condition
        })
        .catch(error => {
          console.error(error);
        });
      },
    },
}
  </script>
  <style>
.imgtemp{
   
    width: 50px;
    height: 50px;
    /* border-radius: 10px; */
}
.temp{
  padding-top: 10px;
    margin-left: 30px;
}
.tempimg{
    height: 5px;
    margin-top: -60px;
    margin-left: 180px;
}
h5{
    color: #fff;
}
h6{
    color: #fff;
}


</style>