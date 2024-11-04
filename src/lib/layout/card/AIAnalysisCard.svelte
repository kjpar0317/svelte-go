<script lang="ts">
	import bitcoin from '@/assets/images/bitcoin.png';

	export let index: number;
	export let item: any;

	function handleErrImage() {
		item.media = bitcoin;
	}
</script>

<div class="card w-96 bg-base-100 text-base-content indicator break-inside">
	<figure>
		{#if item.media}
			<img src={item.media} alt={item.media} on:error={handleErrImage} />
		{/if}
	</figure>
	<span class="pt-10 pr-24 indicator-item badge badge-primary"
		><span class="pb-5 pl-2">article-{index}</span></span
	>
	<div class="items-center text-center card-body">
		<h2 class="card-title">{item.title}</h2>
		<p>
			{#if item.content}
				{item.content}
			{:else}
				내용 없음
			{/if}
		</p>
		<div class="justify-end space-x-3 card-actions">
			<span>작성일: {new Date(item.dateTimeStamp * 1000).toLocaleDateString('ko-KR')}</span>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="w-6 h-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				stroke-width="2"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
				/>
			</svg>
			{item.relevantUpvotes}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="w-6 h-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				stroke-width="2"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"
				/>
			</svg>
			{item.relevantDownvotes}
		</div>
	</div>
</div>
