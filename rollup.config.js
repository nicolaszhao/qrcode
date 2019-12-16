import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import external from 'rollup-plugin-peer-deps-external';

import pkg from './package.json';

const scopePkgNameMatch = /^@[^/]+\/(.+)$/.exec(pkg.name);
let pkgName = pkg.name;

if (scopePkgNameMatch) {
  [, pkgName] = scopePkgNameMatch;
}

export default {
  input: 'src/index.js',
  output: [
    process.env.INCLUDE_UMD === 'true' && {
      name: 'QRCode',
      file: `dist/${pkgName}.js`,
      format: 'umd',
      banner: `/* QRCode v${pkg.version} by ${pkg.author} */`,
    },
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: pkg.module,
      format: 'esm',
    },
  ].filter(Boolean),
  plugins: [
    external(),
    babel({
      runtimeHelpers: true,
      exclude: /node_modules/,
    }),
    resolve(),
    commonjs(),
  ],
};
