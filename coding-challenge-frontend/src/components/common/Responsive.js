import React from 'react';
import styled from 'styled-components';

const ResponsiveBlock = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  width: 1024px;
  margin: 0 auto; /*중앙 정렬 */

  @media (max-width: 1024px) {
    width: 768px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Responsive = ({ children, ...rest }) => (
  // style, className, onClick, onMouseMove 등의 props를 사용할 수 있도록 ...rest를 사용하여 ResponsivBlock에게 전달
  <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>
);

export default Responsive;
