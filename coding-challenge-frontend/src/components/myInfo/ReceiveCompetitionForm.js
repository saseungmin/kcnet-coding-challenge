import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from 'src/lib/styles/palette';
import Moment from 'react-moment';
import LangTemplate from './LangTemplate';

const ReceiveCompetitionFormBlock = styled.div`
  margin-bottom: 1.2rem;
  &.empty{
      margin-left: 1rem;
  }
`;

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

const ReceiveCompetitionForm = ({ myInfoList, loading }) => {
  if (!(!!myInfoList && !!myInfoList.length) && !loading) {
    return <ReceiveCompetitionFormBlock className="empty">접수한 대회가 없습니다.</ReceiveCompetitionFormBlock>;
  }
  return (
    <ReceiveCompetitionFormBlock>
      {!loading && myInfoList && (
        <>
          {myInfoList.map((receive) => (
            <ReceiveCompetitionItemBlock key={receive._id}>
              <ReceiveCompetitionHeaderBlock>
                <Link to={`/introduce/${receive.applyId._id}`} className="title">
                  {receive.applyId.title}
                </Link>
                <DateTimeChangeBlock className="deadline">5일 후 접수 마감</DateTimeChangeBlock>
              </ReceiveCompetitionHeaderBlock>
              <DateInfoBlock>
                <span>
                  <b>대회</b>
                </span>
                <span>
                  {/*  TODO: moment 처리 */}
                  <Moment interval={0} format="YYYY년 MM월 DD일 HH:mm">
                    {receive.applyId.teststartday}
                  </Moment>
                  -
                  <Moment interval={0} format="MM월 DD일 HH:mm">
                    {receive.applyId.testendday}
                  </Moment>
                </span>
              </DateInfoBlock>
              <LangTemplate langs={receive.applyId.langs} />
            </ReceiveCompetitionItemBlock>
          ))}
        </>
      )}
    </ReceiveCompetitionFormBlock>
  );
};

export default ReceiveCompetitionForm;
