<template>
    <div>
        <h1>No se encuentra tu id de local! :C</h1>
        <p>
            Por favor ve a tu pagina de administrador para revisar que la configuración esté correcta
            o intentalo denuevo
        </p>
        <v-btn @click="$router.push('/')">Ir a Config</v-btn>
        <v-btn @click="$router.push('/')">Intentar denuevo</v-btn>
    </div>
</template>

<script>
export default {
    
}
</script>