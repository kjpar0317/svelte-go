<script lang="ts">
	// @ts-ignore
	import { page } from '$app/stores';
	import { onDestroy } from 'svelte';

	// @ts-ignore
	import { ARR_MENU_LOCS } from '@/constant/menu';
	// @ts-ignore
	import { common } from '@/stores/common';
	// @ts-ignore
	import { layout } from '@/stores/layout';

	import bitcoin from '@/assets/images/bitcoin.png';

	export let isLogin = false;
	export let isMobileOpen = false;
	export let isSettingOpen = false;

	const commsub = common.subscribe((obj: any) => {
		isLogin = obj.isLogin;
	});
	const layoutsub = layout.subscribe((obj: any) => {
		isMobileOpen = obj.mobileMenu;
	});

	onDestroy(commsub);
	onDestroy(layoutsub);
</script>

<nav class="bg-white border-b border-gray-100 dark:border-gray-700 dark:bg-gray-800">
	<div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
		<div class="flex justify-between h-16">
			<div class="flex">
				<!-- Logo -->
				<div class="flex items-center flex-shrink-0">
					<a href="/">
						<img src={bitcoin} class="block w-12 h-9" alt="" />
					</a>
					<span class="text-gray-900 dark:text-gray-200">COININFOS</span>
				</div>
				<!-- Navigation Links -->
				{#each ARR_MENU_LOCS as menu}
					<div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
						<a
							class={$page.url.pathname === menu.path
								? 'inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 text-gray-900 transition duration-150 ease-in-out border-b-2 border-indigo-400 dark:border-indigo-300 dark:text-gray-200 focus:outline-none focus:border-indigo-700'
								: 'inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 text-gray-900 transition duration-150 ease-in-out dark:text-gray-200 focus:outline-none focus:border-indigo-700'}
							href={menu.path}
						>
							{menu.title}
						</a>
					</div>
				{/each}
			</div>

			<div class="hidden sm:flex sm:items-center sm:ml-6">
				<button
					on:click={layout.toggleDarkMode}
					class="p-2 text-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md dark:text-gray-200 dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-700 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 active:bg-gray-50"
					aria-label="Toggle dark mode"
				>
					<svg
						class="w-5 h-5"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fill-rule="evenodd"
							d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
							clip-rule="evenodd"
						/>
					</svg>
				</button>
				{#if isLogin === false}
					<button
						class="p-2 text-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md dark:text-gray-200 dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-700 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 active:bg-gray-50"
					>
						회원가입
					</button>
					<button
						class="p-2 text-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md dark:text-gray-200 dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-700 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 active:bg-gray-50"
					>
						로그인
					</button>
				{:else}
					<div class="relative ml-3">
						<div>
							<span class="inline-flex rounded-md"
								><button
									on:click={() => {
										isSettingOpen = !isSettingOpen;
									}}
									type="button"
									class="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md dark:text-gray-200 dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-700 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 active:bg-gray-50"
									>유저 계정<svg
										class="ml-2 -mr-0.5 h-4 w-4"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fill-rule="evenodd"
											d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
											clip-rule="evenodd"
										/>
									</svg></button
								></span
							>
						</div>
						<!-- Full Screen Dropdown Overlay -->

						<div class="fixed inset-0 z-40" style="display: none;" />

						<div
							on:click={() => {
								isSettingOpen = false;
							}}
							class={isSettingOpen
								? 'absolute right-0 z-50 w-48 mt-2 origin-top-right rounded-md shadow-lg'
								: 'hidden'}
						>
							<div
								class="py-1 bg-white rounded-md dark:bg-gray-700 ring-1 ring-black ring-opacity-5"
							>
								<!-- Account Management -->
								<div class="block px-4 py-2 text-xs text-gray-400">Manage Account</div>
								<div>
									<a
										class="block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100"
										href="/"
									>
										Profile
									</a>
								</div>
								<!--v-if-->
								<div class="border-t border-gray-100 dark:border-gray-600" />
								<!-- Authentication -->

								<button
									class="block w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 transition duration-150 ease-in-out dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100"
								>
									Log Out
								</button>
							</div>
						</div>
					</div>
				{/if}
			</div>

			<div class="flex items-center -mr-2 sm:hidden">
				<button
					on:click={layout.toggleDarkMode}
					class="p-2 text-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md dark:text-gray-200 dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-700 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 active:bg-gray-50"
				>
					<svg
						class="w-5 h-5"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fill-rule="evenodd"
							d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
							clip-rule="evenodd"
						/>
					</svg>
				</button>

				<button
					on:click={layout.toggleMobileMenu}
					class="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md dark:text-gray-200 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-700 focus:text-gray-500"
					><svg class="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
						<path
							class="inline-flex"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
						<path
							class="hidden"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
			</div>
		</div>
	</div>

	<div class={isMobileOpen ? 'sm:hidden' : 'hidden'}>
		<div class="pt-2 pb-3 space-y-1">
			{#each ARR_MENU_LOCS as menu}
				<div>
					<a
						class={$page.url.pathname === menu.path
							? 'block py-2 pl-3 pr-4 text-base font-medium text-indigo-700 transition duration-150 ease-in-out border-l-4 border-indigo-400 dark:border-indigo-300 dark:text-indigo-200 bg-indigo-50 dark:bg-indigo-800 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700'
							: 'block py-2 pl-3 pr-4 text-base font-medium text-gray-600 transition duration-150 ease-in-out border-l-4 border-transparent dark:text-gray-200 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300'}
						href={menu.path}
					>
						{menu.title}
					</a>
				</div>
			{/each}
		</div>
		{#if isLogin === false}
			<div class="pt-1 pb-1 border-t border-gray-200 dark:border-gray-600">
				<div class="mt-3 space-y-1">
					<div>
						<a
							class="block py-2 pl-3 pr-4 text-base font-medium text-gray-600 transition duration-150 ease-in-out border-l-4 border-transparent dark:text-gray-200 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"
							href="/"
						>
							회원가입
						</a>
					</div>
				</div>
				<div class="mt-3 space-y-1">
					<div>
						<a
							class="block py-2 pl-3 pr-4 text-base font-medium text-gray-600 transition duration-150 ease-in-out border-l-4 border-transparent dark:text-gray-200 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"
							href="/"
						>
							로그인
						</a>
					</div>
				</div>
			</div>
		{:else}
			<div class="pt-4 pb-1 border-t border-gray-200 dark:border-gray-600">
				<div class="flex items-center px-4">
					<div>
						<div class="text-base font-medium text-gray-800 dark:text-gray-200">Manage Account</div>
						<div class="text-sm font-medium text-gray-500 dark:text-gray-400">
							hizevy@mailinator.com
						</div>
					</div>
				</div>
				<div class="mt-3 space-y-1">
					<div>
						<a
							class="block py-2 pl-3 pr-4 text-base font-medium text-gray-600 transition duration-150 ease-in-out border-l-4 border-transparent dark:text-gray-200 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"
							href="/"
						>
							Profile
						</a>
					</div>

					<button
						class="block w-full py-2 pl-3 pr-4 text-base font-medium text-left text-gray-600 transition duration-150 ease-in-out border-l-4 border-transparent dark:text-gray-200 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"
					>
						Log Out
					</button>
				</div>
			</div>
		{/if}
	</div>
</nav>
