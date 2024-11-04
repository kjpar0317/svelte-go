<script lang="ts">
  // @ts-ignore
  import { ARR_MENU_LOCS } from "@/constant/menu";
</script>

<div class="bg-gray-100 dark:bg-gray-900">
  <div class="py-10 mx-auto text-gray-800 max-w-7xl dark:text-gray-200">
    <div class="text-center">
      <h3 class="mb-3 text-2xl">
        Website built with Svelte, Tailwindcss, Daisyui, Golang
      </h3>
    </div>
    <div
      class="flex flex-col items-center text-sm md:flex-row md:justify-between "
    >
      <p class="order-2 mt-8 md:order-1 md:mt-0">
        <b>&copy;</b> Copyright <strong>PKJ (kocodebank@yahoo.com)</strong>. All
        Rights Reserved
      </p>
      <div class="order-1 md:order-2">
        {#each ARR_MENU_LOCS as item, index}
          <span class={index === 0 ? "px-2" : "px-2 border-l"}
            >{item.title}</span
          >
        {/each}
      </div>
    </div>
  </div>
</div>
