<template>
<v-sheet :color='color_fondo' height="100%" rounded="xl">
    <v-container fluid>
      <v-row>
        <v-col>
          <img id='logo' alt="aforin logo" src="../assets/logo.png" height='100'>
          <h1>Aforín</h1>
        </v-col>
      </v-row>
      <v-row >
        <v-col align="center">
          <h2>Aforo</h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col align="center"><h1>{{actual}}/{{max}}</h1></v-col>
      </v-row>
      <v-row >
        <v-col align="center"><p id='p1'>{{mensaje}}</p></v-col>
      </v-row>
    </v-container>
</v-sheet>
</template>


<script>
import localService from "@/services/local.service"
export default {
  name: 'HelloWorld',
  data(){
    return {
      max: 0,
      actual: 0,
    }
  },
  methods:{
    fetchAforo(id){ 
      localService.getActual(id).then(response =>(this.actual = response.data));
      localService.getMax(id).then(response =>(this.max = response.data));
    }
  },
  created() {
    this.interval = setInterval(() => this.fetchAforo(1), 1000);
  },
  mounted(){
    this.fetchAforo(1);

  },
  computed:{
    mensaje(){
      if(this.max==this.actual){
        return 'El Aforo completo, espere';
      }else{
        return 'Pase, recuerde aplicarse alcohol gel';
      }
    },
    color_fondo(){
      if(this.max==this.actual){
        return'red';
      }else{
        return 'green';
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #98b3a6;
}
</style>