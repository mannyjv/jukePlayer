const router = require('express').Router();
const { Album, Artist, Song } = require('../db');

router.get('/', async (req, res) => {
  const album = await Album.findAll({
    include: { model: Artist },
  });
  res.send(album);
});

router.get('/:albumId', async (req, res) => {
  const albumId = await Album.findByPk(req.params.albumId, {
    include: [{ model: Artist }, { model: Song }],
  });
  res.send(albumId);
});

module.exports = router;
