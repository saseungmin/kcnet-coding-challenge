import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import palette from 'src/lib/styles/palette';

const MyPrivacyFormBlock = styled(Responsive)`
  margin-top: 4rem;
`;

const MyPrivacyHeadBlock = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
  color: ${palette.gray[7]};
  border-bottom: 1px solid ${palette.gray[3]};
  padding-bottom: 1rem;
  margin-bottom: 2rem;
  padding-left: 1rem;
`;

const MyPrivacyForm = () => {
    return (
        <MyPrivacyFormBlock>
            <MyPrivacyHeadBlock>내 정보</MyPrivacyHeadBlock>
        </MyPrivacyFormBlock>
    );
};

export default MyPrivacyForm;