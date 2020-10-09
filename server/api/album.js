const router = require('express').Router()
const Album = require('../db/album')
const Artist = require('../db/artist')
const Song = require('../db/song')

router.get('/', async (req, res) => {
    const album = await Album.findAll({
        include: {model: Artist}
    })
    res.send(album)
})

router.get('/:albumId', async (req, res) => {
    const albumId = await Album.findByPk((req.params.albumId), {
        include: [{model: Artist}, {model:Song}],
    })
    res.send(albumId)
})

module.exports = router;
