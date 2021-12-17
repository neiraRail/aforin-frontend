<template>
<v-sheet :color='color_fondo' height="100%" >
    <v-container fluid>
      <v-row>
        <v-col>
        </v-col>
      </v-row>
      <v-row >
        <v-col align="center">
          <h2>Aforo</h2>
        </v-col>
      </v-row>
      <v-row>
          <v-col align="center"> 
            <v-sheet :color= "color_caja" rounded="rounded"  width="300"  align="center" >
              <h1>{{actual}}/{{max}}</h1>
            </v-sheet>
          </v-col>
      </v-row>
      
      
      <v-row >
        <v-col align="center"><h3 id='p1'>{{mensaje}}</h3></v-col>
      </v-row>
    </v-container>
</v-sheet>
</template>


<script>
import {mapState} from 'vuex'
import localService from "@/services/local.service"
export default {
  name: 'HelloWorld',
  data(){
    return {
      max: 0,
      actual: 0,
      local: 1,
      interval: ''
    }
  },
  methods:{
    //Respuesta asincrona deberia ignorarse, si ya se detectó la primera
    fetchAforo(id){ 
      localService.getActual(id)
        .then(response =>(this.actual = response.data))
        .catch(error => {
          console.log(error)
          clearInterval(this.interval)
          this.$router.push("/nolocal")
        })
      localService.getMax(id).then(response =>(this.max = response.data));
    }
  },
  mounted(){
    console.log(this.logged)
    if(!this.logged){
      this.$router.push("/login")
    }else{ 
      this.interval = setInterval(() => this.fetchAforo(this.local), 1000);
    }
    
    
  },
  computed:{
    mensaje(){
      if(this.max<=this.actual){
        return 'El Aforo completo, espere';
      }else{ 
        if(this.actual>=this.max*0.6 ){return 'pase con cuidaito';} 
        else{ return 'Pase, recuerde aplicarse alcohol gel';}
      }
    },
    color_fondo(){
     
      if(this.max<=this.actual){
        return'#cc5454';;
      }else{ 
        if(this.actual>=this.max*0.6 ){return '#e6bf32';} 
        else{ return '#518c35';}
      }
    },
    color_caja(){
       
      if(this.max<=this.actual){
        return '#ff8a8a';
      }else{ 
        if(this.actual>=this.max*0.8 ){return '#fce388';} 
        else{ return '#b4d4a5';}
      }

    },
    ...mapState("auth",["logged"])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
  font-size: 20px !important;
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
h1 {
  font-size: 80px !important;
  font-family: 'Poppins', sans-serif !important;

}
h2 {
  font-size: 40px !important;

}
</style>