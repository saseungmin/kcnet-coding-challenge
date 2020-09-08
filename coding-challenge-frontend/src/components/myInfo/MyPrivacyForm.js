import React from 'react';
import styled from 'styled-components';
import palette from 'src/lib/styles/palette';
import Button from '../common/Button';

const MyPrivacyFormBlock = styled.div`
  margin-bottom: 5rem;
  padding: 2rem;
  border: 0.0625rem solid #d7e2eb;
  border-radius: 0.4rem;
  height: auto;
`;
const MyPrivacyTitleBlock = styled.label`
  display:inline-block;
  width: 10%;
  margin: 1rem 1rem 1rem 1rem;
  font-family: 'Jua', sans-serif;
  font-size: 1.1rem;
  &.required{
    line-height: 1.25rem;
    ::before{
      content: '*';
      display: inline-block;
      vertical-align: top;
      font-weight: 400;
      color: #fa5252;
      margin: 0 0.125rem 0 0;
      font-size: 1.25rem;
      line-height: 1.25rem;
    }
  }
`;

const MyPrivacyItemBlock = styled.div`
  margin-bottom: 2rem;
  &:last-child{
    margin-bottom: 0;
  }
`;

const LabelWarningSmallBlock = styled.small`
  color: #98A8B9;
  margin-left: 1rem;
  margin-top: 0.25rem;
`;

const MyPrivacyInputBlock = styled.input`
    transition-duration: 0.08s;
    transition-property: all;
    transition-timing-function: ease-in-out;
    transition-delay: initial;
    padding: 8px 12px;
    border: 1px solid #D7E2EB;
    border-radius: 1.25rem;
    font-size: 16px;
    line-height: 22px;
    color: #263747;
    background-color: #FBFBFD;
    outline: 0;
    display:inline-block;
    width: 20%;
    &:disabled{
      background-color: #E9ECF3;
      box-shadow: none;
      border-color: #CDD7E0;
      color: #5F7F90;
      cursor: not-allowed;
      opacity: 1;
      :hover{
        border: 1px solid #D7E2EB;
      }
    }
    :hover{
      border: 2px solid ${palette.Teal[4]};
    }
    &.apikey{
      width: 40%;
    }
`;

const ButtonBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;
const MyPrivacyForm = ({user, onChange}) => {
    const {userid, username, apikey} = user;
    return (
        <MyPrivacyFormBlock>
          <form>
            <MyPrivacyItemBlock>
              <MyPrivacyTitleBlock className="required" htmlFor="userid">아이디</MyPrivacyTitleBlock>
              <MyPrivacyInputBlock value={userid || ''} name="userid" disabled />
              <LabelWarningSmallBlock>아이디는 수정할 수 없습니다.</LabelWarningSmallBlock>
            </MyPrivacyItemBlock>
            <MyPrivacyItemBlock>
              <MyPrivacyTitleBlock className="required" htmlFor="username">이름</MyPrivacyTitleBlock>
              <MyPrivacyInputBlock value={username || ''} name="username" onChange={onChange}/>
            </MyPrivacyItemBlock>
            <MyPrivacyItemBlock>
              <MyPrivacyTitleBlock className="required" htmlFor="apikey">apikey</MyPrivacyTitleBlock>
              <MyPrivacyInputBlock value={apikey || ''} name="apikey" className="apikey" onChange={onChange}/>
            </MyPrivacyItemBlock>
            <ButtonBlock>
            <Button teal style={{ marginLeft: '1rem' }}>변경 사항 저장</Button>
            <Button orange style={{ marginRight: '1rem' }}>비밀 번호 변경</Button>
            </ButtonBlock>
          </form>
        </MyPrivacyFormBlock>
    );
};

export default MyPrivacyForm;