import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import palette from 'src/lib/styles/palette';
import { Link } from 'react-router-dom';
import Responsive from '../common/Responsive';
import DateInfo from '../common/DateInfo';
import Langs from '../common/Langs';
import 'moment/locale/ko';
import Moment from 'react-moment';

const ApplyButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3rem;
`;

const ApplyItemBlock = styled(Responsive)`
  padding-top: 2rem;
  &:first-child {
    padding-top: 0;
  }
  & + & {
    border-top: 1px solid ${palette.Teal[5]};
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 0;
    margin-top: 0;
    &:hover {
      color: ${palette.gray[6]};
    }
  }

  p {
    margin-top: 0.5rem;
  }
`;

const ApplyTitleBlock = styled.div`
  display: flex;
  justify-content: start;
  span {
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
  }
  .title {
    font-size: 2rem;
    margin-bottom: 0;
    margin-top: 0;
    font-weight: 600;
    &:hover {
      color: ${palette.gray[6]};
    }
  }
`;

const ApplyItem = ({ apply }) => {
  const {
    _id,
    langs,
    title,
    content,
    applystartday,
    applyendday,
    teststartday,
    testendday,
  } = apply;
  const applyEnd = new Date(applyendday),
    applyStart = new Date(applystartday),
    testStart = new Date(teststartday),
    testEnd = new Date(testendday),
    now = new Date();

  const dateCalculation = () => {
    if (applyStart - now > 0) {
      return (
        <span className="startapply">
          <Moment fromNow>{applyStart}</Moment> &nbsp;접수 시작
        </span>
      );
    } else if (now - applyStart > 0 && now - applyEnd < 0) {
      return <span className="blink receive">접수중</span>;
    } else if (now - applyEnd > 0 && now - testStart < 0) {
      return <span className="deadline">접수 마감</span>;
    } else if (now - testStart > 0 && now - testEnd < 0) {
      return <span className="blink starttest">대회 진행 중</span>;
    } else {
      return <span className="deadline">대회 종료</span>;
    }
  };

  return (
    <ApplyItemBlock>
      <ApplyTitleBlock>
        <Link to={`/introduce/${_id}`} className="title">
          {title}
        </Link>
        {dateCalculation()}
      </ApplyTitleBlock>
      <DateInfo apply={apply} />
      <Langs langs={langs} />
      <p>{content}</p>
      <ApplyButtonWrapper>
        <Button to={`/introduce/${_id}`} teal>
          자세히 보기
        </Button>
      </ApplyButtonWrapper>
    </ApplyItemBlock>
  );
};

export default ApplyItem;
