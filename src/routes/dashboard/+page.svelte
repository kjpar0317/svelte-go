<script lang="ts">
	import { createQuery } from '@tanstack/svelte-query';

	// @ts-ignore
	import { common } from '@/stores/common';
	// @ts-ignore
	import { getCoinNews } from '@/apis/coin';
	// @ts-ignore
	import DashboardCard from '@/lib/layout/card/DashboardCard.svelte';

	const fetchResult = createQuery({
		queryKey: ['coinNews'],
		queryFn: async () => {
			common.setIsLoading(true);

			const data = await getCoinNews();

			common.setIsLoading(false);

			return data;
		},
		refetchOnWindowFocus: false,
		retry: 2
	});
</script>

<div class="py-6">
	<div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
		<div class="overflow-hidden bg-white shadow-xl dark:bg-gray-800 sm:rounded-lg">
			<div class="grid grid-cols-1 bg-gray-200 bg-opacity-25 dark:bg-gray-800 md:grid-cols-2">
				{#if $fetchResult.isSuccess}
					{#each $fetchResult.data as item, index}
						{#if index % 2 === 1}
							<div
								class="p-6 border-t border-b border-r border-gray-200 dark:border-gray-700 md:border-t-0 md:border-l"
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
