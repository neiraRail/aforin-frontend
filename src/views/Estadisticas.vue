<template>
    <div class="container">
      <v-alert type="error" v-if="showError">
        I'm an error alert.
      </v-alert>

      <v-card v-if="loaded" class="pa-5">
        <v-card-title class="text-h5">
          <p class="text-center text-h5">
            Aforo por hora
          </p>
        </v-card-title>

        <line-chart v-if="loaded" :chart-data="aforos" :chart-labels="labels"></line-chart>
        
      </v-card>
    </div>
</template>

<script>
import LineChart from '@/components/LineChart'
export default {
    data(){
        return {
            period: "last-month",
            loaded: true,
            aforos: [1,2],
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