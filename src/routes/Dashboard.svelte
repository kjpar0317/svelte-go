<script>
  import { onMount } from "svelte";
  // @ts-ignore
  import { common } from "@/stores/common";
  // @ts-ignore
  import { getCoinNews } from "@/apis/coin";
  // @ts-ignore
  import DashboardCard from "@/lib/layout/card/DashboardCard.svelte";

  let items = [];

  common.setIsLoading(true);

  onMount(async () => {
    items = await getCoinNews();
    common.setIsLoading(false);
  });
</script>

<div class="py-6">
  <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div
      class="overflow-hidden bg-white shadow-xl dark:bg-gray-800 sm:rounded-lg"
    >
      <div
        class="grid grid-cols-1 bg-gray-200 bg-opacity-25 dark:bg-gray-800 md:grid-cols-2 "
      >
        {#if items}
          {#each items as item, index}
            {#if index % 2 === 1}
              <div
                class="p-6 border-t border-r border-b border-gray-200 dark:border-gray-700 md:border-t-0 md:border-l"
              >
                <DashboardCard data={item} />
              </div>
            {:else if index % 2 === 0}
              <div
                class="p-6 border-t border-b border-gray-200 dark:border-gray-700 md:border-t-0 md:border-l"
              >
                <DashboardCard data={item} />
              </div>
            {/if}
          {/each}
        {/if}
      </div>
    </div>
  </div>
</div>
