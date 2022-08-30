import React from 'react';
import styled from 'styled-components';

const StyledAdminButton = styled.button`
    background-color: #0996e2;
    &:hover {
        background-color: #5c5c5cb8;
    }
    border: none;
    border-radius: 0.25rem;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    margin: 0.5rem 0.5rem;
    padding: 0.5rem 0.5rem;
`;

const LogoutButton = ({ title = 'Logout', onClick }) => {
    return <StyledAdminButton onClick={onClick}>{title}</StyledAdminButton>;
};

export default LogoutButton;
