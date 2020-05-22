import { defineConfig } from 'umi';
const Routes = require('./src/configs/router.config')

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: Routes.routes
});
