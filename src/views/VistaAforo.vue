<template>
<v-sheet :color='color_fondo'>
  <div class="hello" id=12 >
    <img id='logo' alt="aforin logo" src="../assets/logo.png" height='100'>
    <h1>Aforín</h1>
     <h2>Aforo</h2>
     <h1>{{actual}}/{{max}}</h1>
     <p id='p1'>{{mensaje}}</p>
  </div>
</v-sheet>
</template>


<script>
export default {
  name: 'HelloWorld',
  data(){
    return {
      max: 12,
      actual: 5
    }
  },
  methods:{
  },
  computed:{
    mensaje(){
      if(this.max==this.actual){
        return 'Aforo completo, espere';
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