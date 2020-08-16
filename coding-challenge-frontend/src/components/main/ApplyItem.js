import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import palette from 'src/lib/styles/palette';
import { Link } from 'react-router-dom';
import Responsive from '../common/Responsive';
import DateInfo from '../common/DateInfo';
import Langs from '../common/Langs';
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
  span{
    margin-left: 30px;
    font-weight: bold;
    font-family: 'Gamja Flower', cursive;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    display: inline-flex;
    color: white;
    text-decoration: none;
    background:  ${palette.violet[3]};
    border-radius: 0.5rem;
    text-decoration: none;
    align-items: center;
    position: relative;
    margin-top: 10px;
    margin-bottom: 7px;
    
  }
  .title{
    font-size: 2rem;
    margin-bottom: 0;
    margin-top: 0;
    font-weight: 600;
    &:hover {
    color: ${palette.gray[6]};
  }
  }
`;

const ApplyItem = ({apply}) => {
    const {_id, langs, title, content, applystartday, applyendday, teststartday, testendday} = apply;
    return (
      <ApplyItemBlock>
        <ApplyTitleBlock>
          <Link to={`/introduce/${_id}`} className="title">
            {title}
          </Link>
          <span className="blink">접수중</span>
        </ApplyTitleBlock>
        <DateInfo apply={apply} />
        <Langs langs={langs}/>
        <p>
          {content}
        </p>
        <ApplyButtonWrapper>
          <Button to={`/introduce/${_id}`} teal>자세히 보기</Button>
        </ApplyButtonWrapper>
      </ApplyItemBlock>
    );
  };

export default ApplyItem;