import SpotifyWebApi from "spotify-web-api-js";
import { useState, useEffect } from "react";

// const Spotify = require('spotify-web-api-js');

//s.searchTracks()...

const PostListItem = (props) => {

  const [song, setSong] = useState()
  const [artist, setArtist] = useState()

  const spotifyApi = new SpotifyWebApi();
  spotifyApi.setAccessToken('BQCrk5sHiOrA22EWA-9bRD8ybmMznxFNEo9EXVQu8QS6Xdwp00QrinalGq_lF_HXNm07Uzqo7Kw0SPhcOXHkdOOG9AYHsUVA76xza-0BJ9HO9hirIjh59xtBZhOV5lRqDrRUO45eRsZ6c-KkeUFw9EDsXUSNxCHvSN3hf_q_JckynBPc');

  // spotifyApi.getArtistAlbums('0TnOYISbd1XYRBk9myaseg', function (err, data) {
  //   if (err) console.error(err);
  //   else console.log('Artist albums', data);
  // });

  let songName = '';

  let artistName = '';


  spotifyApi.getTrack('11dFghVXANMlKmJXsNCbNl').then(
    function (data) {
      console.log('Artist albums', data);
      songName = data.name;
      artistName = data.artists[0].name;
      setArtist(artistName);
      setSong(songName);
      console.log(`Song name: ${songName}. Artist name: ${artistName}`)
    },
    function (err) {
      console.error(err);
    }
  );


  // This works//////////////////////////////////
  // spotifyApi.searchTracks('Love').then(
  //   function (data) {
  //     console.log('Search by "Love"', data);
  //   },
  //   function (err) {
  //     console.error(err);
  //   }
  // );
  /////////////////////////////

  // spotifyApi.getTrack('3Gq2Dme9nesdgoqNNlcN8O', function (err, data) {
  //   if (err) console.error(err);
  //   else console.log('Artist albums', data);
  // });

  return (
    <div>
      This is the HIHIHI!
      <div> Song name: {song} </div>
      <div>Arist Name: {artist} </div>


    </div>

  )

}

export default PostListItem