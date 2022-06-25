<script setup>
import Input from './components/Input.vue';
</script>

<template>
    <div
        class="min-h-screen bg-black bg-gradient-to-br from-purple-600 to-pink-600 px-16 py-6"
    >
        <Input />
        <router-view />
    </div>
</template>
