<script></script>

<template>
    <div class="fixed inset-0 flex items-center justify-center">
        <div
            class="bg-opaque flex items-center justify-center flex-col gap-3 text-white rounded-xl aspect-video min-w-[720px]"
        >
            <h1 class="text-6xl">Oops</h1>
            <p class="text-2xl">Something went wrong.</p>
            <p class="text-lg">404 Page Not Found</p>
            <button
                class="bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded-lg text-lg duration-150 mt-4"
                @click="$router.push('/')"
            >
                Go Home
            </button>
        </div>
    </div>
</template>
