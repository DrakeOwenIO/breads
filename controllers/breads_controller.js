const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')

// INDEX
breads.get('/', (req, res) => {
    res.render('Index',
      {
        breads: Bread,
        title: 'Index Page'
      }
    )
})

// SHOW
breads.get('index', (req, res) => {
    res.send(Bread[req.parama.arrayIndex])
})

module.exports = breads
