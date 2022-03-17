import resolve from "@rollup/plugin-node-resolve";
import {terser} from 'rollup-plugin-terser';

export default {
    input: 'script.js',
    output : [
        {
            format: 'umd',
            name: 'app',
            file: 'bundle.js'
        }
    ],
    plugins : [resolve(), terser()]
};