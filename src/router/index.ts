import { route } from 'quasar/wrappers';
import { useSupabase } from 'src/composables/use-supabase';
import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router';

import routes from './routes';

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === 'history'
    ? createWebHistory
    : createWebHashHistory;

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE),
  });
  //
  // Route Middlware
  //

  Router.beforeEach(async (to, from, next) => {
    const { supabase } = useSupabase();
    const { data: auth } = await supabase.auth.getUser();

    // User is logged in
    if (auth.user) {
      // If the user is not an admin and tries to access admin routes
      const { data } = await supabase.from('user_roles').select('*').single();
      if (to.path.includes('/admin') && data.role !== 'admin') {
        next('/');
      } else {
        next();
      }
    } else {
      // User is not logged in
      if (to.path.includes('/login') || to.path.includes('/register')) {
        next();
      } else {
        next('/login');
      }
    }
  });

  return Router;
});
