import {BuildOptions} from "../types/types";
import {removeDatatestIdBabelPlugin} from "./removeDatatestIdBabelPlugin";

export function buildBabelLoader(options: BuildOptions) {

    const isProd = options.mode === 'production'

    const plugins = []

    if (isProd) {
        plugins.push(
            [
                removeDatatestIdBabelPlugin,
                {props: ['data-testid']}
            ]
        )
    }

    return {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ["@babel/preset-env", "@babel/preset-typescript", "@babel/preset-react"],
                plugins: plugins.length ? plugins : undefined
            }
        }
    }
}