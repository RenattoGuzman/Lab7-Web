const path = require('path');

module.exports = {
  entry: {
    bundle: [
        './libros/beloved.js',
        './libros/ficciones.js',
        './libros/love.js',
        './libros/ramayana.js',
        './libros/thecastle.js',
        './libros/thefatalist.js',
        './libros/waraandpeace.js'
    ]
  },
  output: {
    filename: 'bundle-libros.js',
    path: path.resolve(__dirname, 'libros')
  }
};