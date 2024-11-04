<script lang="ts">
	export let item;

	function getSymbolColor(val: number) {
		if (val > 0) {
			return 'bg-green-500';
		} else if (val == 0) {
			return 'bg-slate-500';
		}

		return `bg-red-500`;
	}

	function getCurrencyColor(val: number) {
		if (val > 0) {
			return `<span class="font-bold text-green-500">${val}</span>`;
		} else if (val === 0) {
			return `<span class="font-bold text-slate-500">${val}</span>`;
		}

		return `<span class="font-bold text-red-500">${val}</span>`;
	}

	function getStatColor(stat: string) {
		if (stat === 'active') {
			return `<span class="font-bold text-green-500">${stat}</span>`;
		}

		return `<span class="font-bold text-red-500">${stat}</span>`;
	}
</script>

<div class="border border-gray-400 rounded-lg shadow lg:flex">
	<div
		class="{getSymbolColor(
			item.priceChange.priceChange24h
		)} rounded-lg lg:w-2/12 py-4 block h-full shadow-inner"
	>
		<div class="tracking-wide text-center">
			<div class="text-4xl font-bold text-white">{item.symbol}</div>
			<div class="text-2xl font-normal text-white">{item.rank}</div>
		</div>
	</div>
	<div class="w-full px-1 py-5 tracking-wide bg-white lg:w-11/12 xl:w-full lg:px-2 lg:py-2">
		<div class="flex flex-row justify-center lg:justify-start">
			<div class="px-2 text-sm font-medium text-center text-gray-700 lg:text-left">
				<i class="far fa-clock" /> 24시간 볼륨
			</div>
			<div class="px-2 text-sm font-medium text-center text-gray-700 lg:text-left">
				{item.priceChange.volume24h}
			</div>
		</div>
		<div class="px-2 text-xl font-semibold text-center text-gray-800 lg:text-left">
			{item.name}
		</div>

		<div class="px-2 pt-1 text-sm font-medium text-center text-gray-600 lg:text-left">
			<span class="font-bold text-blue-500">가격: {item.priceChange.price}</span>, 24시간변동: {@html getCurrencyColor(
				item.priceChange.priceChange24h
			)}, 7일간변동: {@html getCurrencyColor(item.priceChange.priceChange7d)}, 30일간변동: {@html getCurrencyColor(
				item.priceChange.priceChange30d
			)}
		</div>
	</div>
	<div
		class="flex flex-row items-center justify-center w-full px-2 py-4 bg-white lg:w-1/3 lg:justify-end lg:px-0"
	>
		<span
			class="px-2 mx-2 text-sm font-semibold leading-loose tracking-wider text-gray-600 bg-gray-200 rounded"
		>
			{@html getStatColor(item.status)}
		</span>
	</div>
</div>
