var webpack = require("webpack");
var path = require("path");

module.exports = {
    entry: path.resolve(__dirname, "build/classes/main/min/kotlin-dce-example.js"),
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js"
    },
    resolve: {
        alias: {
            kotlin: path.resolve(__dirname, "build/classes/main/min/kotlin.js"),
            'kotlin-react': path.resolve(__dirname, "build/classes/main/min/kotlin-react.js"),
            'kotlin-react-dom': path.resolve(__dirname, "build/classes/main/min/kotlin-react-dom.js"),
            'kotlinx-html-js': path.resolve(__dirname, "build/classes/main/min/kotlinx-html-js.js"),
            'kotlin-extensions': path.resolve(__dirname, "build/classes/main/min/kotlin-extensions.js")
        }
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
};