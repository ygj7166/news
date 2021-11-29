import React from 'react';
import styled from 'styled-components';

const NewsItemBlock = styled.div`
  display: flex;
  .thumbnail {
    margin-right: 1rem;
    img {
      display: block;
      width: 280px;
      height: 175px;
      object-fit: cover;
    }
  }
  .contents {
    h2 {
      margin: 0;
      a {
        color: black;
        text-decoration: none;
      }
    }
    p {
      margin: 0;
      line-height: 1.5;
      /* margin-left: 0.5rem; */
      white-space: normal;
    }
  }
  & + & {
    margin-top: 2.5rem;
  }
  .blank {
    margin-top: 0.5rem;
  }
  .at {
    float: right;
    padding-top: 0.5rem;
  }
`;

const NewsItem = ({ article }) => {
  const { title, description, url, urlToImage, publishedAt } = article;
  return (
    <NewsItemBlock>
      {urlToImage && (
        <div className="thumbnail">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={urlToImage} alt="thumbnail" />
          </a>
        </div>
      )}
      <div className="contents">
        <h2>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h2>
      <div className="blank"></div>
        <p>{description}</p>
        <p className="at">{publishedAt}</p>
      </div>
    </NewsItemBlock>
  );
};

export default NewsItem;