<script>
  import { onMount } from "svelte";

  // @ts-ignore
  import { common } from "@/stores/common";
  // @ts-ignore
  import { getCoinTrends } from "@/apis/coin";
  // @ts-ignore
  import CoinTrendCard from "@/lib/layout/card/CoinTrendCard.svelte";

  let results = null;

  onMount(async () => {
    common.setIsLoading(true);

    results = await getCoinTrends();

    common.setIsLoading(false);
  });
</script>

<div class="mx-auto space-y-2 max-w-7xl pt-5">
  {#if results !== null}
    {#each results.result as item, index}
      <CoinTrendCard {item} />
    {/each}
  {/if}
</div>
