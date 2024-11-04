<script lang="ts">
	import { onDestroy } from 'svelte';
	// @ts-ignore
	import { browser } from '$app/environment';
	import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';

	// @ts-ignore
	import { common } from '@/stores/common';
	// @ts-ignore
	import { layout } from '@/stores/layout';
	// @ts-ignore
	import Navbar from '@/lib/layout/common/Navbar.svelte';
	// @ts-ignore
	import Header from '@/lib/layout/common/Header.svelte';
	// @ts-ignore
	import Footer from '@/lib/layout/common/Footer.svelte';
	// @ts-ignore
	import Loading from '@/lib/layout/common/Loading.svelte';

	import '../app.css';

	let isLoading = false;
	let darkValue = true;

	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				enabled: browser
			}
		}
	});

	const loadingSub = common.subscribe((value: any) => {
		isLoading = value.isLoading;
	});

	const layoutSub = layout.subscribe((value: any) => {
		darkValue = value.darkMode;
	});

	onDestroy(loadingSub);
	onDestroy(layoutSub);
</script>

<QueryClientProvider client={queryClient}>
	<div
		data-theme={darkValue ? 'dark' : 'corporate'}
		class={darkValue ? 'dark font-sans antialiased' : 'font-sans antialiased'}
	>
		<div class="min-h-screen bg-gray-100 dark:bg-gray-900">
			<Navbar />
			<Header />
			<main>
				<slot />
			</main>
			<Footer />
			{#if isLoading}
				<Loading />
			{/if}
		</div>
	</div>
</QueryClientProvider>
