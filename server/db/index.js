//import connection to db and all models into index.js of db folder
const db = require('./db');
const Album = require('./album');
const Artist = require('./artist');
const Song = require('./song');

//creating associations between models
Album.belongsTo(Artist);
Artist.hasMany(Album);

Song.belongsTo(Artist);
Artist.hasMany(Song);

Song.belongsTo(Album);
Album.hasMany(Song);

module.exports = {
  db,
  Album,
  Artist,
  Song,
  // imported models up top and include here because
  // the seed file expects to find them in this index.js file!
};
