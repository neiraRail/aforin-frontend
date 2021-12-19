<template>
  <v-app>
      <v-app-bar height="80" color="#545454" app>
      <v-app-bar-nav-icon 
        @click.stop="drawer = !drawer" 
        dark
        v-if="$route.name!='VistaAforo'"
      ></v-app-bar-nav-icon>
      <div id="banner">
        <v-img
          :src="require('../src/assets/banner.png')"
          
          width="150" height="63"
        />
      </div>
      <v-spacer></v-spacer>
      <h3>{{local.localNombre}}</h3>
    </v-app-bar>
    

    <v-main>
      <v-navigation-drawer app v-model="drawer"
    dark
    >
        <template v-slot:prepend>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="title">
                    Secciones
                    </v-list-item-title>
                    <v-list-item-subtitle>
                    selecciona una
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
        </template>

        <v-divider></v-divider>
        
        <v-list
        dense
        nav
        >
            <v-list-item
            v-for="item in items"
            :key="item.title"
            link
            :to="item.to"
            @click="drawer = $route.name=='VistaAforo' ? false : true"
            >
            <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "App",

  data: () => ({
    drawer: null,
    items: [
      {
          title: "Inicio",
          icon: "",
          to: "/home"
      },
      { 
          title: "Estadisticas",
          icon: "",
          to: "/estadisticas"
      },
      { 
          title: "Configuración",
          icon: "",
          to: "/configuracion"
      },
      { 
          title: "Aforo",
          icon: "",
          to: "/"
      }
    ]
  }),
  computed:{
    // Trae a variable "local" y logged del store global
    ...mapState(["local"]),
    ...mapState("auth",["logged"])
  },
  mounted(){
    if(!this.logged){
      this.$router.push("/login")
    }
  },
};
</script>
