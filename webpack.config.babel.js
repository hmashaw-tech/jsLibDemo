/* eslint-disable sort-keys */

import {join} from 'path'

const include = join(__dirname, 'src')

export default {
    entry: './src/index',
    output: {
        path: join(__dirname, 'dist'),
        libraryTarget: 'umd',
        library: 'bestKids'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include
            },
            {
                test: /\.json$/,
                loader: 'json-loader',
                include
            }
        ]
    }
}
