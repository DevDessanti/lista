<template>
    <div class="login-container">
      <b-card class="login-card">
        <b-form @submit.prevent="submit">
          <b-iconstack font-scale="4" style="margin-bottom: 15px;">
        <b-icon stacked icon="square"></b-icon>
        <b-icon stacked icon="check"></b-icon>
      </b-iconstack>
          <b-form-group label="" label-for="username">
            <b-form-input placeholder="Insira seu usuário..." id="username" v-model="username" required></b-form-input>
          </b-form-group>
  
          <b-form-group label="" label-for="password">
            <b-form-input placeholder="Insira sua senha..." id="password" type="password" v-model="password" required></b-form-input>
          </b-form-group>
  
          <b-button type="submit" variant="primary" block>Entrar</b-button>
        </b-form>
      </b-card>
    </div>
  </template>
  
  
  <script>
  import LoginService from  '../services/LoginService'
  import Swal from 'sweetalert2'
  
    export default {
      data() {
        return {
          ListaUsuarios: [],
          username: '',
          password: ''
        }
      },
      mounted() {
        this.produtoLista();
      },
      methods: {
        async produtoLista(){
            try{
              let response = await LoginService.usuario();
              if (response?.data != null) {
                this.ListaUsuarios = response.data
              }
            } catch (error) {
                console.log(error);
            }
          },
        submit() {
    
          if (this.username === this.ListaUsuarios[0].usuario && this.password === this.ListaUsuarios[0].senha) {
        // usuário autenticado, navegue para a página inicial
        localStorage.setItem('user', true)
        this.$router.push('/')
      } else {
        // exibir mensagem de erro
        Swal.fire({
            title: 'Erro!',
            text: 'As credenciais de login estão incorretas.',
            icon: 'error',
            confirmButtonText: 'OK',
            customClass: {
            confirmButton: 'btn-error' // adiciona a classe personalizada
          }
          })
        }
      },
    }
  }
    </script>
  <style scoped>
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
    background-color: #6BA8EE;
    /* height: 100vh;
    background-color: #f9f9f9; */
  }
  
  .login-card {
    width: 400px;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: #fff;
  }
  
  .btn-error {
    background-color: green;
    color: white;
  }
  
  </style>