import React from 'react';
import styled from 'styled-components';
import palette from 'src/lib/styles/palette';

const MyRankListItemBlock = styled.div`
    margin-top : 2rem;
    display: flex;
    justify-content: space-around;
    justify-items: center;
    margin-bottom: 2rem;
`;

const MyChallengeRankBlock = styled.div`
  margin-bottom: 1rem;
  padding: 1rem;
  border: 0.0625rem solid #d7e2eb;
  border-radius: 0.4rem;
  height: auto;
  width: 45%;
`;


const MyRankListItem = () => {
    return (
        <MyRankListItemBlock>
            {/* TODO: 각 챌린지별 랭킹 정보*/}
            <MyChallengeRankBlock>
            각 챌린지별 랭킹 정보
            </MyChallengeRankBlock>
            {/* TODO: 전체 랭킹 정보 */}
            <MyChallengeRankBlock>
            전체 랭킹 정보
            </MyChallengeRankBlock>
        </MyRankListItemBlock>
    );
};

export default MyRankListItem;