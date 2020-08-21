import React from 'react';
import styled from 'styled-components';
import Moment from 'react-moment';
import palette from 'src/lib/styles/palette';

const DateTimeChangeBlock = styled.div`
  margin-left: 30px;
  font-weight: bold;
  font-family: 'Gamja Flower', cursive;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  display: inline-flex;
  color: white;
  text-decoration: none;
  border-radius: 0.5rem;
  text-decoration: none;
  align-items: center;
  position: relative;
  margin-top: 10px;
  margin-bottom: 7px;
  &.receive {
    background: ${palette.violet[3]};
  }
  &.deadline {
    background: #ff6b6b;
  }
  &.startapply {
    background-color: ${palette.cyan[4]};
  }
  &.starttest {
    background-color: #69db7c;
  }
`;


const DateTimeChange = ({seconds, apply}) => {
    const {applyendday,applystartday,teststartday,testendday} = apply;

    const applyEnd = new Date(applyendday),
    applyStart = new Date(applystartday),
    testStart = new Date(teststartday),
    testEnd = new Date(testendday),
    now = new Date(seconds);

  if (applyStart - now > 0) {
    return (
      <DateTimeChangeBlock className="startapply">
        <Moment fromNow>{applyStart}</Moment> &nbsp;접수 시작
      </DateTimeChangeBlock>
    );
  } else if (now - applyStart >= 0 && now - applyEnd < 0) {
    return <DateTimeChangeBlock className="blink receive">접수중</DateTimeChangeBlock>;
  } else if (now - applyEnd >= 0 && now - testStart < 0) {
    return <DateTimeChangeBlock className="deadline">접수 마감</DateTimeChangeBlock>;
  } else if (now - testStart >= 0 && now - testEnd < 0) {
    return <DateTimeChangeBlock className="blink starttest">대회 진행 중</DateTimeChangeBlock>;
  } else {
    return <DateTimeChangeBlock className="deadline">대회 종료</DateTimeChangeBlock>;
  }
};

export default DateTimeChange;
