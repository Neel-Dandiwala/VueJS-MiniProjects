<script setup lang="ts">

const emit = defineEmits<{
    (event: 'add-count', number: number): void;
    (event: 'reset-count'): void;
}>()

</script>

<template>
    <p>
        <button @click="emit('add-count', 3)">Add</button>
        <button @click="emit('reset-count')">Reset</button>
    </p>
</template>
