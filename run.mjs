import likes from "./Likes.json";
import * as fs from "fs";

const urls = likes.data.tracks.map((track) => {
  return track.trackLink;
});

var stream = fs.createWriteStream("likes.txt", { flags: "a" });

urls.forEach(url =>{
    stream.once("open", () => {
        stream.write(url + "\r\n");
      });
});
