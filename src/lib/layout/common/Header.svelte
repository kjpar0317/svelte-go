<script>
  import { onDestroy } from "svelte";
  import { location } from "svelte-spa-router";

  // @ts-ignore
  import { common } from "@/stores/common";
  // @ts-ignore
  import { ARR_MENU_LOCS } from "@/constant/menu";
  // @ts-ignore
  import { SUPPORT_COIN } from "@/constant/coins";

  let currLoc = "";
  let currPath = "";
  let selected = SUPPORT_COIN[0];

  const locsub = location.subscribe((loc) => {
    const curr = ARR_MENU_LOCS.filter((m) => loc === m.path)[0];
    currLoc = curr.name;
    currPath = curr.path;
  });

  function handleChange(e) {
    common.setCoin(e.target.value);
  }

  function handleRefresh() {
    window.location.reload();
  }

  onDestroy(locsub);
</script>

<header class="bg-white shadow dark:bg-gray-800">
  <div class="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div class="h-[30px] flex justify-between">
      <div>
        <h2
          class="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200"
        >
          {currLoc}
        </h2>
      </div>
      <div class="space-x-3 text-base-content">
        <button
          class="btn btn-square btn-primary btn-sm"
          on:click={handleRefresh}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            ><path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            /></svg
          >
        </button>
        {#if currPath === "/aiAnalysis"}
          <select
            value={selected}
            class="select select-info select-sm"
            on:change={handleChange}
          >
            {#each SUPPORT_COIN as coin}
              <option value={coin}>
                {coin}
              </option>
            {/each}
          </select>
          <!-- <button class="btn btn-square btn-primary btn-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              ><path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              /></svg
            >
          </button> -->
        {/if}
      </div>
    </div>
  </div>
</header>
