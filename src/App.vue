<template>
  <v-app>
      <v-app-bar height="130" color="#545454" app>
      
     

      <div id="banner">
        <v-img
          :src="require('../src/assets/banner.png')"
          
          width="290" height="120" 
        />
      </div>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
