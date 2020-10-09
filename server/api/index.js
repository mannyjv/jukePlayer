const router = require('express').Router()

// connect your API routes here!

router.use('/albums', require('./album'))
// app.use('/api/artists', require('./api/artist'))
// app.use('/api/songs', require('./api/song'))

module.exports = router


