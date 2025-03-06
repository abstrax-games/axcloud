import { ref } from 'vue';
import { defineStore } from "pinia";

export const useNavbarConfigStore = defineStore('navbarConfig', () => {
    const navbarMode = ref(1);

    function setNavbarMode(mode: number) {
        navbarMode.value = mode;
    }

    return {
        navbarMode,
        setNavbarMode
    };
});