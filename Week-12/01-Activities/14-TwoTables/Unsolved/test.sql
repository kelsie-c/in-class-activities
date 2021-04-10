USE Top5000SongsDB;

SELECT topAlbums.id, topAlbums.artist, topAlbums.album, topAlbums.releaseYear 
FROM Top5000SongsDB.topAlbums 
LEFT JOIN Top5000SongsDB.topSongs 
ON topSongs.artist = topAlbums.artist and topSongs.releaseYear = topAlbums.releaseYear
WHERE topAlbums.artist = 'Queen'
ORDER BY topAlbums.releaseYear