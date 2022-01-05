import React, { useState, useEffect } from "react";
import Header from "../../Components/Header";
import {
  fetchByGenre,
  fetchPopular,
  fetchTrending,
  fetchVideoUrl,
} from "../../API";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Cards from "../../Components/Cards";

import Cover from "../../Components/Cover";
import VideoModal from "../../Components/VideoModal";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import Slider from "../../Components/Slider";

const TvShows = () => {
  const [trending, setTrending] = useState();
  const [popular, setPopular] = useState();
  const [adventure, setAdventure] = useState();
  const [comedy, setComedy] = useState();
  const [scifi, setScifi] = useState();
  const [isTrue, setIsTrue] = useState(false);
  const [videoId, setVideoId] = useState();
  const [videoUrl, setVideoUrl] = useState();

  useEffect(() => {
    const getData = async () => {
      setTrending(await fetchTrending("tv"));
      setPopular(await fetchPopular("tv"));
      setAdventure(await fetchByGenre("tv", 10759));
      setComedy(await fetchByGenre("tv", 35));
      setScifi(await fetchByGenre("tv", 10765));
    };
    getData();
  }, []);

  useEffect(() => {
    const getVideoData = async () => {
      setVideoUrl(await fetchVideoUrl("tv", videoId));
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
                shows
                changeState={setIsTrue}
                id={setVideoId}
              />
            );
          })}
        </AliceCarousel>
      </div>
      <Cards title="Popular" cdata={popular?.results} shows />
      <Cards title="Action & Adventure" cdata={adventure?.results} shows />
      <Cards title="Comedy" cdata={comedy?.results} shows />
      <Cards title="Sci-Fi & Fantasy" cdata={scifi?.results} shows />
    </div>
  );
};

export default TvShows;
