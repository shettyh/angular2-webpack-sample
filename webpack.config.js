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