import React from 'react';
import styled from 'styled-components';
import qs from 'qs';
import Button from './Button';

const PaginationBlock = styled.div`
  width: 320px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
`;

const PageNumber = styled.div``;

const buildLink = ({ lang, page }) => {
  const query = qs.stringify({ lang, page });
  return `/?${query}`;
};

const myInfoBuildLink = ({ page }) => {
    const query = qs.stringify({ page });
    return `/myinfo/?${query}`;
  };

const Pagination = ({ page, lastPage, lang, receiveLastPage }) => {

  return (
    <>
      {lastPage ? (
        <PaginationBlock>
          <Button
            disabled={page === 1}
            to={page === 1 ? undefined : buildLink({ lang, page: page - 1 })}
          >
            이전
          </Button>
          <PageNumber>{page}</PageNumber>
          <Button
            disabled={page === lastPage}
            to={page === lastPage ? undefined : buildLink({ lang, page: page + 1 })}
          >
            다음
          </Button>
        </PaginationBlock>
      ) : (
        <PaginationBlock>
          <Button
            disabled={page === 1}
            to={page === 1 ? undefined : `${myInfoBuildLink({ page: page - 1 })}`}
          >
            이전
          </Button>
          <PageNumber>{page}</PageNumber>
          <Button
            disabled={page === receiveLastPage}
            to={page === receiveLastPage ? undefined : `${myInfoBuildLink({ page: page + 1 })}`}
          >
            다음
          </Button>
        </PaginationBlock>
      )}
    </>
  );
};

export default Pagination;
