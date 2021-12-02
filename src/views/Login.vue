<template>
    <v-container style="padding-top: 40px">
        <v-row justify="space-around">
            <v-card width="300">
                <v-row class="justify-center">
                    <v-img
                        :src="require('../assets/login.png')"
                        max-width="200"
                    /> 
                </v-row>
                
                <v-card-title class="justify-center">   
                    Iniciar Sesión
                </v-card-title>
                <v-divider></v-divider>
                <v-container>
                    <v-row>
                        <v-col>
                            <v-text-field dense outlined label="Usuario"
                            v-model="usuario"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col >
                            <v-text-field dense outlined label="Contraseña" type="password"
                            v-model="password"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col align="center">
                            <v-btn @click="ingresar">Ingresar</v-btn>
                        </v-col>                        
                    </v-row>
                </v-container>
                
            </v-card>
        </v-row>
        
    </v-container>
        
   
</template>
<script>
export default {
    data(){
        return {
            usuario: '',
            password: ''
        }
    },
    methods:{
        ingresar(){
            if(this.validar()){
                //Indicar globalmente que estamos logeados
                this.$store.commit("auth/setLogged", true)
                //Mandarnos a dashboard
                this.$router.push('/')
            }
        },
        validar(){
            //Falta implementación
            return true
        }
    }

}
</script>