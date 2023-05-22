<template>
  <div id="menu">
    <div class="nav" v-if="$route.path === '/'">
      <div class="btnmenu">
      <b-button size="sm" v-b-toggle.sidebar-backdrop>Menu</b-button>
      </div>
          <b-sidebar
            id="sidebar-backdrop"
            title="Escolha o Mês"
            :backdrop-variant="variant"
            backdrop
            shadow
          >
          <div class="px-3 py-2">
            <b-form-group label-for="backdrop-variant">
              //Conteudo
            </b-form-group>
          </div>
        </b-sidebar>
          <h4>Lista Mensal</h4>
          <div >
            <b-button size="sm" class="btnSair" variant="danger" @click="saindo">
              <b-icon icon="box-arrow-in-left" class="mr-2"></b-icon>
              Sair
            </b-button>
          </div>
        </div>
      <div class="nav" v-if="$route.path === '/login'">
        <h4>Login</h4>
      </div>
    </div>
  </template>
  <script>


  
  export default {
    name: "Home",
    components: {
      // Clima
    },
    methods: {
        saindo(){
        localStorage.removeItem('user', true)
        this.$router.push('/login')
      }
    }
    // data() {
    //   return {
        
    //   };
    // }
  };
  </script>

<style>

#menu{
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 9999;
}
.nav{
    display: flex;
    justify-content: center;
    padding-top: 10px;
    background-color: #103B6B;
}
h4{
    color: aliceblue;
}
.btnSair{
  position: absolute;
  top: 0;
  right: 0;
  margin: 10px;
  /* border-radius: 50%;
  padding: 12px 20px; */
}

.btnmenu{
  position: absolute;
  top: 0;
  left: 0;
  margin: 10px;
}


</style>
  