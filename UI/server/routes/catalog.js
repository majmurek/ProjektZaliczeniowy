const express = require('express');
const data = require('../data/catalog.js');

const router = express.Router();

router.get('/catalog', (req, res) => {
  return res.status(200).json(data)
});

router.get('/searching', (req, res) => {
  const query = req.query.searchfor;
  const filterItemsByText = data.data.filter(i => {
    const title = i.title.toLowerCase();
    return title.includes(query.toLowerCase())
  });
  
  return res.status(200).json({
    success: true,
    payload: { data: filterItemsByText }
  })
});


module.exports = router;
