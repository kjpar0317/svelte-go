<script>
  import positiveImg from "@/assets/images/positive.png";
  import negativeImg from "@/assets/images/negative.png";

  export let item;
</script>

<div class="shadow-xl card card-side bg-base-100 text-base-content">
  <figure>
    {#if item.recomendedAction === "buy"}
      <img src={positiveImg} alt="Positive" />
    {:else}
      <img src={negativeImg} alt="Negative" />
    {/if}
  </figure>
  <div class="card-body">
    <h2 class="card-title">
      AIBot 의견 : <span
        class={item.recomendedAction === "buy"
          ? "font-bold text-emerald-400 uppercase"
          : "font-bold text-red-600 uppercase"}>{item.recomendedAction}</span
      >
    </h2>
    <p>
      {item.reasonFound}
    </p>
    <div class="justify-end card-actions">
      의견일 : {item.date}
    </div>
  </div>
</div>
