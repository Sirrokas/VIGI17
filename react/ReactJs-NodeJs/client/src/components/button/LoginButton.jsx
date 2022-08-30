import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    padding: 0.5rem 1rem;
    background-color: #0996e2;
    &:hover {
        background-color: #5c5c5cb8;
    }
    border: none;
    border-radius: 0.25rem;
    color: white;
    font-size: 1rem;
    cursor: pointer;
`;

const LoginButton = ({ title = 'Login', onClick }) => {
    return <StyledButton onClick={onClick}>{title}</StyledButton>;
};

export default LoginButton;
