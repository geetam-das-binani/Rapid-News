import React, { useEffect, useState } from "react";
import Newsitems from "./Newsitems";
import PropTypes from "prop-types";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [Page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizefirstletter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updatenews = async () => {
    props.Progress(0);
     const url = `https://newsapi.org/v2/top-headlines?
     country=${props.Country}&category=${props.Category}&apiKey=${props.ApiKey}&page=${Page}&pageSize=${props.PageSize}`;
    props.Progress(30);
    let data = await fetch(url);
    let parsedData = await data.json();
    setLoading(false);
    props.Progress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    props.Progress(100);
  };

  useEffect(() => {
    updatenews();
    document.title = `${capitalizefirstletter(props.Category)}-Rapid News`;
  }, []);

  const fetchData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.Country
    }&category=${props.Category}&apiKey=${props.ApiKey}&page=${
      Page + 1
    }&pageSize=${props.PageSize}`;
    setPage(Page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  return (
    <>
      <h1
        className="text-center"
        style={{
          color: props.mode === "black" ? "black" : "white",
          marginTop: "4rem",
        }}
      >
        Rapid News-Top {capitalizefirstletter(props.Category)} Headlines
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles?.length}
        next={fetchData}
        hasMore={articles?.length !== totalResults}
        loader={<Spinner />}
        style={{ overflow: "none" }}
      >
        <div className="container">
          <div className="row">
            {articles.map((news, index) => {
              let {
                title,
                description,
                urlToImage,
                url,
                author,
                publishedAt,
                source,
              } = news;
              return (
                <div className="col-md-4" key={index}>
                  <Newsitems
                    newssource={source.name}
                    title={title}
                    description={description}
                    mode={props.mode}
                    newsurl={url}
                    imageurl={urlToImage}
                    newsauthor={author === null ? "Unknown" : author}
                    newsdate={publishedAt}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
}

News.propTypes = {
  Country: PropTypes.string,
  PageSize: PropTypes.number,
  Category: PropTypes.string,
};
News.defaultProps = {
  Country: "in",
  PageSize: 20,
  Category: "general",
};
