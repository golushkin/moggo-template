module.exports = {
    parser: 'postcss-scss',
    plugins: {
        'autoprefixer': {},
        "cssnano": {
            "preset": [
                "default",
                { "discardComments": { "removeAll": true } }
            ]
        }
    }
}