import { createRouter, createWebHistory } from 'vue-router';
import ListAnime from '../components/ListAnime.vue';
import AnimeDetail from '../components/AnimeDetail.vue';
import NotFound from '../components/NotFound.vue';

const routes = [
    { path: '/', component: ListAnime },
    { path: '/:anime_name', component: AnimeDetail },
    { path: '/:pathMatch(.*)*', component: NotFound },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
