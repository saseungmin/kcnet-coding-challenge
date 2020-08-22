import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import palette from 'src/lib/styles/palette';
import Langs from '../common/Langs';
import Moment from 'react-moment';
import 'moment/locale/ko';
import { Helmet } from 'react-helmet-async';
import DateTimeChange from '../common/DateTimeChange';

const IntroduceViewerBlock = styled(Responsive)`
  margin-top: 5rem;
`;

const IntroduceHead = styled.div`
  border-bottom: 1px solid ${palette.gray[2]};
  padding-bottom: 2rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  h1 {
    font-size: 2.5rem;
    line-height: 1.5;
    margin: 0;
  }
  .applybutton {
    display: inline-flex;
    position: relative;
    align-items: center;
    margin: 10px 0 10px 30px;
    padding: 0.25rem 5rem;
    font-size: 1.1rem;
    line-height: 0;
    border-radius: 0.4rem;
  }
`;

const IntroduceDateBlock = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-radius: 0.75rem;
  background-color: ${palette.gray[1]};
  margin-bottom: 1rem;
`;

const IntroduceCountDate = styled.div`
  padding-left: 50px;
  padding-right: 50px;
  border-right: 0.0625rem solid #d7e2eb;
`;
const IntroduceSchedule = styled.div`
  padding-left: 50px;
  padding-right: 50px;
  border-right: 0.0625rem solid #d7e2eb;
`;

const IntroduceContent = styled.div`
  position: relative;
  margin-top: 1rem;
  border: 0.0625rem solid #d7e2eb;
  border-radius: 0.75rem;
  overflow: hidden;
  padding: 1.5rem;
`;

const IntroduceContentTitle = styled.div`
  padding: 7px 1rem 7px 1rem;
  border-radius: 0.75rem;
  background-color: #eeebff;
  margin-bottom: 1rem;
  width: 17%;
  text-align: center;
  color: #0053f4;
  font-weight: 700;
  margin-bottom: 0;
  margin-top: 1rem;
  font-size: 1.2rem;
`;

const IntroduceViewer = ({ apply, error, loading, actionButtons, user, seconds,recieveButton }) => {

  if (error) {
    if (error.response && error.response.status === 404) {
      return <IntroduceViewerBlock>존재하지 않는 포스트입니다.</IntroduceViewerBlock>;
    }
    return <IntroduceViewerBlock>오류 발생..</IntroduceViewerBlock>;
  }

  if (loading || !apply) {
    return null;
  }

  const { langs, title, content, applyendday, applystartday, teststartday, testendday } = apply;

  const applyEnd = new Date(applyendday),
    applyStart = new Date(applystartday),
    testStart = new Date(teststartday),
    testEnd = new Date(testendday);

  return (
    <IntroduceViewerBlock>
      <Helmet>
        <title>{title}-KCNET</title>
      </Helmet>
      <IntroduceHead>
        <h1>{title}</h1>
      {recieveButton}
      </IntroduceHead>
      {user && user.userstatus === 'manager' ? actionButtons : null}
      <IntroduceDateBlock>
        <IntroduceCountDate>
          <DateTimeChange seconds={seconds} apply={apply} toggle={true} />
        </IntroduceCountDate>
        <IntroduceSchedule>
          <div>
            접수 :{' '}
            <Moment interval={0} format="YYYY년 MM월 DD일 HH:mm">
              {applyStart}
            </Moment>{' '}
            -{' '}
            <Moment interval={0} format="MM월 DD일 HH:mm">
              {applyEnd}
            </Moment>
          </div>
          <div>
            대회 :{' '}
            <Moment interval={0} format="YYYY년 MM월 DD일 HH:mm">
              {testStart}
            </Moment>{' '}
            -{' '}
            <Moment interval={0} format="MM월 DD일 HH:mm">
              {testEnd}
            </Moment>
          </div>
        </IntroduceSchedule>
      </IntroduceDateBlock>
      <Langs langs={langs} />
      <IntroduceContentTitle>소개</IntroduceContentTitle>
      <IntroduceContent dangerouslySetInnerHTML={{ __html: content }} />
    </IntroduceViewerBlock>
  );
};

export default IntroduceViewer;
