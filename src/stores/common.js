import { writable } from "svelte/store";

function createCommonStore() {
  const { subscribe, set, update } = writable({
    currPath: "/",
    isLogin: false,
    isLoading: false,
    coin: "BTC",
  });

  return {
    subscribe,
    setCurrPath: (val) => update((obj) => ({ ...obj, currPath: val })),
    setIsLogin: (val) => update((obj) => ({ ...obj, isLogin: val })),
    setIsLoading: (val) => update((obj) => ({ ...obj, isLoading: val })),
    setCoin: (val) => update((obj) => ({ ...obj, coin: val })),
    reset: () =>
      set({
        currPath: "/",
        isLogin: false,
        isLoading: false,
        coin: "BTC",
      }),
  };
}

export const common = createCommonStore();
