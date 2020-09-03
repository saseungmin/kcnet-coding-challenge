import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import palette from 'src/lib/styles/palette';
import MyRankListItem from './MyRankListItem';

const MyRankListFormBlock = styled(Responsive)`
  margin-top: 4rem;
`;

const MyRankHeadBlock = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
  color: ${palette.gray[7]};
  border-bottom: 1px solid ${palette.gray[3]};
  padding-bottom: 1rem;
  margin-bottom: 2rem;
  padding-left: 1rem;
`;

// TODO: 내 랭킹 점수 정보
const MyRankListForm = () => {
  return (
    <MyRankListFormBlock>
      <MyRankHeadBlock>내 랭킹 정보</MyRankHeadBlock>
      <MyRankListItem />
    </MyRankListFormBlock>
  );
};

export default MyRankListForm;
