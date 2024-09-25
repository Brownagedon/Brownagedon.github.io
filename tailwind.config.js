module.exports = {
    content: [
      './_drafts/**/*.html',
      './_includes/**/*.html',
      './_layouts/**/*.html',
      './_posts/*.md',
      './*.md',
      './*.html',
    ],
    theme: {
        colors: {
            'white': '#fffbeb',
            'hovwhite': '#fef3c7',
            'txtbg': '#140d0a',
            },
        extend: {
            backgroundImage: {
                "bush": "url('../images/IMG_0362.JPG')",
                "snack": "url('../images/IMG_0378.JPG')"
            }
        },
    },
    plugins: []
}
  