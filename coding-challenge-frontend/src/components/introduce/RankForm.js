import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import palette from 'src/lib/styles/palette';

const RankFormBlock = styled(Responsive)`
  margin-top: 2rem;
`;

const RankTitleBlock = styled.div`
  padding: 7px 1rem 7px 1rem;
  border-radius: 0.75rem;
  background-color: #eeebff;
  margin-bottom: 2rem;
  width: 17%;
  text-align: center;
  color: #0053f4;
  font-weight: 700;
  font-size: 1.2rem;
`;

const RankTableBlock = styled.div`
    margin: 0 0 5rem 0;
    width: 100%;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    display: table;
    border-collapse: collapse;
    border-radius: 0.5em;
    overflow: hidden;
`;

const RankTableHeaderBlock = styled.div`
  display: table-row;
  background: #f6f6f6;
  &:nth-of-type(odd){
    background: #e9e9e9;
  }
  &.header{
    font-weight: 900;
    color: #ffffff;
    background: ${palette.Teal[5]};
  }
`;

const RankRowBlock = styled.div`
    padding: 6px 12px;
    display: table-cell;
    &.text-center{
    text-align: center;
  }
`;

const RankForm = () => {
  return (
    <RankFormBlock>
      <RankTitleBlock>랭킹</RankTitleBlock>
      <RankTableBlock>
          <RankTableHeaderBlock className='header'>
            <RankRowBlock className='text-center'>
                순위
            </RankRowBlock>
            <RankRowBlock>
                이름
            </RankRowBlock>
            <RankRowBlock>
                LEVEL
            </RankRowBlock>
            <RankRowBlock>
                언어
            </RankRowBlock>
            <RankRowBlock>
                점수
            </RankRowBlock>
          </RankTableHeaderBlock>
          <RankTableHeaderBlock>
            <RankRowBlock className='text-center'>
                1
            </RankRowBlock>
            <RankRowBlock>
                사승민
            </RankRowBlock>
            <RankRowBlock>
                2
            </RankRowBlock>
            <RankRowBlock>
                JavaScript
            </RankRowBlock>
            <RankRowBlock>
                500
            </RankRowBlock>
          </RankTableHeaderBlock>
          <RankTableHeaderBlock>
            <RankRowBlock className='text-center'>
                2
            </RankRowBlock>
            <RankRowBlock>
                홍길동
            </RankRowBlock>
            <RankRowBlock>
                1
            </RankRowBlock>
            <RankRowBlock>
                JavaScript
            </RankRowBlock>
            <RankRowBlock>
                400
            </RankRowBlock>
          </RankTableHeaderBlock>
          <RankTableHeaderBlock>
            <RankRowBlock className='text-center'>
                3
            </RankRowBlock>
            <RankRowBlock>
                마바아
            </RankRowBlock>
            <RankRowBlock>
                1
            </RankRowBlock>
            <RankRowBlock>
                JavaScript
            </RankRowBlock>
            <RankRowBlock>
                300
            </RankRowBlock>
          </RankTableHeaderBlock>
      </RankTableBlock>
    </RankFormBlock>
  );
};

export default RankForm;
