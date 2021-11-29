import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem.js';
import axios from 'axios';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 1080px;
  margin: 0 auto;
  @media screen and (max-width: 1130px) {
    margin-left: 1rem;
  }
`;

const NewsList = ({ category }) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // async를 사용하는 함수 따로 선언
    const fetchData = async () => {
      setLoading(true);
      try {
        // 현재 category 값이 무엇인지에 따라 요청할 주소가 동적으로 바뀌고 있습니다.
        // category 값이 all이라면 query 값을 공백으로 설정하고,
        // all이 아니라면 "&category=카테고리" 형태를 만들도록 했습니다.
        // 그리고 이 query를 요청할 때 주소에 포함시켜 주었습니다.

        const query = category === 'all' ? '' : `&category=${category}`; 
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=eb44b2236d7d425e9a02e7a413d7efc0`,
        );
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [category]);


  if (loading) {
    return <NewsListBlock>불러오는 중</NewsListBlock>;
  }

  if (!articles) {
    // map 함수를 사용하기 전에 해당값이 null인지 확인하자
    // 이 작업을 하지 않으면, 아직 데이터가 없을 때 null에는
    // map 함수가 없기 때문에 렌더링 과정에서 오류난다.
    return null;
  }

  return (
    <NewsListBlock>
      {articles.map(article => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;