import React, { useEffect, useState } from "react";
import { fetchSearchResult } from "../../API";
import Header from "../../Components/Header";
import { IMAGE_URL, BACKDROP_SIZE } from "../../API";
import "./Search.css";
import { useHistory } from "react-router";

const Search = ({ match }) => {
  const history = useHistory();
  const SearchTerm = match.params.searchterm;

  const [search, setSearch] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getSearchData();
    // eslint-disable-next-line
  }, [SearchTerm]);

  useEffect(() => {
    getSearchData();
    // eslint-disable-next-line
  }, [page]);

  const getSearchData = async () => {
    const item = await fetchSearchResult(SearchTerm, page);
    setSearch((prev) => ({
      ...item,
      results:
        page > 1 ? [...prev.results, ...item.results] : [...item.results],
    }));
  };

  return (
    <div>
      <Header />
      <div className="searchCardContainer">
        <div className="scrollSearch">
          {search?.results.map((result, index) => {
            return (
              <div
                className="scrollCard"
                key={index}
                onClick={() =>
                  result?.episode_run_time === ""
                    ? history.push(`/tv/${result.id}`)
                    : history.push(`/movie/${result.id}`)
                }
              >
                <img
                  src={IMAGE_URL + BACKDROP_SIZE + result.poster_path}
                  alt="Image"
                />
                <p className="para">not available</p>
              </div>
            );
          })}
        </div>
        {search?.total_pages > page && (
          <button className="showMore-btn" onClick={() => setPage(page + 1)}>
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default Search;
