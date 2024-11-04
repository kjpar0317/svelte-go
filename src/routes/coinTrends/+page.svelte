<script lang="ts">
	import { createQuery } from '@tanstack/svelte-query';

	// @ts-ignore
	import { common } from '@/stores/common';
	// @ts-ignore
	import { getCoinTrends } from '@/apis/coin';
	// @ts-ignore
	import CoinTrendCard from '@/lib/layout/card/CoinTrendCard.svelte';

	const fetchResult = createQuery({
		queryKey: ['coinTrends'],
		queryFn: async () => {
			common.setIsLoading(true);

			const data = await getCoinTrends();

			common.setIsLoading(false);

			return data.result;
		},
		refetchOnWindowFocus: false
	});
</script>

<div class="pt-5 mx-auto space-y-2 max-w-7xl">
	{#if $fetchResult.isSuccess}
		{#each $fetchResult.data as item, index}
			<CoinTrendCard {item} />
		{/each}
	{/if}
</div>
