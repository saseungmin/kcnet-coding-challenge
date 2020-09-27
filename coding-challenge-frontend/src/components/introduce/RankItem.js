import React from 'react';

import styled from 'styled-components';
import palette from '../../lib/styles/palette';

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

const RankItemHeaderBlock = styled.div`
  font-family: 'Sunflower', sans-serif;
  padding: 9px 12px;
  display: table-cell;
  &.text-center {
    text-align: center;
  }
`;

const RankItem = ({ ranklist, loading }) => (
  <>
    <RankTableTitleBlock>
      <RankItemHeaderBlock className="text-center">순위</RankItemHeaderBlock>
      <RankItemHeaderBlock>이름</RankItemHeaderBlock>
      <RankItemHeaderBlock>LEVEL</RankItemHeaderBlock>
      <RankItemHeaderBlock>언어</RankItemHeaderBlock>
      <RankItemHeaderBlock>점수</RankItemHeaderBlock>
    </RankTableTitleBlock>
    {ranklist
        && !loading
        && ranklist.map((rank, index) => (
          <RankTableItemBoxBlock key={index}>
            <RankItemBlock className="text-center">{index + 1}</RankItemBlock>
            <RankItemBlock>{`${rank.user.userid}(${rank.user.username})`}</RankItemBlock>
            <RankItemBlock>2</RankItemBlock>
            <RankItemBlock>{rank.lang}</RankItemBlock>
            <RankItemBlock>{rank.score}</RankItemBlock>
          </RankTableItemBoxBlock>
        ))}
  </>
);

export default RankItem;
