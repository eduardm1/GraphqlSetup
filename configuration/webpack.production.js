import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import merge from 'webpack-merge';
import nodeExternals from 'webpack-node-externals';
import { join } from 'path';

import common from './webpack.common.js';

export default merge(common, {
    devtool: 'source-map',
    entry: [join(__dirname, 'src/main.ts')],
    externals: [nodeExternals({})],
    mode: 'production',
    plugins: [new CleanWebpackPlugin()],
});
