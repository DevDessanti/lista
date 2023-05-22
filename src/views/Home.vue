<template>
    <div id="home">
      <div class="banner-principal">
        <div id="formulario">
        <b-form  @submit="onSubmit" inline>
          <b-form-input v-model="Produto" type="text" placeholder="Produto"></b-form-input>
          &nbsp;
          <b-form-select id="local" class="mb-2 mr-sm-2 mb-sm-0" v-model="Local" :options="Locals"></b-form-select>
          <b-form-select id="inline-form-custom-select-pref" class="mb-2 mr-sm-2 mb-sm-0" v-model="Quem" :options="Quems" value="Felipe"></b-form-select>
          <b-form-select id="inline-form-custom-select-pref" class="mb-2 mr-sm-2 mb-sm-0" v-model="Parcelas" :options="Parcela" :value="0"></b-form-select>
          <b-form-input v-model="Valor" type="number" step="0.01" placeholder="Valor"></b-form-input>
          &nbsp;
          <div class="botao">
            <b-button type="submit" variant="primary">Salvar</b-button>
          </div>
        </b-form>
      </div>
      </div>
      <div class="divtabela">
      <table border="1px" class="tabela">
          <tr>
            <th>Produto</th>
            <th>Categoria</th>
            <th>Quem</th>
            <th>Parcelas</th>
            <th>Valor</th>
            <th></th>

          </tr>
          <tr v-for="item in ListaProdutos" :key="item.Id">
            <td>{{item.Produto}}</td>
            <td>{{item.Local}}</td>
            <td>{{item.Quem}}</td>
            <td>{{item.Parcelas}}</td>
            <td>{{item.Valor}}</td>
            <td>
              <b-button class="btnDeletar" variant="danger" size="sm" @click="produtoDeletar(item.Id)">Deletar</b-button>
            </td>
        </tr>
      </table>
    </div>
    </div>
  </template>
  <script>

// import axios from 'axios';
import ProdutoServices from  '../services/ProdutoService'
  
  export default {
    data() {
      return {
        ListaProdutos: [],
        Quem: 'Quem?',
        Quems: ['Quem?', 'Felipe', 'Mariely'],
        Local: "Categoria",  
        Locals: ['Categoria','Mercado','Shopping','Pet','Comida','Combustivel','Veículo','Internet','Energia','Aluguel'],
        Parcelas: 0,
        Parcela: [0,1,2,3,4,5,6,7,8,9,10,11,12],
        Produto: "",
        Valor: null,
        id : 0,
        fields: [
          'Produto',
          'Local',
          'Quem',
          'Parcelas',
          'Valor'
        ],
      }
    },
    mounted() {
      this.produtoLista();
      
      
    },
    methods: {
      async onSubmit(evt) {
        evt.preventDefault();
        try{
        let response = await ProdutoServices.incluirProduto({
              Produto : this.Produto,
              Local : this.Local,
              Quem : this.Quem,
              Parcelas : this.Parcelas,
              Valor : this.Valor,
          });

          this.Produto = null,
          this.Local = "Categoria",
          this.Quem = "Quem?",
          this.Parcelas = 0,
          this.Valor = null
          
          if (response?.data != null) {
            this.produtoLista();
          }
        } catch (error) {
          console.log(error);
        }
        
        
      },
      async produtoLista(){
        try{
          let response = await ProdutoServices.produtos();
          if (response?.data != null) {
            this.ListaProdutos = response.data

            console.log(this.ListaProdutos);
          }
        } catch (error) {
            console.log(error);
        }
      },
      async produtoDeletar(id){
        try{
          let response = await ProdutoServices.deletarProduto(id);

          if (response?.data != null) {
            this.id = response.data

            this.produtoLista();
          }
        } catch (error) {
            console.log(error);
        }
      },
      
    }

    
  };
  </script>

<style>

#home{
background-color: #6BA8EE;
}
#formulario{
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 70px;
}
#lista{
  margin-top: 100px;
}
.divtabela{
    /* display: flex;
    justify-content: center; */
    margin: auto, 0;
    margin-top: 50px;
  }
  .tabela{
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
    max-width: 800px; /*defina a largura máxima para 800 pixels*/
    overflow-x: auto;
    margin: auto;
    background-color: white;
  }
  td, th {
  border: 1px solid #dddddd;
  text-align: center;
  padding: 8px;
  }
  tr:nth-child(even) {
    background-color: #dddddd;
  }
  @media (max-width: 576px) {
  .botao {
    margin: auto;
    margin-top: 15px;
  }
}
</style>
  