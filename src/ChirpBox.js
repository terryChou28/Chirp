import React, { useState } from "react";
import "./ChirpBox.css";
import { Avatar, Button } from "@mui/material";
import db from "./firebase";

function ChirpBox() {
  const [chirpMessage, setChirpMessage] = useState("");
  const [chirpImage, setChirpImage] = useState("");

  const sendChirp = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Terry Chou",
      username: "chouterr",
      verified: true,
      text: chirpMessage,
      image: chirpImage,
      avatar:
        "https://media.licdn.com/dms/image/C4E03AQHoWkJ7NgUTSw/profile-displayphoto-shrink_800_800/0/1652432423341?e=1689206400&v=beta&t=YPLw0BadWFLhZyK_cfwRjzrRC3Gg3W-LIQANIVv9sZc",
    });

    setChirpMessage("");
    setChirpImage("");
  };

  return (
    <div className="chirpBox">
      <form>
        <div className="chirpBox__input">
          <Avatar src="https://media.licdn.com/dms/image/C4E03AQHoWkJ7NgUTSw/profile-displayphoto-shrink_800_800/0/1652432423341?e=1689206400&v=beta&t=YPLw0BadWFLhZyK_cfwRjzrRC3Gg3W-LIQANIVv9sZc" />
          <input
            onChange={(e) => setChirpMessage(e.target.value)}
            value={chirpMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={chirpImage}
          onChange={(e) => setChirpImage(e.target.value)}
          className="chirpBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />

        <Button
          onClick={sendChirp}
          type="submit"
          className="chirpBox__chirpButton"
        >
          Chirp
        </Button>
      </form>
    </div>
  );
}

export default ChirpBox;
