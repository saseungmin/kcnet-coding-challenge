import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import RankItem from './RankItem';

const RankFormBlock = styled(Responsive)`
  margin-top: 2rem;
`;

const RankTitleBlock = styled.div`
  padding: 7px 1rem 7px 1rem;
  border-radius: 0.75rem;
  background-color: #eeebff;
  margin-bottom: 1rem;
  width: 17%;
  text-align: center;
  color: #0053f4;
  font-weight: 700;
  font-size: 1.2rem;
`;

const RankTableBlock = styled.div`
  margin: 0 0 5rem 0;
  width: 100%;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
  display: table;
  border-collapse: collapse;
  border-radius: 0.5em;
  overflow: hidden;
`;

const RankForm = ({ rankList, loading, rankError }) => {
  if (rankError) {
    return <RankFormBlock>랭킹 에러..</RankFormBlock>;
  }

  if(loading){
    return null;
  }

  return (
    <RankFormBlock>
      <RankTitleBlock>랭킹</RankTitleBlock>
      <RankTableBlock>
        <RankItem ranklist={rankList} loading={loading}/>
      </RankTableBlock>
    </RankFormBlock>
  );
};

export default RankForm;
