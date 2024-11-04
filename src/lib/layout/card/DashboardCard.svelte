<script lang="ts">
	export let data: any;
</script>

<div class="flex items-center">
	{#each data.Tags as tag}
		<img src={tag.icon} alt={tag.symbol} class="block w-auto h-12 text-black dark:text-white" />
	{/each}
	<div class="ml-4 text-lg font-semibold leading-7 text-gray-600 dark:text-gray-200">
		<a href={data.link}>{data.title}</a>
	</div>
</div>
<div class="ml-12">
	<div class="mt-2 text-sm text-gray-500 dark:text-gray-400">
		{data.description}
	</div>
	<div class="grid justify-between grid-flow-col auto-cols-max">
		<a href={data.link}>
			<div
				class="flex items-center mt-3 text-sm font-semibold text-indigo-700 dark:text-indigo-400 hover:underline"
			>
				<div>링크확인</div>
				<div class="ml-1 text-indigo-500">
					<svg viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4">
						<path
							fill-rule="evenodd"
							d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
							clip-rule="evenodd"
						/>
					</svg>
				</div>
			</div>
		</a>
		<div class="flex mt-3 text-right text-gray-500 justify-items-end dark:text-gray-400">
			번역일: {data.date}
		</div>
	</div>
</div>
