import { wrap } from "svelte-spa-router/wrap";

// Components: only Home, Loading and NotFound are statically included in the bundle
// @ts-ignore
import Loading from "@/lib/layout/common/Loading.svelte";
import NotFound from "./routes/NotFound.svelte";

// 안 됨
// function getRoutes() {
//   let results = {};

//   ARR_MENU_LOCS.forEach((f) => {
//     const conponent = import(/* @vite-ignore */ `@/routes/${f.filename}`);

//     results[f.path] = wrap({
//       asyncComponent: () => conponent,
//       // Show the loading component while the component is being downloaded
//       loadingComponent: Loading,
//     });
//   });

//   results["*"] = NotFound;

//   return results;
// }

// export const routes = getRoutes();

// Export the route definition object
export const routes = {
  // Exact path
  "/": wrap({
    // @ts-ignore
    asyncComponent: () => import("@/routes/Dashboard.svelte"),
    // Show the loading component while the component is being downloaded
    loadingComponent: Loading,
  }),
  "/coinSchedule": wrap({
    // @ts-ignore
    asyncComponent: () => import("@/routes/CoinSchedule.svelte"),
    // Show the loading component while the component is being downloaded
    loadingComponent: Loading,
  }),
  "/coinTrends": wrap({
    // @ts-ignore
    asyncComponent: () => import("@/routes/CoinTrends.svelte"),
    // Show the loading component while the component is being downloaded
    loadingComponent: Loading,
  }),
  "/aiAnalysis": wrap({
    // @ts-ignore
    asyncComponent: () => import("@/routes/AIAnalysis.svelte"),
    // Show the loading component while the component is being downloaded
    loadingComponent: Loading,
  }),
  "/community": wrap({
    // @ts-ignore
    asyncComponent: () => import("@/routes/Community.svelte"),
    // Show the loading component while the component is being downloaded
    loadingComponent: Loading,
  }),

  "*": NotFound,
  // Using named parameters, with last being optional
  // This is dynamically imported, so the code is loaded on-demand from the server
  // '/hello/:first/:last?': wrap({
  //     // Note that this is a function that returns the import
  //     asyncComponent: () => import('./routes/Name.svelte'),
  //     // Show the loading component while the component is being downloaded
  //     loadingComponent: Loading,
  //     // Pass values for the `params` prop of the loading component
  //     loadingParams: {
  //         message: 'Loading the Name route…'
  //     }
  // }),

  // // Wildcard parameter
  // // This matches `/wild/*` (with anything after), but NOT `/wild` (with nothing after)
  // // This is dynamically imported too
  // '/wild/*': wrap({
  //     // Note that this is a function that returns the import
  //     // We're adding an artificial delay of 5 seconds so you can experience the loading even on localhost
  //     // Note that normally the modules loaded with `import()` are cached, so the delay exists only on the first request.
  //     // In this case, we're adding a delay every time the component is loaded
  //     asyncComponent: () => import('./routes/Wild.svelte')
  //         .then((component) => {
  //             return new Promise((resolve) => {
  //                 // Wait 5 seconds before returning
  //                 setTimeout(() => resolve(component), 5000)
  //             })
  //         }),
  //     // Show the loading component while the component is being downloaded
  //     loadingComponent: Loading,
  //     // Pass values for the `params` prop of the loading component
  //     loadingParams: {
  //         message: 'Loading the Wild route…'
  //     }
  // }),

  // // Catch-all, must be last
  // '*': NotFound,
};
