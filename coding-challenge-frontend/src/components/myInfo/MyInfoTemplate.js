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

// TODO - 최상단 현재 진행중인 대회, 내가 접수한 대회, 내 랭킹 점수 정보, 내 계정 관리
const MyInfoTemplate = ({ myInfoList, error, loading }) => {
  if (error) {
    return <MyInfoTemplateBlock>내 정보 불러오기 실패..</MyInfoTemplateBlock>;
  }
  return (
    <MyInfoTemplateBlock>
      <ReceiveCompetitionHeadBlock>내가 접수한 대회</ReceiveCompetitionHeadBlock>
      {/* TODO: 페이징 처리*/}
      <ReceiveCompetitionForm myInfoList={myInfoList} loading={loading} />
    </MyInfoTemplateBlock>
  );
};

export default MyInfoTemplate;
