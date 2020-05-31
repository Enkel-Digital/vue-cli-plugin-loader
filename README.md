# loader
- vuetify plugin needs to be installed into vue first before this plugin is installed
- Example/Reference on how loaderRequest object would look like
    ```js
    const loaderRequestReference = {
        fullScreen: true // Bool value to determine what type of loader to show
    };
    ```

Roadmap:
- Implement timeout on loaders, removing after a fixed time
- All loader callers need to clear themselves, else should specify a timestamp of when to timeout
- If they specify a timestamp to delete remove the loader, they do not have the loader removal theselves.
- Built a auto clean up algorithm to figure out when to delete the loaders



https://github.com/karol-f/vue-custom-element/blob/master/package.json
https://github.com/imcvampire/vue-axios/blob/master/index.d.ts


add files attribute to package.json