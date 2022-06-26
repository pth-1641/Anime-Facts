import { createRouter, createWebHistory } from 'vue-router';
import ListAnime from '../components/ListAnime.vue';
import AnimeDetail from '../components/AnimeDetail.vue';
import NotFound from '../components/NotFound.vue';

const routes = [
    { path: '/', name: 'ListAnime', component: ListAnime },
    { path: '/:anime_name', name: 'AnimeDetail', component: AnimeDetail },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
