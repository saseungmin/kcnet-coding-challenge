import React from 'react';

import styled from 'styled-components';
import Moment from 'react-moment';
import palette from '../../lib/styles/palette';

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
  const {
    applystartday, applyendday, teststartday, testendday,
  } = apply;
  const applyEnd = new Date(applyendday);
  const applyStart = new Date(applystartday);
  const testStart = new Date(teststartday);
  const testEnd = new Date(testendday);

  return (
    <>
      <DateInfoBlock>
        <span>
          <b>접수</b>
        </span>
        <span>
          <Moment interval={0} format="YYYY년 MM월 DD일 HH:mm">
            {applyStart}
          </Moment>
          {' '}
          -
          {' '}
          <Moment interval={0} format="MM월 DD일 HH:mm">
            {applyEnd}
          </Moment>
        </span>
      </DateInfoBlock>
      <DateInfoBlock>
        <span>
          <b>대회</b>
        </span>
        <span>
          <Moment interval={0} format="YYYY년 MM월 DD일 HH:mm">
            {testStart}
          </Moment>
          {' '}
          -
          {' '}
          <Moment interval={0} format="MM월 DD일 HH:mm">
            {testEnd}
          </Moment>
        </span>
      </DateInfoBlock>
    </>
  );
};

export default DateInfo;
