import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import palette from 'src/lib/styles/palette';
import { Link } from 'react-router-dom';
import Responsive from '../common/Responsive';
import DateInfo from '../common/DateInfo';
import Langs from '../common/Langs';
import 'moment/locale/ko';
import DateTimeChange from '../common/DateTimeChange';

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

const ApplyItem = ({ apply, seconds }) => {
  const {
    _id,
    langs,
    title,
    content
  } = apply;

  return (
    <ApplyItemBlock>
      <ApplyTitleBlock>
        <Link to={`/introduce/${_id}`} className="title">
          {title}
        </Link>
        <DateTimeChange seconds={seconds} apply={apply} toggle={false}/>
      </ApplyTitleBlock>
      <DateInfo apply={apply}/>
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
