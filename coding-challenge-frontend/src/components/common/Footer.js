import React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';
import palette from 'src/lib/styles/palette';
import { Link } from 'react-router-dom';

const FooterBlock = styled.div`
  width: 100%;
  background: ${palette.gray[1]}; 
  border-top: 0.2rem solid ${palette.gray[2]};
  padding-bottom: 2rem;
`;

const Wrapper = styled(Responsive)`
  height: 5rem;
  margin-top: 2rem;
  .logo {
    font-weight: 800;
    letter-spacing: 2px;
    font-size: 20px;
    font-family: 'Cute Font', cursive;
  }
`;

const CompanyInfoBlock = styled.div`
    margin-top: 1rem;
    font-size: 12px;
    line-height: 1.5;
    color: #bdbdbd;
`;

const InfoCompany = styled.div`
    align-content: flex-start;
    &.copyright{
        display: flex;
        justify-content: space-between;
    }
`;

const AHrefBlock = styled.a`
    text-decoration: underline;
    :hover{
        color:${palette.gray[7]}
    }
`;

const Footer = () => {
    return (
        <FooterBlock>
            <Wrapper>
            <Link to="/" className="logo">
                KCNET 코딩 챌린지
            </Link>
            <CompanyInfoBlock>
                <InfoCompany >
                    (주) 케이씨넷
                </InfoCompany>
                <InfoCompany>
                우)08503 서울특별시 금천구 가산디지털로1로 165 가산비즈니스센터 1001호(가산동)
                </InfoCompany>
                <InfoCompany className="copyright">
                    <div>
                        Copyright2020.©KCNET. All Right Reserved.
                    </div>
                    <div>
                    Create By. &nbsp;
                    <AHrefBlock href="https://github.com/saseungmin" >
                        seungmin Sa
                    </AHrefBlock>
                    </div>
                </InfoCompany>
            </CompanyInfoBlock>
            </Wrapper>
        </FooterBlock>
    );
};

export default Footer;