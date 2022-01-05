import React, { useState, useEffect } from "react";
import Header from "../../Components/Header";
import {
  fetchByGenre,
  fetchPopular,
  fetchTrending,
  fetchVideoUrl,
} from "../../API";

import Cards from "../../Components/Cards";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Cover from "../../Components/Cover";
import VideoModal from "../../Components/VideoModal";

const HomePage = () => {
  const [trending, setTrending] = useState();
  const [popular, setPopular] = useState();
  const [adventure, setAdventure] = useState();
  const [comedy, setComedy] = useState();
  const [horror, setHorror] = useState();
  const [videoId, setVideoId] = useState();
  const [videoUrl, setVideoUrl] = useState();
  const [isTrue, setIsTrue] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setTrending(await fetchTrending("movie"));
      setPopular(await fetchPopular("movie"));
      setAdventure(await fetchByGenre("movie", 12));
      setComedy(await fetchByGenre("movie", 35));
      setHorror(await fetchByGenre("movie", 27));
    };
    getData();
  }, []);

  useEffect(() => {
    const getVideoData = async () => {
      setVideoUrl(await fetchVideoUrl("movie", videoId));
    };
    videoId && getVideoData();
  }, [videoId]);

  const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 1 },
  };

  return (
    <div>
      {isTrue && (
        <VideoModal
          changeStateF={setIsTrue}
          videoUrl={videoUrl}
          videoId={videoId}
        />
      )}
      <Header />

      <div
        style={{
          marginTop: "3rem",
        }}
      >
        <AliceCarousel
          mouseTracking
          autoPlay
          disableButtonsControls={true}
          autoPlayInterval={3000}
          infinite
          paddingLeft={200}
          paddingRight={200}
          responsive={responsive}
        >
          {trending?.results.map((result, index) => {
            return (
              <Cover
                key={index}
                item={result}
                changeState={setIsTrue}
                id={setVideoId}
              />
            );
          })}
        </AliceCarousel>
      </div>
      <Cards title="Popular" cdata={popular?.results} />
      <Cards title="Adventure" cdata={adventure?.results} />
      <Cards title="Comedy" cdata={comedy?.results} />
      <Cards title="Horror" cdata={horror?.results} />
    </div>
  );
};

export default HomePage;
