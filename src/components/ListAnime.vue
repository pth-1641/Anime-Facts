<script>
export default {
    data() {
        return {
            listAnime: [],
        };
    },
    mounted() {
        fetch('https://anime-facts-rest-api.herokuapp.com/api/v1')
            .then((res) => res.json())
            .then((data) => (this.listAnime = data.data))
            .catch((err) => console.log(err));
    },
};
</script>

<template>
    <ul class="grid grid-cols-4 gap-2 mt-6">
        <li
            class="capitalize p-4 rounded-lg bg-[rgba(255,255,255,0.3)]"
            v-for="anime in listAnime"
            :key="anime.anime_id"
        >
            <router-link
                :to="{
                    name: 'AnimeDetail',
                    params: { anime_name: anime.anime_name },
                }"
            >
                <img
                    :src="anime.anime_img"
                    alt=""
                    class="border-2 border-white max-h-80 w-full object-cover object-top"
                />
                <p class="text-center mt-1 text-lg">
                    {{ anime.anime_name.split('_').join(' ') }}
                </p>
            </router-link>
        </li>
    </ul>
</template>
