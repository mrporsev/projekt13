import React, { useState } from "react";
import SongSearcher from "../Views/searchView";
import firebase from "firebase";

function Search({ atunesModel }) {
  const [song, setSong] = useState("drake");
  const [result, setResult] = useState({ resultCount: 1, results: [] });

  const url =
    "https://cors-anywhere.herokuapp.com/https://itunes.apple.com/search?term=" +
    song +
    "&limit=14";

  React.useEffect(
    () =>
      fetch(url)
        .then((response) => response.json())
        .then(setResult),
    [song]
  );
 
 /* React.useEffect(() => console.log(atunesModel.playlist), [
    atunesModel.playlist,
  ]); */

  //console.log(result)
  //console.log(atunesModel.userID)
  //atunesModel.setUser("bbbb");

  return (
    <SongSearcher
      searchSong={setSong}
      theSongs={result}
      addSong={(song) => atunesModel.addSongToPlaylist(song)}
      allSongs={(song) => atunesModel.totalSongs(song)}
      newPlaylist={() => atunesModel.newList()}
      currentSong={(songUrl) => atunesModel.setCurrentSongUrl(songUrl)}
      getSong={() => atunesModel.getCurrentSongUrl()}
    />
  );
}

export default Search;
