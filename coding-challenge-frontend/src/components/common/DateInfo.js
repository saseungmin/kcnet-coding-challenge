import React from 'react';
import styled from 'styled-components';
import palette from 'src/lib/styles/palette';

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

const DateInfo= () => {
    return (
        <>
        <DateInfoBlock>
          <span>
            <b>접수</b>
          </span>
          <span>20년 08월 03일 11:00 - 08월 21일 18:00</span>
        </DateInfoBlock>
        <DateInfoBlock>
          <span>
            <b>대회</b>
          </span>
          <span>20년 08월 28일 09:00 - 10월 04일 23:59</span>
        </DateInfoBlock>
        </>
    );
};

export default DateInfo;