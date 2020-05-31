import loaderController from "./loaderController";

// Export plugin object as default export
const LoaderPlugin = {
  // The install method will be called with the Vue constructor as the first argument, along with possible options
  install(Vue, options = {}) {
    /**
     * Add a component to the plugin, to get it installed globally in vue app
     * Default loader is only loaded and used if custom loader is not defined
     */
    Vue.component(
      options.componentName || "Loader",
      options.customLoader
      // ? options.customLoader
      // : () => import("./defaultLoader.vue")
    );

    // Attach loaderController to Vue class/module for vuex and other "non vue component" modules
    Vue.$loader = loaderController;
    // Attach loaderController to Vue prototype for use in Vue components with "this.$loader"
    Vue.prototype.$loader = loaderController;
  },
};

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== "undefined" && window.Vue) window.Vue.use(LoaderPlugin);

export default LoaderPlugin;
