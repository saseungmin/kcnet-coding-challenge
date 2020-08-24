import React from 'react';
import styled from 'styled-components';
import palette from 'src/lib/styles/palette';

const RankItemBlock = styled.div`
  padding: 6px 12px;
  display: table-cell;
  &.text-center {
    text-align: center;
  }
`;

const RankTableItemBoxBlock = styled.div`
  display: table-row;
  background: #f6f6f6;
  &:nth-of-type(odd) {
    background: #e9e9e9;
  }
`;

const RankTableTitleBlock = styled.div`
  display: table-row;
  font-weight: 900;
  color: #ffffff;
  background: ${palette.Teal[5]};
`;

const RankItem = ({ ranklist }) => {
  return (
    <>
      <RankTableTitleBlock>
        <RankItemBlock className="text-center">순위</RankItemBlock>
        <RankItemBlock>이름</RankItemBlock>
        <RankItemBlock>LEVEL</RankItemBlock>
        <RankItemBlock>언어</RankItemBlock>
        <RankItemBlock>점수</RankItemBlock>
      </RankTableTitleBlock>
      {ranklist.map((val, index) => 
        <RankTableItemBoxBlock key={index}>
          <RankItemBlock className="text-center">{index+1}</RankItemBlock>
          <RankItemBlock>{`${val.userid}(${val.username})`}</RankItemBlock>
          <RankItemBlock>2</RankItemBlock>
          <RankItemBlock>{val.lang}</RankItemBlock>
          <RankItemBlock>{val.score}</RankItemBlock>
        </RankTableItemBoxBlock>
      )}
    </>
  );
};

export default RankItem;
