<script>
export default {
    data() {
        return {
            inputValue: '',
        };
    },
};
</script>

<template>
    <input
        type="text"
        v-model="inputValue"
        class="outline-none px-3 py-1 rounded-lg bg-[rgba(255,255,255,0.3)] border-2 text-white ml-auto block"
    />
</template>
