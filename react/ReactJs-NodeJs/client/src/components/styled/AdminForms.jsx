import styled from 'styled-components';

const EventsContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 0.5rem;
    margin-top: 2rem;
`;

const CreateGuestContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 1rem 0rem 1rem 0rem;
    margin-top: 2rem;
`;

const GuestsContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 0.5rem;
    margin-top: 2rem;
    margin-bottom: 12rem;
`;

const TableName = styled.h2`
    display: flex;
    justify-content: center;
    color: #555555;
    padding-bottom: 1rem;
`;

const GuestsInputs = styled.input`
    border: 1px solid #b9b9b9;
    border-radius: 0.25rem;
    font-size: 0.9rem;
    margin: 0.25rem;
    padding: 0.5rem;
`;

const StyledTable = styled.table`
    border: 1px solid #d4d4d4;
    text-align: left;
    position: relative;
    border-collapse: collapse;
`;

const StyledTh = styled.th`
    border: 1px solid #d4d4d4;
    padding: 10px;
    background: #0996e2;
    color: white;
    text-align: center;
`;

const StyledTr = styled.tr`
    border: 1px solid #d4d4d4;
    padding: 10px;
`;

const StyledTd = styled.td`
    border: 1px solid #d4d4d4;
    padding: 10px;
`;

const StyledHr = styled.hr`
    border: 1px solid #d4d4d4;
    margin: 2rem;
`;

const UpdateButton = styled.button`
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

export {
    EventsContainer,
    CreateGuestContainer,
    GuestsContainer,
    TableName,
    GuestsInputs,
    StyledTable,
    StyledTh,
    StyledTr,
    StyledTd,
    StyledHr,
    UpdateButton,
};
