<script>
import Loading from './Loading.vue';
export default {
    components: {
        Loading,
    },
    data() {
        return {
            listAnime: [],
            searchValue: '',
        };
    },
    created() {
        fetch('https://anime-facts-rest-api.herokuapp.com/api/v1')
            .then((res) => res.json())
            .then((data) => {
                this.listAnime = data.data;
            })
            .catch((err) => console.log(err));
    },
    computed: {
        filterAnimeName() {
            return this.listAnime.filter((anime) =>
                anime.anime_name
                    .split('_')
                    .join(' ')
                    .match(this.searchValue.toLowerCase())
            );
        },
    },
};
</script>

<template>
    <TransitionGroup name="fade">
        <div v-if="!listAnime.length"><Loading /></div>
        <template v-else>
            <input
                type="text"
                placeholder="Anime Name"
                class="outline-none px-3 py-1 rounded-lg bg-opaque border-2 text-white ml-auto block w-full sm:w-auto"
                v-model="searchValue"
            />
            <ul
                class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-6"
            >
                <template
                    v-for="anime in filterAnimeName"
                    :key="anime.anime_id"
                >
                    <li
                        class="capitalize p-4 rounded-lg bg-opaque"
                        v-if="anime.anime_id !== 4"
                    >
                        <router-link :to="anime.anime_name">
                            <img
                                :src="anime.anime_img"
                                alt=""
                                class="aspect-[2/3] border-2 border-white w-full object-cover object-top bg-slate-400"
                            />
                            <p class="text-center mt-1 text-lg text-white">
                                {{ anime.anime_name.split('_').join(' ') }}
                            </p>
                        </router-link>
                    </li>
                </template>
            </ul></template
        >
    </TransitionGroup>
</template>

<style scoped>
::placeholder {
    color: #222;
    opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
