import React from 'react';
import styled, { css } from 'styled-components';

const categories = [
  {
    name: 'all',
    text: '전체보기',
  },
  {
    name: 'business',
    text: '비즈니스',
  },
  {
    name: 'entertainment',
    text: '엔터테인먼트',
  },
  {
    name: 'health',
    text: '건강',
  },
  {
    name: 'science',
    text: '과학',
  },
  {
    name: 'sports',
    text: '스포츠',
  },
  {
    name: 'technology',
    text: '기술',
  },
];

const BlackBlock = styled.div`
  width: 100%;
  background-color: black;
  position: fixed;
`;

const CategoriesBlock = styled.div`
  box-sizing: border-box;
  display: flex;
	color: white;
  padding: 1rem 1rem 1rem 0;
  width: 1080px;
  margin: 0 auto;
  @media screen and (max-width: 1130px) {
    margin-left: 1rem;
  }
`;

const Category = styled.div`
  /* margin: 0 auto; */
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;
	
  &:hover {
    /* color: #495057; */
		color: #22b8cf;
  }

  ${props =>
    props.active &&
    css`
      font-weight: 600;	
      border-bottom: 2px solid #22b8cf;
      &:hover {
        color: #3bc9db;
      }
    `}

  & + & {
    margin-left: 1rem;
  }
`;

const Categories = ({ onSelect, category }) => {
  return (
    <BlackBlock>
    <CategoriesBlock>
      {categories.map(c => (
        <Category
          key={c.name}
          active={category === c.name}
          onClick={() => onSelect(c.name)}
        >
          {c.text}
        </Category>
      ))}
    </CategoriesBlock>
    </BlackBlock>
  );
};

export default Categories;