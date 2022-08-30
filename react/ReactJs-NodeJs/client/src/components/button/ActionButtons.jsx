import React from 'react';
import styled from 'styled-components';

const StyledActionButton = styled.button`
    background-color: #0996e2;
    &:hover {
        background-color: #5c5c5cb8;
    }
    border: none;
    border-radius: 0.25rem;
    color: white;
    font-size: 0.9rem;
    cursor: pointer;
    margin: 0.25rem;
    padding: 0.5rem 0.5rem;
`;

const RegisterButton = ({ onClick, title = 'Register' }) => {
    return <StyledActionButton onClick={onClick}>{title}</StyledActionButton>;
};

const DeleteButton = ({ onClick, title = 'Delete' }) => {
    return <StyledActionButton onClick={onClick}>{title}</StyledActionButton>;
};

export { RegisterButton, DeleteButton };
