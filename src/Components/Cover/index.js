import "./Cover.css";
import { IMAGE_URL, BACKDROP_SIZE, getShowsGenre, getGenre } from "../../API";

import play from "../../Assets/play.svg";
import star from "../../Assets/star.svg";
import { useHistory } from "react-router";

const Cover = ({ item, changeState, shows, id }) => {
  const history = useHistory();

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  let color = "";

  if (item.vote_average < 4) {
    color = "rating red";
  } else if (item.vote_average > 4 && item.vote_average < 7) {
    color = "rating orange";
  } else color = "rating";

  return (
    <div className="slider">
      <div className="container">
        <div
          className="imgContainer"
          onClick={() =>
            shows
              ? history.push(`/tv/${item.id}`)
              : history.push(`/movie/${item.id}`)
          }
        >
          {/* <div className="right"> */}
          <img
            src={IMAGE_URL + BACKDROP_SIZE + item?.backdrop_path}
            alt="Image"
          />
          <div className="gradient"></div>

          {/* </div> */}
        </div>

        <div className="box">
          <div>
            <h1 className="coverTitle">{shows ? item?.name : item?.title}</h1>
            <div className="genre-container">
              {item.genre_ids.map((genre) => {
                return (
                  <div className="genre">
                    {shows ? getShowsGenre(genre) : getGenre(genre)}
                  </div>
                );
              })}
            </div>
            <div className={color}>
              <img src={star} alt="" />
              <p className="ratingNum">{item?.vote_average}</p>
            </div>
            <p className="desc">{truncate(item?.overview, 150)}</p>
            <div
              className="watchTrailer"
              onClick={() => {
                changeState(true);
                id(item?.id);
              }}
            >
              <img src={play} alt="" />
              <p className="buttonText">Watch Trailer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
