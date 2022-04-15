<script>
  export let item;

  function getSymbolColor(val) {
    if (val > 0) {
      return "bg-green-500";
    } else if (val == 0) {
      return "bg-slate-500";
    }

    return `bg-red-500`;
  }

  function getCurrencyColor(val) {
    if (val > 0) {
      return `<span class="text-green-500 font-bold">${val}</span>`;
    } else if (val === 0) {
      return `<span class="text-slate-500 font-bold">${val}</span>`;
    }

    return `<span class="text-red-500 font-bold">${val}</span>`;
  }

  function getStatColor(stat) {
    if (stat === "active") {
      return `<span class="text-green-500 font-bold">${stat}</span>`;
    }

    return `<span class="text-red-500 font-bold">${stat}</span>`;
  }
</script>

<div class="lg:flex shadow rounded-lg border  border-gray-400">
  <div
    class="{getSymbolColor(
      item.priceChange.priceChange24h
    )} rounded-lg lg:w-2/12 py-4 block h-full shadow-inner"
  >
    <div class="text-center tracking-wide">
      <div class="text-white font-bold text-4xl ">{item.symbol}</div>
      <div class="text-white font-normal text-2xl">{item.rank}</div>
    </div>
  </div>
  <div
    class="w-full  lg:w-11/12 xl:w-full px-1 bg-white py-5 lg:px-2 lg:py-2 tracking-wide"
  >
    <div class="flex flex-row lg:justify-start justify-center">
      <div
        class="text-gray-700 font-medium text-sm text-center lg:text-left px-2"
      >
        <i class="far fa-clock" /> 24시간 볼륨
      </div>
      <div
        class="text-gray-700 font-medium text-sm text-center lg:text-left px-2"
      >
        {item.priceChange.volume24h}
      </div>
    </div>
    <div
      class="font-semibold text-gray-800 text-xl text-center lg:text-left px-2"
    >
      {item.name}
    </div>

    <div
      class="text-gray-600 font-medium text-sm pt-1 text-center lg:text-left px-2"
    >
      <span class="text-blue-500 font-bold">가격: {item.priceChange.price}</span
      >, 24시간변동: {@html getCurrencyColor(item.priceChange.priceChange24h)},
      7일간변동: {@html getCurrencyColor(item.priceChange.priceChange7d)},
      30일간변동: {@html getCurrencyColor(item.priceChange.priceChange30d)}
    </div>
  </div>
  <div
    class="flex flex-row items-center w-full lg:w-1/3 bg-white lg:justify-end justify-center px-2 py-4 lg:px-0"
  >
    <span
      class="tracking-wider text-gray-600 bg-gray-200 px-2 text-sm rounded leading-loose mx-2 font-semibold"
    >
      {@html getStatColor(item.status)}
    </span>
  </div>
</div>
