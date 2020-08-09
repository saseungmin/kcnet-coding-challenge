import React from 'react';
import styled from 'styled-components';

const MainFormBlock = styled.div`


`;


const MainTemplate = ({children}) => {
    return (
        <>
        <MainFormBlock>
            {children}
        </MainFormBlock>
        </>
    );
};

export default MainTemplate;