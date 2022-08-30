import React, { useEffect, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../App';
import LogoutButton from '../../components/button/LogoutButton';
import {
    RegisterButton,
    DeleteButton,
} from '../../components/button/ActionButtons';
import {
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
} from '../../components/styled/AdminForms';
import { Header, Footer } from '../../components/styled/HeaderAndFooter';

const Home = () => {
    const { isLoggedIn, setUser } = useContext(AuthContext);
    const [guests, setGuests] = useState([]);
    const [events, setEvents] = useState([]);
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        events_id: '',
        name: '',
        email: '',
        age: '',
    });

    const onFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(
                `${process.env.REACT_APP_SERVER_URI}guests`,
                {
                    method: 'POST',
                    body: JSON.stringify(userData),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            const data = await response.json();
            if (data.err) return alert('Guest is not created!');
            navigate('/');
            alert('New Guest created!');
            window.location.reload();
        } catch (err) {
            alert(err);
        }
    };

    useEffect(() => {
        const fetchGuests = async () => {
            try {
                const response = await fetch(
                    `${process.env.REACT_APP_SERVER_URI}guests`
                );
                const data = await response.json();
                setGuests(data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchGuests();
    }, []);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await fetch(
                    `${process.env.REACT_APP_SERVER_URI}events`
                );
                const data = await response.json();
                setEvents(data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchEvents();
    }, []);

    const onDelete = async (id) => {
        try {
            const response = await fetch(
                `${process.env.REACT_APP_SERVER_URI}guests/${id}`,
                {
                    method: 'DELETE',
                }
            );
            const data = await response.json();
            if (data.affectedRows > 0) {
                setGuests((prev) => prev.filter((guests) => guests.id !== id));
            }
        } catch (err) {
            console.log(err);
        }
    };

    const onUserLogout = () => {
        localStorage.clear();
        setUser(null);
        navigate('/login');
        alert('You have successfully disconnected!');
    };

    return (
        <div>
            <Header>
                <div>
                    {isLoggedIn && <LogoutButton onClick={onUserLogout} />}
                </div>
            </Header>
            <EventsContainer>
                <div>
                    <TableName>List of Events</TableName>
                    <StyledTable>
                        <thead>
                            <StyledTr>
                                <StyledTh>Id of Event</StyledTh>
                                <StyledTh>Name</StyledTh>
                            </StyledTr>
                        </thead>
                        <tbody>
                            {events.map(({ id, name }) => {
                                return (
                                    <StyledTr>
                                        <StyledTd>{id}</StyledTd>
                                        <StyledTd>{name}</StyledTd>
                                    </StyledTr>
                                );
                            })}
                        </tbody>
                    </StyledTable>
                </div>
            </EventsContainer>
            <StyledHr />
            <div>
                <CreateGuestContainer>
                    <div>
                        <TableName>Create Guests</TableName>
                        <form onSubmit={onFormSubmit}>
                            <GuestsInputs
                                placeholder='Id of event'
                                type='events_id'
                                name='events_id'
                                id='events_id'
                                value={userData.events_id}
                                onChange={(event) =>
                                    setUserData((prev) => ({
                                        ...prev,
                                        events_id: event.target.value,
                                    }))
                                }
                                required
                            />
                            <GuestsInputs
                                placeholder='Name'
                                type='name'
                                name='name'
                                id='name'
                                value={userData.name}
                                onChange={(event) =>
                                    setUserData((prev) => ({
                                        ...prev,
                                        name: event.target.value,
                                    }))
                                }
                                required
                            />
                            <GuestsInputs
                                placeholder='Email'
                                type='email'
                                name='email'
                                id='email'
                                value={userData.email}
                                onChange={(event) =>
                                    setUserData((prev) => ({
                                        ...prev,
                                        email: event.target.value,
                                    }))
                                }
                                required
                            />
                            <GuestsInputs
                                placeholder='Age'
                                type='age'
                                name='age'
                                id='age'
                                value={userData.age}
                                onChange={(event) =>
                                    setUserData((prev) => ({
                                        ...prev,
                                        age: event.target.value,
                                    }))
                                }
                                required
                            />
                            <RegisterButton></RegisterButton>
                        </form>
                    </div>
                </CreateGuestContainer>
                <StyledHr />
            </div>
            <GuestsContainer>
                <div>
                    <TableName>List of Guests</TableName>
                    <StyledTable>
                        <thead>
                            <tr>
                                <StyledTh>Id</StyledTh>
                                <StyledTh>Id of Event</StyledTh>
                                <StyledTh>Name</StyledTh>
                                <StyledTh>Email</StyledTh>
                                <StyledTh>Age</StyledTh>
                                <StyledTh>Actions</StyledTh>
                            </tr>
                        </thead>
                        <tbody>
                            {guests.map(
                                ({ id, events_id, name, email, age }) => {
                                    return (
                                        <tr key={id}>
                                            <StyledTd>{id}</StyledTd>
                                            <StyledTd>{events_id}</StyledTd>
                                            <StyledTd>{name}</StyledTd>
                                            <StyledTd>{email}</StyledTd>
                                            <StyledTd>{age}</StyledTd>
                                            {isLoggedIn && (
                                                <StyledTd>
                                                    <DeleteButton
                                                        onClick={() =>
                                                            onDelete(id)
                                                        }
                                                    />
                                                    <UpdateButton>
                                                        <Link
                                                            to={`/update/${id}`}
                                                        >
                                                            Update
                                                        </Link>
                                                    </UpdateButton>
                                                </StyledTd>
                                            )}
                                        </tr>
                                    );
                                }
                            )}
                        </tbody>
                    </StyledTable>
                </div>
            </GuestsContainer>
            <Footer>Created by Rokas Sirvelis</Footer>
        </div>
    );
};

export default Home;
