import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from 'src/lib/styles/palette';
import Moment from 'react-moment';

const ComInProgressFormBlock = styled.div`
    margin-bottom: 1.2rem;
`;

const ComInProgressItemBlock = styled.div`
    margin-bottom: 1rem;
    padding: 1rem;
    border: 0.0625rem solid #D7E2EB;
    border-radius: 0.25rem;
    height: auto;
    .title {
    font-size: 1rem;
    margin-bottom: 0;
    margin-top: 0;
    font-weight: 600;
    &:hover {
      color: ${palette.gray[6]};
    }
  }
`;

const DateInfoBlock = styled.div`
  color: ${palette.gray[6]};
  margin-top: 1rem;
  span + span:before {
    color: ${palette.gray[4]};
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    content: ':';
  }
`;

// TODO - 현재 진행중인 대회
const ComInProgressForm= () => {
    return (
        <ComInProgressFormBlock>
            <ComInProgressItemBlock>
                <Link to="/" className="title">개발본부 : [병역특례] 프론트엔드 개발자 (Front-End Engineer)</Link>
                <DateInfoBlock>
                <span>
                <b>대회</b>
                </span>
                <span>
                <Moment interval={0} format="YYYY년 MM월 DD일 HH:mm">2015-05-15</Moment> -
                <Moment interval={0} format="MM월 DD일 HH:mm">2015-05-17</Moment>
                </span>
            </DateInfoBlock>
            </ComInProgressItemBlock>
        </ComInProgressFormBlock>
    );
};

export default ComInProgressForm;