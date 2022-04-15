import { writable } from 'svelte/store';

function createLayoutStore() {
  const { subscribe, set, update } = writable({
    darkMode: true,
    mobileMenu: false,
  });

  return {
    subscribe,
    toggleDarkMode: () => update((obj) => ({ ...obj, darkMode: !obj.darkMode })),
    toggleMobileMenu: () => update((obj) => ({ ...obj, mobileMenu: !obj.mobileMenu })),
    reset: () => set({       
      darkMode: true,
      mobileMenu: false
    })
  };
}

export const layout = createLayoutStore();
