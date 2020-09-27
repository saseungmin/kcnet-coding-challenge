import React from 'react';
import { Link } from 'react-router-dom';

import Moment from 'react-moment';
import styled from 'styled-components';
import DateChangeTemplate from './DateChangeTemplate';
import LangTemplate from './LangTemplate';
import palette from '../../lib/styles/palette';

const ReceiveCompetitionItemBlock = styled.div`
  margin-bottom: 1rem;
  padding: 1rem;
  border: 0.0625rem solid #d7e2eb;
  border-radius: 0.4rem;
  height: auto;
`;

const ReceiveCompetitionHeaderBlock = styled.div`
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

const ReceiveCompetitionItem = ({ receive, seconds }) => {
  const {
    _id, title, teststartday, testendday, langs,
  } = receive;
  return (
    <ReceiveCompetitionItemBlock>
      <ReceiveCompetitionHeaderBlock>
        <Link to={`/introduce/${_id}`} className="title">
          {title}
        </Link>
        <DateChangeTemplate apply={receive} seconds={seconds} />
      </ReceiveCompetitionHeaderBlock>
      <DateInfoBlock>
        <span>
          <b>대회</b>
        </span>
        <span>
          <Moment interval={0} format="YYYY년 MM월 DD일 HH:mm">
            {teststartday}
          </Moment>
          -
          <Moment interval={0} format="MM월 DD일 HH:mm">
            {testendday}
          </Moment>
        </span>
      </DateInfoBlock>
      <LangTemplate langs={langs} />
    </ReceiveCompetitionItemBlock>
  );
};

export default ReceiveCompetitionItem;
