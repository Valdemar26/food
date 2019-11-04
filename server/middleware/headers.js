const express = require('express');
const app = express();


const setHeaders = (req, res, next) => {
  try {
    const options = {
      setHeaders: function (res) {
        res.set('Access-Control-Allow-Origin', '*');
      }
    };
    app.use(express.static('public', options));
    next()
  } catch (e) {
      throw new Error();
  }
};

module.exports = setHeaders;

