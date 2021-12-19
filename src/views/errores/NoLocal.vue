<template>
    <div>
        <h1 align="center">No se encuentra tu id de local! :C</h1>
        <div align="center">
            <p align="center" style="width: 400px; text-align: justify;">
                Por favor ve a tu pagina de administrador para revisar que la configuración esté correcta
                o intentalo denuevo
            </p>
        </div>
        <v-col align="center">
            <v-btn @click="$router.push('/configuracion')">Ir a Config</v-btn>
            <v-btn @click="$router.push('/')">Intentar denuevo</v-btn>
        </v-col>
        
    </div>
</template>

<script>
export default {
    
}
</script>