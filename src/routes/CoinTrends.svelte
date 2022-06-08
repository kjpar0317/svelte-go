<script>
  import { useQuery } from "@sveltestack/svelte-query";

  // @ts-ignore
  import { common } from "@/stores/common";
  // @ts-ignore
  import { getCoinTrends } from "@/apis/coin";
  // @ts-ignore
  import CoinTrendCard from "@/lib/layout/card/CoinTrendCard.svelte";

  const fetchResult = useQuery(
    "coinTrends",
    async () => {
      common.setIsLoading(true);

      const data = await getCoinTrends();

      common.setIsLoading(false);

      return data;
    },
    { refetchOnWindowFocus: false }
  );
</script>

<div class="mx-auto space-y-2 max-w-7xl pt-5">
  {#if $fetchResult.isSuccess}
    {#each $fetchResult.data as item, index}
      <CoinTrendCard {item} />
    {/each}
  {/if}
</div>
