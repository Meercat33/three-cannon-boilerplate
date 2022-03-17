# three-cannon-boilerplate
A simple little boilerplate for three.js and cannon-es using node and rollup

## Initialization
+ In your terminal, run `npm init -y` to create the `package.json` file
+ In `package.json`, add `"start": "rollup -c \"rollup_config.js\" && serve"` under scripts.
+ Note: the bin locations may be different for Rollup and Serve so change that command to suit your needs.

## Dependencies
+ run `npm i three rollup rollup-plugin-terser @rollup/plugin-node-resolve cannon-es` in your terminal

## Finally...
*Run `npm start` to serve the webpage locally. (default- `http://localhost:3000`)*
