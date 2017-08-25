const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  console.log('Hey');

  const olda = { name: 'Olda', age: 26, cool: 'yes a lot'};
  // res.send('<h1>Hey! It works!</h1>');
  res.json(req.query);
});

router.get('/reverse/:name', (req, res) => {
  const reverse = [...req.params.name].reverse().join('');
  res.send(reverse);
});

router.get('/hello/:name/:dog', (req, res) => {
  res.render('helloExtends', {
    name: req.params.name,
    dog: req.params.dog
  });
  // res.send('<h1>Hello!</h1>');
});
module.exports = router;
