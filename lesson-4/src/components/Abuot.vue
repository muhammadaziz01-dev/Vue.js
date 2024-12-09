<template>
    <div>
        <h1>{{ massege }}</h1>
    </div>
</template>

<script setup>
const props = defineProps({
    massege: {
        type: String,
    }
})
</script>

<style lang="scss" scoped>

</style>