<script>
import Loading from './Loading.vue';
export default {
    components: {
        Loading,
    },
    data() {
        return {
            animeName: this.$router.currentRoute.value.params.anime_name,
            detail: {},
            page: 1,
            factsPerPage: 8,
        };
    },

    created() {
        fetch(
            `https://anime-facts-rest-api.herokuapp.com/api/v1/${this.animeName}`
        )
            .then((res) => res.json())
            .then((data) =>
                data.success
                    ? (this.detail = data)
                    : this.$router.push('/error/404')
            )
            .catch((err) => console.log(err));
    },
};
</script>

<template>
    <TransitionGroup name="fade">
        <div v-if="!detail.total_facts"><Loading /></div>
        <template v-else>
            <button
                type="button"
                class="bg-opaque px-3 py-1 rounded-lg mb-2"
                @click="$router.back"
            >
                Back
            </button>
            <div
                class="flex flex-col lg:flex-row items-center justify-between gap-6"
            >
                <div class="rounded-xl bg-opaque max-w-xs p-6">
                    <img
                        :src="detail.img"
                        alt=""
                        class="aspect-[2/3] h-full rounded-lg"
                    />
                </div>
                <ul class="grid gap-2 flex-1">
                    <li
                        v-for="fact in detail.data?.slice(
                            factsPerPage * page - factsPerPage,
                            factsPerPage * page
                        )"
                        :key="fact.fact_id"
                        class="bg-opaque px-3 py-1 rounded text-lg"
                    >
                        {{ fact.fact }}
                    </li>
                </ul>
            </div>
            <div class="flex items-center justify-center gap-2 mt-3 flex-wrap">
                <button
                    v-for="num in Math.ceil(
                        detail.total_facts / factsPerPage || 0
                    )"
                    class="bg-opaque rounded aspect-square h-9"
                    @click="page = num"
                    :style="page === num && 'background-color: #10b981'"
                >
                    {{ num }}
                </button>
            </div></template
        ></TransitionGroup
    >
</template>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
