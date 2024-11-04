<script lang="ts">
	import AgGrid from '@budibase/svelte-ag-grid';

	let data = [
		{
			no: '1',
			title: '나만 보는 사이트 (돈 벌려고...)',
			regDate: '2022-04-15'
		}
	];

	let columnDefs = [
		{
			headerName: '번호',
			field: 'no',
			sortable: true,
			editable: true
		},
		{ headerName: '제목', field: 'title', sortable: true },
		{ headerName: '작성시간', field: 'regDate', sortable: true }
	];
</script>

<div class="pt-5 mx-auto space-y-2 max-w-7xl">
	<AgGrid bind:data {columnDefs} />
</div>

<style>
	:global(:root) {
		--grid-height: 650px;
	}
</style>
