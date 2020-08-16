import React from 'react';
import styled from 'styled-components';
import palette from 'src/lib/styles/palette';
import Moment from 'react-moment';

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

const DateInfo = ({ apply }) => {
  const { applystartday, applyendday, teststartday, testendday } = apply;
  return (
    <>
      <DateInfoBlock>
        <span>
          <b>접수</b>
        </span>
        <span>
          <Moment format="YYYY년 MM월 DD일">{applystartday}</Moment> -{' '}
          <Moment format="MM월 DD일">{applyendday}</Moment>
        </span>
      </DateInfoBlock>
      <DateInfoBlock>
        <span>
          <b>대회</b>
        </span>
        <span>
          <Moment format="YYYY년 MM월 DD일 HH:mm">{teststartday}</Moment> -{' '}
          <Moment format="MM월 DD일 HH:mm">{testendday}</Moment>
        </span>
      </DateInfoBlock>
    </>
  );
};

export default DateInfo;
