import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import palette from 'src/lib/styles/palette';
import ReceiveCompetitionForm from './ReceiveCompetitionForm';

const MyInfoTemplateBlock = styled(Responsive)`
  margin-top: 4rem;
`;

const ReceiveCompetitionHeadBlock = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
  color: ${palette.gray[7]};
  border-bottom: 1px solid ${palette.gray[3]};
  padding-bottom: 1rem;
  margin-bottom: 2rem;
  padding-left: 1rem;
`;

const MyInfoTemplate = ({ myInfoList, error, loading, seconds }) => {
  if (error) {
    return <MyInfoTemplateBlock>내 정보 불러오기 실패..</MyInfoTemplateBlock>;
  }
  return (
    <MyInfoTemplateBlock>
      <ReceiveCompetitionHeadBlock>내가 접수한 대회</ReceiveCompetitionHeadBlock>
      <ReceiveCompetitionForm myInfoList={myInfoList} loading={loading} seconds={seconds}/>
    </MyInfoTemplateBlock>
  );
};

export default MyInfoTemplate;
