/*Webpack configuration file*/ 
/**
 * Entry files : main.ts - Entry to the app
 * Output: dist/bundle.js - Output location
 * Resolve: js,ts files - Telling wepack how to resolve files`
 * Module: ts with ts-loader - Typescript loader
 */
module.exports = {
    entry: "./main.ts",
    output: {
        path: __dirname,
        filename: "./dist/bundle.js"
    },
    resolve : {
        extentions: ['','.js','.ts']
    },
    module: {
        loaders : [{
            test: /\.ts/, loaders : ['ts-loader'],exclude: /node_modules/
        }]
    }
};