import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import Button from '../common/Button';
import palette from 'src/lib/styles/palette';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ApplyListBlock = styled(Responsive)`
  margin-top: 3rem;
`;

const ApplyButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3rem;
`;

const ApplyItemBlock = styled.div`
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

const LangsBlock = styled.div`
  margin-top: 1rem;
  .lang {
    margin-bottom: 0.875rem;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-bottom: 0.25rem;
    height: 2rem;
    display: inline-flex;
    color: ${palette.Teal[7]};
    text-decoration: none;
    font-weight: 500;
    font-size: 1rem;
    background: rgb(241, 243, 245);
    border-radius: 1rem;
    text-decoration: none;
    align-items: center;
    margin-right:0.5rem;
    &:hover {
      color: ${palette.Teal[5]};
    }
  }
  .langTitle {
    margin-bottom: 1rem;
    letter-spacing: 2px;
    font-size: 20px;
    font-family: 'Cute Font', cursive;
    font-weight: 800;
  }
`;

const ApplyItem = () => {
  return (
    <ApplyItemBlock>
      <h2>
        <Link to={`/introduce`}>
          2020 Dev-Matching: 웹 프론트엔드 개발자(하반기)
        </Link>
      </h2>
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
      <LangsBlock>
        <div className="langTitle">사용가능 언어</div>
        <div className="lang">JAVA</div>
        <div className="lang">JavaScript</div>
        <div className="lang">python</div>
      </LangsBlock>
      <p>QWEQEQWEQWEQWEQWEE
          qwe
          qwe
          qwe
          qwe
          wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
          wwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
      </p>
      <ApplyButtonWrapper>
        <Button teal>접수 하기</Button>
      </ApplyButtonWrapper>
    </ApplyItemBlock>
  );
};

const ApplyList = () => {
  const { user } = useSelector(({ user }) => ({ user: user.user }));
  return (
    <ApplyListBlock>
      <ApplyButtonWrapper>
        {user && user.userstatus === 'manager' ? (
          <Button to="/write">코딩 챌린지 등록</Button>
        ): (null)        
        }
      </ApplyButtonWrapper>
      <ApplyItem />
      <ApplyItem />
      <ApplyItem />
    </ApplyListBlock>
  );
};

export default ApplyList;
