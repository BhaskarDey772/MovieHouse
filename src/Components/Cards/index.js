import React from "react";
import "./Cards.css";
import { useHistory } from "react-router-dom";
import { IMAGE_URL, BACKDROP_SIZE } from "../../API";

const Cards = ({ title, cdata, shows }) => {
  const history = useHistory();
  return (
    <div className="cont">
      <div className="card_container">
        <h1>{title} </h1>
        <div className="scroll">
          {cdata?.map((result, index) => {
            return (
              <div
                className="card"
                key={index}
                onClick={() =>
                  shows
                    ? history.push(`/tv/${result.id}`)
                    : history.push(`/movie/${result.id}`)
                }
              >
                <img
                  src={IMAGE_URL + BACKDROP_SIZE + result.backdrop_path}
                  alt=""
                />
                <h2>{shows ? result.name : result.title}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cards;
