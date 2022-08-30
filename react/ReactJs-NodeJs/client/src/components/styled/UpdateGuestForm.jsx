import styled from 'styled-components';

export const UpdateGuestContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 1rem 0rem 1rem 0rem;
    margin-top: 2rem;
`;

export const UpdateFormName = styled.h2`
    display: flex;
    justify-content: center;
    color: #555555;
    padding-bottom: 1rem;
`;

export const UpdateGuestsInputs = styled.input`
    border: 1px solid #b9b9b9;
    border-radius: 0.25rem;
    font-size: 0.9rem;
    margin: 0.25rem;
    padding: 0.5rem;
`;

export const StyledAdminPanelButton = styled.button`
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
    a:link {
        color: white;
        text-decoration: none;
    }
    a:visited {
        color: white;
    }
    a:active {
        color: white;
    }
`;

export const UpdateButton = styled.button`
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
    a:link {
        color: white;
        text-decoration: none;
    }
    a:visited {
        color: white;
    }
    a:active {
        color: white;
    }
`;
