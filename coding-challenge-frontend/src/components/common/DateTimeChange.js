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
  &.applyline {
    background: #ffa94d;
  }
  &.testreceive {
    background: #74c0fc;
  }
`;

const IntroduceDateTimeChangeBlock = styled.div`
  font-weight: bold;
  font-family: 'Gamja Flower', cursive;
  color: white;
  text-decoration: none;
  border-radius: 0.5rem;
  margin-top: 7px;
  padding-top: 0.4rem;
  padding-bottom: 0.4rem;
  display: inline-flex;
  align-items: center;
  position: relative;
  justify-content: center;

  &.receive {
    background: ${palette.violet[3]};
    width: 100%;
  }
  &.deadline {
    background: #ff6b6b;
    padding-left: 2.8rem;
    padding-right: 2.8rem;
  }
  &.startapply {
    background-color: ${palette.cyan[4]};
    width: 100%;
  }
  &.starttest {
    background-color: #69db7c;
    padding-left: 1.35rem;
    padding-right: 1.35rem;
  }
  &.applyline {
    background: #ffa94d;
    width: 100%;
  }
  &.testreceive {
    background: #74c0fc;
    padding-left: 2.25rem;
    padding-right: 2.25rem;
  }
`;

const DateTimeUlBlock = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const DateTimeChange = ({ seconds, apply, toggle }) => {
  const { applyendday, applystartday, teststartday, testendday } = apply;

  const applyEnd = new Date(applyendday),
    applyStart = new Date(applystartday),
    testStart = new Date(teststartday),
    testEnd = new Date(testendday),
    now = new Date(seconds);
    
  if (applyStart - now > 0) {
    return (
      <>
        {toggle ? (
          <DateTimeUlBlock>
            <li>
              <IntroduceDateTimeChangeBlock className="startapply">
                <Moment fromNow>{applyStart}</Moment> &nbsp;접수 시작
              </IntroduceDateTimeChangeBlock>
            </li>
            <li>
              <IntroduceDateTimeChangeBlock className="starttest">
                <Moment fromNow>{testStart}</Moment> &nbsp;대회 시작
              </IntroduceDateTimeChangeBlock>
            </li>
          </DateTimeUlBlock>
        ) : (
          <DateTimeChangeBlock className="startapply">
            <Moment fromNow>{applyStart}</Moment> &nbsp;접수 시작
          </DateTimeChangeBlock>
        )}
      </>
    );
  } else if (now - applyStart >= 0 && now - applyEnd < 0) {
    return (
      <>
        {toggle ? (
          <DateTimeUlBlock>
            <li>
              <IntroduceDateTimeChangeBlock className="blink receive">
                접수중
              </IntroduceDateTimeChangeBlock>
            </li>
            <li>
              <IntroduceDateTimeChangeBlock className="starttest">
                <Moment fromNow>{testStart}</Moment> &nbsp;대회 시작
              </IntroduceDateTimeChangeBlock>
            </li>
          </DateTimeUlBlock>
        ) : (
          <DateTimeChangeBlock className="blink receive">접수중</DateTimeChangeBlock>
        )}
      </>
    );
  } else if (now - applyEnd >= 0 && now - testStart < 0) {
    return (
      <>
        {toggle ? (
          <DateTimeUlBlock>
            <li>
              <IntroduceDateTimeChangeBlock className="applyline">
                접수 마감
              </IntroduceDateTimeChangeBlock>
            </li>
            <li>
              <IntroduceDateTimeChangeBlock className="starttest">
                <Moment fromNow>{testStart}</Moment> &nbsp;대회 시작
              </IntroduceDateTimeChangeBlock>
            </li>
          </DateTimeUlBlock>
        ) : (
          <DateTimeChangeBlock className="applyline">접수 마감</DateTimeChangeBlock>
        )}
      </>
    );
  } else if (now - testStart >= 0 && now - testEnd < 0) {
    return (
      <>
        {toggle ? (
          <DateTimeUlBlock>
            <li>
              <IntroduceDateTimeChangeBlock className="applyline">
                접수 마감
              </IntroduceDateTimeChangeBlock>
            </li>
            <li>
              <IntroduceDateTimeChangeBlock className="blink testreceive">
                대회 진행 중
              </IntroduceDateTimeChangeBlock>
            </li>
          </DateTimeUlBlock>
        ) : (
          <DateTimeChangeBlock className="blink testreceive">대회 진행 중</DateTimeChangeBlock>
        )}
      </>
    );
  } else {
    return (
      <>
        {toggle ? (
          <IntroduceDateTimeChangeBlock className="deadline">
            대회 종료
          </IntroduceDateTimeChangeBlock>
        ) : (
          <DateTimeChangeBlock className="deadline">대회 종료</DateTimeChangeBlock>
        )}
      </>
    );
  }
};

export default DateTimeChange;
