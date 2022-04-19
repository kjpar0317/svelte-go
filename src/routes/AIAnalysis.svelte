<script>
  import { onMount, onDestroy } from "svelte";
  import { chart } from "svelte-apexcharts";

  // @ts-ignore
  import { common } from "@/stores/common";
  // @ts-ignore
  import { layout } from "@/stores/layout";
  // @ts-ignore
  import { getAiSentiment, getAiAnalysis } from "@/apis/ai";
  // @ts-ignore
  import { getTextColorByTheme } from "@/utils/common-util";
  // @ts-ignore
  import AIBotCard from "@/lib/layout/card/AIBotCard.svelte";
  // @ts-ignore
  import AIAnalysisCard from "@/lib/layout/card/AIAnalysisCard.svelte";

  let darkValue = true;

  let options1 = {
    series: [50, 50],
    chart: {
      width: 380,
      type: "pie",
      foreColor: getTextColorByTheme(darkValue),
    },
    labels: ["긍정적", "부정적"],
    colors: ["#10F992", "#F92210"],
    title: {
      text: "현재 시장 정서",
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };
  let options2 = {
    series: [
      {
        name: "긍정적",
        data: [44, 55],
      },
      {
        name: "부정적",
        data: [53, 32],
      },
    ],
    chart: {
      type: "bar",
      height: "auto",
      stacked: true,
      stackType: "100%",
      foreColor: getTextColorByTheme(darkValue),
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    stroke: {
      width: 1,
      colors: ["#fff"],
    },
    title: {
      text: "현재 사용자 시장 정서 분석",
    },
    xaxis: {
      categories: ["target-1", "target-2"],
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + "K";
        },
      },
    },
    fill: {
      opacity: 1,
    },
    colors: ["#10F992", "#F92210"],
    legend: {
      position: "top",
      horizontalAlign: "center",
      offsetX: 40,
    },
  };

  let currCoin = "BTC";
  let sResults = null;
  let aResults = null;

  const commSub = common.subscribe((obj) => {
    currCoin = obj.coin;
  });
  const layoutSub = layout.subscribe((obj) => {
    options1.chart.foreColor = getTextColorByTheme(obj.darkMode);
    options2.chart.foreColor = getTextColorByTheme(obj.darkMode);
  });

  async function handleSelectCoinAiAnalysis(val, bNoLoading) {
    !bNoLoading && common.setIsLoading(true);

    sResults = await getAiSentiment(val);
    aResults = await getAiAnalysis(val);

    !bNoLoading && common.setIsLoading(false);

    if (sResults !== null && sResults.RelatedArticles.length > 0) {
      options1.series = [sResults.sentiment, 100 - sResults.sentiment];

      let categories = [];
      let seriesPositive = [];
      let seriesNegative = [];

      sResults.RelatedArticles.forEach((f, index) => {
        if (
          f.Sentiment.positive.length > 0 ||
          f.Sentiment.negative.length > 0
        ) {
          categories.push(`article-${index + 1}`);

          let positiveAvg = 0;
          let negativeAvg = 0;

          if (f.Sentiment.positive.length === 0) {
            negativeAvg = 100;
          } else if (f.Sentiment.negative.length === 0) {
            positiveAvg = 100;
          } else {
            positiveAvg =
              f.Sentiment.positive.length / f.Sentiment.positive.length +
              f.Sentiment.negative.length;
            negativeAvg =
              f.Sentiment.negative.length / f.Sentiment.positive.length +
              f.Sentiment.negative.length;
          }

          seriesPositive.push(positiveAvg);
          seriesNegative.push(negativeAvg);
        }
      });
      options2.xaxis.categories = categories;
      options2.series = [
        {
          name: "긍정적",
          data: seriesPositive,
        },
        {
          name: "부정적",
          data: seriesNegative,
        },
      ];
    }
  }

  onMount(() => {
    const hinterval = setInterval(() => {
      handleSelectCoinAiAnalysis(currCoin, true);
      common.setTimeout(60);
    }, 1000 * 60);

    common.setMaxTimeout(60);
    common.setTimeout(60);

    return () => clearInterval(hinterval);
  });

  $: handleSelectCoinAiAnalysis(currCoin);

  onDestroy(commSub);
  onDestroy(layoutSub);
</script>

<div class="mx-auto space-y-2 max-w-7xl">
  <div class="grid w-full grid-cols-1 p-5 md:grid-cols-2 text-base-content">
    <div class="flex content-center justify-center">
      <div use:chart={options1} class="h-full" />
    </div>
    <div class="flex justify-center w-full">
      <div use:chart={options2} class="w-full h-full" />
    </div>
  </div>
  <div>
    {#if aResults !== null}
      <AIBotCard item={aResults} />
    {/if}
  </div>
  <div
    class="box-border mx-auto space-y-5 md:masonry-2-col lg:masonry-3-col before:box-inherit after:box-inherit"
  >
    {#if sResults !== null}
      {#each sResults.RelatedArticles as item, index}
        <AIAnalysisCard index={index + 1} {item} />
      {/each}
    {/if}
  </div>
</div>
