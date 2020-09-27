/* eslint-disable no-nested-ternary */
import React from 'react';

import styled from 'styled-components';
import Moment from 'react-moment';
import 'moment/locale/ko';

const DateChangeTemplateBlock = styled.div`
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
    background: #ff6b6b;
  }
  &.starttest {
    background: #f783ac;
  }
  &.testreceive {
    background: #74c0fc;
  }
`;

const DateChangeTemplate = ({ apply, seconds }) => {
  const { teststartday, testendday } = apply;

  const testStart = new Date(teststartday);
  const testEnd = new Date(testendday);
  const nowTime = new Date(seconds);

  return (
    <>
      {nowTime - testStart < 0 ? (
        <DateChangeTemplateBlock className="starttest">
          <Moment fromNow>{testStart}</Moment>
          &nbsp;대회 시작
        </DateChangeTemplateBlock>
      ) : nowTime - testStart >= 0 && nowTime - testEnd < 0 ? (
        <DateChangeTemplateBlock className="blink testreceive">
          대회 진행 중
        </DateChangeTemplateBlock>
      ) : (
        <DateChangeTemplateBlock className="deadline">대회 종료</DateChangeTemplateBlock>
      )}
    </>
  );
};

export default DateChangeTemplate;
