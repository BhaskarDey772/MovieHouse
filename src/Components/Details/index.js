import React, { useEffect, useState } from "react";
import star from "../../Assets/star.svg";
import {
  IMAGE_URL,
  BACKDROP_SIZE,
  PROFILE_SIZE,
  fetchDetailsById,
  fetchVideoUrl,
  fetchCredits,
} from "../../API";
import Header from "../Header";
import "./Details.css";
import ReactPlayer from "react-player";

const Details = ({ match }) => {
  const urlComponents = match.url.split("/");
  const [data, setData] = useState();

  const [video, setVideo] = useState();
  const [credit, setCredits] = useState();

  const getDetails = async () => {
    setData(await fetchDetailsById(urlComponents[1], urlComponents[2]));
    setVideo(await fetchVideoUrl(urlComponents[1], urlComponents[2]));
    setCredits(await fetchCredits(urlComponents[1], urlComponents[2]));
  };

  useEffect(() => {
    getDetails();
  }, []);

  let color = "";
  if (data?.vote_average < 4) {
    color = "rtg red";
  } else if (data?.vote_average > 4 && data?.vote_average < 7) {
    color = "rtg orange";
  } else color = "rtg";

  return (
    <div className="details">
      <Header />
      <div className="reactPlayer">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${
            video?.results[video?.results.length - 1]?.key
          }`}
          light={true}
          height="100%"
          width="100%"
        />
      </div>
      <div className="detailsTitle">
        <h1>
          {data?.name}
          {data?.title}
        </h1>
      </div>
      <div className="posterAndDesc">
        <div className="overRating">
          <p className="overview">{data?.overview}</p>
          <p className="tagline">{data?.tagline}</p>
          <div className={color}>
            <img src={star} alt="" />
            <p className="">{data?.vote_average}</p>
          </div>
        </div>
        <img
          src={IMAGE_URL + BACKDROP_SIZE + data?.poster_path}
          alt="Poster"
          className="poster"
        />
      </div>
      <div className="actorsCard">
        <h1 className="aTitle">Cast</h1>
        <div className="cast">
          {credit?.cast.map((casts) => {
            return (
              <div className="cards">
                <img src={IMAGE_URL + PROFILE_SIZE + casts?.profile_path} />
                <div className="nameAndChar">
                  <p>
                    {casts?.name}/{casts?.character}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Details;
