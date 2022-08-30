import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {
    UpdateGuestContainer,
    UpdateFormName,
    UpdateGuestsInputs,
    StyledAdminPanelButton,
    UpdateButton,
} from '../../components/styled/UpdateGuestForm';
import { Header, Footer } from '../../components/styled/HeaderAndFooter';

const UpdateGuest = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [guestData, setGuestData] = useState({
        events_id: '',
        name: '',
        email: '',
        age: '',
    });

    useEffect(() => {
        const fetchGuests = async () => {
            try {
                const response = await fetch(
                    `${process.env.REACT_APP_SERVER_URI}guests/${Number(id)}`
                );
                const data = await response.json();
                setGuestData((prev) => ({
                    ...prev,
                    events_id: data.events_id,
                    name: data.name,
                    email: data.email,
                    age: data.age,
                }));
            } catch (err) {
                console.log(err);
            }
        };
        fetchGuests();
    }, [id]);

    const onFormSubmit = async (event) => {
        event.preventDefault();
        const guest = {
            events_id: guestData.events_id,
            name: guestData.name,
            email: guestData.email,
            age: guestData.age,
        };
        if (guestData.events_id) guest.events_id = guestData.events_id;
        if (guestData.name) guest.name = guestData.name;
        if (guestData.email) guest.email = guestData.email;
        if (guestData.age) guest.age = guestData.age;
        try {
            const response = await fetch(
                `${process.env.REACT_APP_SERVER_URI}guests/${Number(id)}`,
                {
                    method: 'PATCH',
                    body: JSON.stringify(guest),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            const data = await response.json();
            if (data.err) return alert('Guest is not updated!');
            navigate('/');
            alert('Guest updated!');
        } catch (err) {
            alert(err);
        }
    };

    return (
        <div>
            <Header>
                <div>
                    <StyledAdminPanelButton>
                        <Link to='/'>Admin Panel</Link>
                    </StyledAdminPanelButton>
                </div>
            </Header>
            <div>
                <UpdateGuestContainer>
                    <div>
                        <UpdateFormName>Update Guest</UpdateFormName>
                        <form onSubmit={onFormSubmit}>
                            <UpdateGuestsInputs
                                placeholder='Id of event'
                                type='number'
                                name='event_id'
                                id='event_id'
                                onChange={(event) =>
                                    setGuestData((prev) => ({
                                        ...prev,
                                        events_id: event.target.value,
                                    }))
                                }
                                value={guestData.events_id}
                                required
                            />
                            <UpdateGuestsInputs
                                placeholder='Name'
                                type='text'
                                name='name'
                                id='name'
                                onChange={(event) =>
                                    setGuestData((prev) => ({
                                        ...prev,
                                        name: event.target.value,
                                    }))
                                }
                                value={guestData.name}
                                required
                            />
                            <UpdateGuestsInputs
                                placeholder='Email'
                                type='email'
                                name='email'
                                id='email'
                                onChange={(event) =>
                                    setGuestData((prev) => ({
                                        ...prev,
                                        email: event.target.value,
                                    }))
                                }
                                value={guestData.email}
                                required
                            />
                            <UpdateGuestsInputs
                                placeholder='Age'
                                type='text'
                                name='age'
                                id='age'
                                onChange={(event) =>
                                    setGuestData((prev) => ({
                                        ...prev,
                                        age: event.target.value,
                                    }))
                                }
                                value={guestData.age}
                                required
                            />
                            <UpdateButton type='submit'>Update</UpdateButton>
                        </form>
                    </div>
                </UpdateGuestContainer>
            </div>
            <Footer>Created by Rokas Sirvelis</Footer>
        </div>
    );
};

export default UpdateGuest;
