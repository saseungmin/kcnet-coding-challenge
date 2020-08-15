import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import palette from 'src/lib/styles/palette';
import { Link } from 'react-router-dom';
import Responsive from '../common/Responsive';
import DateInfo from '../common/DateInfo';
import Langs from '../common/Langs';


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

const ApplyItem = () => {
    return (
      <ApplyItemBlock>
        <h2>
          <Link to={`/introduce`}>
            2020 Dev-Matching: 웹 프론트엔드 개발자(하반기)
          </Link>
        </h2>
        <DateInfo />
        <Langs langs={['python','C#','JAVA','JavaScript']}/>
        <p>QWEQEQWEQWEQWEQWEE
            qwe
            qwe
            qwe
            qwe
            wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
            wwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
        </p>
        <ApplyButtonWrapper>
          <Button to='/introduce' teal>자세히 보기</Button>
        </ApplyButtonWrapper>
      </ApplyItemBlock>
    );
  };

export default ApplyItem;