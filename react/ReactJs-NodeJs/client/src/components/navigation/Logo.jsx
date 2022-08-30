import React from 'react';
import styled from 'styled-components';

const StyledLogo = styled.img`
    height: 5rem;
    padding-left: 1.5rem;
`;

const AppName = styled.h2`
    color: #555555;
`;

const Logo = () => {
    return (
        <div>
            <StyledLogo src='https://sustainablecortland00.files.wordpress.com/2013/07/event-icon.png' />
            <AppName>E-Organiser</AppName>
        </div>
    );
};

export default Logo;
