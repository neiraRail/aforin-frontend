<template>
    <div class="container">
      <v-alert type="error" v-if="showError">
        I'm an error alert.
      </v-alert>
      <v-container>
        <v-row>
          <v-col cols="8">
            <v-card v-if="loaded" class="pa-5">
              <v-card-title class="text-h5">
                <p class="text-center text-h5">
                  Aforo por hora
                </p>
              </v-card-title>

              <line-chart v-if="loaded" :chart-data="aforos" :chart-labels="labels"></line-chart>
              
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card height="520">
              <v-card-title class="text-h5">
                <p class="text-center text-h5">
                  Horario de más actividad
                </p>
              </v-card-title>

              <v-card-text>
                <v-row>
                  <v-col>18:30 - 19:30</v-col>
                  <v-col>97 clientes</v-col>
                </v-row>

              </v-card-text>
              <v-divider class="mx-4"></v-divider>
              <v-card-title class="text-h5">
                <p class="text-center text-h5">
                  Días de más actividad
                </p>
              </v-card-title>
              <v-card-text>
                <v-row>
                  <v-col>Viernes</v-col>
                  <v-col>1437 clientes</v-col>
                </v-row>
                <v-row>
                  <v-col>Sábado</v-col>
                  <v-col>1098 clientes</v-col>
                </v-row>
                <v-row>
                  <v-col>Lunes</v-col>
                  <v-col>773 clientes</v-col>
                </v-row>

              </v-card-text>

            </v-card>
          </v-col>
        </v-row>
      </v-container>
      
    </div>
</template>

<script>
import LineChart from '@/components/LineChart'
export default {
    data(){
        return {
            period: "last-month",
            loaded: true,
            aforos: [1,2,1,3,5],
            labels: ['12:00','12:10','12:20','12:30','12:40'],
            showError: false,
        }
    },
    components:{
        LineChart
    },
    methods:{
    },
}
</script>