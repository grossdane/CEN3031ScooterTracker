import { boot } from 'quasar/wrappers';
import VueGoogleMaps from '@fawmi/vue-google-maps';

export default boot(async ({ app }) => {
  app
    .use(VueGoogleMaps, {
      load: {
        key: process.env.GOOGLE_MAPS_API_KEY,
        libraries: 'places',
      },
    })
    .mount('#app');
});
