<template>
  <v-app>
      <v-app-bar height="80" color="#545454" app>
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
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "App",

  data: () => ({
    //
  }),
  computed:{
    // Trae a variable "local" y logged del store global
    ...mapState(["local"]),
  },
};
</script>
