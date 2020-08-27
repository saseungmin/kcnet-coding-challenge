import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import ComInProgressForm from './ComInProgressForm';
import palette from 'src/lib/styles/palette';

const MyInfoTemplateBlock = styled(Responsive)`
  margin-top: 4rem;
`;

const ComInProgressHeadBlock = styled.div`
    font-size: 1.4rem;
    font-weight: bold;
    color: ${palette.gray[7]};
    border-bottom: 1px solid ${palette.gray[3]};
    padding-bottom: 1rem;
    margin-bottom: 2rem;
    padding-left: 1rem;
`;

// TODO - 최상단 현재 진행중인 대회, 내가 접수한 대회, 내 랭킹 점수 정보, 내 계정 관리
const MyInfoTemplate= () => {
    return (
        <MyInfoTemplateBlock>
            <ComInProgressHeadBlock>내가 접수한 대회</ComInProgressHeadBlock>
            <ComInProgressForm/>

        </MyInfoTemplateBlock>
    );
};

export default MyInfoTemplate;