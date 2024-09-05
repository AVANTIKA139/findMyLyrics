import Axios from "axios";
import { useState } from "react";
import { GiLoveSong } from "react-icons/gi";
import { FcSearch } from "react-icons/fc";

function Main() {
  const [artist, setArtist] = useState("");
  const [song, setSong] = useState("");
  const [lyrics, setLyrics] = useState("");

  function searchLyrics() {
    if (artist === "" || song === "") {
      return;
    }
    Axios.get(`https://api.lyrics.ovh/v1/${artist}/${song}`).then((res) => {
      console.log(res.data.lyrics);
      setLyrics(res.data.lyrics);
    });
  }

  return (
    <div className="App">
      <h1>
        Lyrics Finder <GiLoveSong />{" "}
      </h1>

      <input
        className="inp"
        type="text"
        placeholder="Artist name"
        onChange={(e) => {
          setArtist(e.target.value);
        }}
      />
      <input
        className="inp"
        type="text"
        placeholder="Song name"
        onChange={(e) => {
          setSong(e.target.value);
        }}
      />
      <button className="btn" onClick={() => searchLyrics()}>
        Search <FcSearch />{" "}
      </button>
      <hr />
      <div>
      <h1>Lyrics of Your Favourite Song</h1>

      <pre>{lyrics}</pre>
      </div>
      
    </div>
  );
}

export default Main;
