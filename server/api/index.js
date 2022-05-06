const router = require('express').Router();

router.use('/albums', require('./album'));

module.exports = router;
