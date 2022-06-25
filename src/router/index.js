import { createRouter, createWebHistory } from 'vue-router';
import ListAnime from '../components/ListAnime.vue';
import AnimeDetail from '../components/AnimeDetail.vue';

const routes = [
    { path: '/', name: 'ListAnime', component: ListAnime },
    { path: '/:anime_name', name: 'AnimeDetail', component: AnimeDetail },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
