import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from 'src/lib/styles/palette';
import Moment from 'react-moment';
import Button from '../common/Button';

const ComInProgressFormBlock = styled.div`
  margin-bottom: 1.2rem;
`;

const ComInProgressItemBlock = styled.div`
  margin-bottom: 1rem;
  padding: 1rem;
  border: 0.0625rem solid #d7e2eb;
  border-radius: 0.4rem;
  height: auto;
`;

const ComInProgressHeaderBlock = styled.div`
  display: flex;
  justify-content: space-between;
  .title {
    font-size: 1rem;
    margin-bottom: 0.3rem;
    margin-top: 0.3rem;
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
  margin-bottom: 1rem;
`;

const DateTimeChangeBlock = styled.div`
  font-size: 1rem;
  display: flex;
  justify-items: center;
  margin-right: 20px;
  font-weight: bold;
  font-family: 'Gamja Flower', cursive;
  padding-left: 0.7rem;
  padding-right: 0.7rem;
  color: white;
  text-decoration: none;
  border-radius: 0.5rem;
  align-items: center;
  &.deadline {
    background: #ff8787;
  }
`;



// TODO - 현재 진행중인 대회
const ComInProgressForm = () => {
  return (
    <ComInProgressFormBlock>
      <ComInProgressItemBlock>
        <ComInProgressHeaderBlock>
        <Link to="/" className="title">
          개발본부 : [병역특례] 프론트엔드 개발자 (Front-End Engineer)
        </Link>
        <DateTimeChangeBlock className="deadline">5일 후 접수 마감</DateTimeChangeBlock>
        </ComInProgressHeaderBlock>
        <DateInfoBlock>
          <span>
            <b>대회</b>
          </span>
          <span>
            <Moment interval={0} format="YYYY년 MM월 DD일 HH:mm">
              2015-05-15
            </Moment>
            -
            <Moment interval={0} format="MM월 DD일 HH:mm">
              2015-05-17
            </Moment>
          </span>
        </DateInfoBlock>
        <Button lang>JavaScript</Button>
        <Button lang>Python</Button>
      </ComInProgressItemBlock>
      <ComInProgressItemBlock>
      <ComInProgressHeaderBlock>
        <Link to="/" className="title">
          개발본부 : [병역특례] 프론트엔드 개발자 (Front-End Engineer)
        </Link>
        <DateTimeChangeBlock className="deadline">5일 후 접수 마감</DateTimeChangeBlock>
        </ComInProgressHeaderBlock>
        <DateInfoBlock>
          <span>
            <b>대회</b>
          </span>
          <span>
            <Moment interval={0} format="YYYY년 MM월 DD일 HH:mm">
              2015-05-15
            </Moment>
            -
            <Moment interval={0} format="MM월 DD일 HH:mm">
              2015-05-17
            </Moment>
          </span>
        </DateInfoBlock>
        <Button lang>JavaScript</Button>
        <Button lang>Python</Button>
      </ComInProgressItemBlock>
    </ComInProgressFormBlock>
  );
};

export default ComInProgressForm;
