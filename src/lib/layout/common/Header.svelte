<script lang="ts">
	// @ts-ignore
	import { page } from '$app/stores';
	import { onDestroy } from 'svelte';
	import { cubicOut } from 'svelte/easing';

	// @ts-ignore
	import { common } from '@/stores/common';
	// @ts-ignore
	import { ARR_MENU_LOCS } from '@/constant/menu';
	// @ts-ignore
	import { SUPPORT_COIN } from '@/constant/coins';

	let timer = cubicOut(60);
	let maxTimeout = 0;
	let selected = SUPPORT_COIN[0];
	let timeInterval = null;

	const commsub = common.subscribe((obj: any) => {
		timer = obj.timeout;

		if (obj.timeout > 0 && maxTimeout !== obj.maxTimeout) {
			maxTimeout = obj.maxTimeout;

			timeInterval = setInterval(() => {
				if (timer > 0) {
					timer--;
				}
			}, 1000);
		}
	});

	function handleChange(e: any) {
		common.setCoin(e.target.value);
	}

	function handleRefresh() {
		// window.location.reload();
	}

	timeInterval && clearInterval(timeInterval);

	onDestroy(commsub);
</script>

<header class="bg-white shadow dark:bg-gray-800">
	<div class="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
		<div class="h-[30px] flex justify-between">
			<div>
				<h2 class="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
					{$page.url.searchParams}
				</h2>
			</div>
			<div class="space-x-3 text-base-content">
				{#if $page.url.pathname === '/aiAnalysis'}
					갱신<progress class="progress w-36 progress-primary" value={timer} max={maxTimeout}
					></progress>
					<select value={selected} class="select select-info select-sm" on:change={handleChange}>
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
				{:else}
					<button class="btn btn-square btn-primary btn-sm" on:click={handleRefresh}>
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
				{/if}
			</div>
		</div>
	</div>
</header>
