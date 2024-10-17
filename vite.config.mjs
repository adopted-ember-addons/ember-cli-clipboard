import { defineConfig } from 'vite';
import { extensions, ember, classicEmberSupport } from '@embroider/vite';
import { babel } from '@rollup/plugin-babel';

// For scenario testing
const isCompat = Boolean(process.env.ENABLE_COMPAT_BUILD);
// When building the demo app for deployment we want the root index.html as the
// entry point instead of the test suite.
const isDemoBuild = Boolean(process.env.BUILD_DEMO);

export default defineConfig({
  plugins: [
    ...(isCompat ? [classicEmberSupport()] : []),
    ember(),
    babel({
      babelHelpers: 'inline',
      extensions,
    }),
  ],
  build: {
    rollupOptions: {
      input: isDemoBuild
        ? { index: 'index.html' }
        : {
            tests: 'tests/index.html',
          },
    },
  },
});
