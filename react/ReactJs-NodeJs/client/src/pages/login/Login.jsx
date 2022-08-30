import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../App';
import LoginButton from '../../components/button/LoginButton';
import Input from '../../components/input/Input';
import Logo from '../../components/navigation/Logo';
import {
    LogoContainer,
    FormContainer,
    LoginInputText,
    StyledForm,
} from '../../components/styled/LoginForm';

const Login = () => {
    const navigate = useNavigate();
    const { setUser } = useContext(AuthContext);
    const [userData, setUserData] = useState({
        email: '',
        password: '',
    });
    const onFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(
                `${process.env.REACT_APP_SERVER_URI}login`,
                {
                    method: 'POST',
                    body: JSON.stringify(userData),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            const data = await response.json();
            if (data.err) return alert(data.err);
            setUser(data.user);
            localStorage.setItem('user', JSON.stringify(data.user));
            navigate('/');
            alert('You have successfully connected!');
        } catch (err) {
            alert(err);
        }
    };

    return (
        <div>
            <LogoContainer>
                <Logo />
            </LogoContainer>
            <FormContainer onSubmit={onFormSubmit}>
                <StyledForm>
                    <LoginInputText>
                        Login to see guests of events
                    </LoginInputText>
                    <Input
                        placeholder='Email'
                        type='email'
                        name='email'
                        id='email'
                        onChange={(event) =>
                            setUserData((prev) => ({
                                ...prev,
                                email: event.target.value,
                            }))
                        }
                        value={userData.email}
                        required
                    />
                    <Input
                        placeholder='Password'
                        type='password'
                        name='password'
                        id='password'
                        value={userData.password}
                        onChange={(event) =>
                            setUserData((prev) => ({
                                ...prev,
                                password: event.target.value,
                            }))
                        }
                        required
                    />
                    <LoginButton />
                </StyledForm>
            </FormContainer>
        </div>
    );
};

export default Login;
