<template>
    <button >
       {{props.isDan ? "yas" : "no"}}
    </button>
</template>

<script setup>
import {defineProps} from "vue";

const props = defineProps({
    isDan:{
        type:Boolean,
        required : true,
    }
})
</script>

<style lang="scss" scoped>

</style>