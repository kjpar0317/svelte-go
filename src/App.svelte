<script>
  // @ts-nocheck
  import { onDestroy } from "svelte";
  import Router from "svelte-spa-router";

  import { routes } from "./routes";
  import { common } from "@/stores/common";
  import { layout } from "@/stores/layout";
  import Navbar from "./lib/layout/common/Navbar.svelte";
  import Header from "./lib/layout/common/Header.svelte";
  import Footer from "./lib/layout/common/Footer.svelte";
  import Loading from "./lib/layout/common/Loading.svelte";

  import "./index.css";

  let isLoading = false;
  let darkValue = true;

  const loadingSub = common.subscribe((value) => {
    isLoading = value.isLoading;
  });

  const layoutSub = layout.subscribe((value) => {
    darkValue = value.darkMode;
  });

  onDestroy(loadingSub);
  onDestroy(layoutSub);
</script>

<div
  data-theme={darkValue ? "dark" : "corporate"}
  class={darkValue ? "dark font-sans antialiased" : "font-sans antialiased"}
>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-900">
    <Navbar />
    <Header />
    <main>
      <Router {routes} />
    </main>
    <Footer />
    {#if isLoading}
      <Loading />
    {/if}
  </div>
</div>
