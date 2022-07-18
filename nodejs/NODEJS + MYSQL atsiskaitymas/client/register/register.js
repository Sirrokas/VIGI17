const createUser = async (data) => {
    try {
        const response = await fetch('http://localhost:8080/api/register', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const user = await response.json();
        return user;
    } catch (err) {
        console.log(err);
    }
};

document.querySelector('form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const input = {
        fullName: event.target.elements.fullName.value,
        email: event.target.elements.email.value,
        password: event.target.elements.password.value,
        rePassword: event.target.elements.rePassword.value,
    };
    const data = await createUser(input);
    if (data.password == '') alert('Please enter Password');
    else if (data.rePassword == '') alert('Please enter confirm password');
    else if (data.password != data.rePassword) {
        alert('\nPassword did not match: Please try again');
        return false;
    } else {
        alert('Password Match: Please log in to BillSplitter!');
        location.replace('../login/login.html');
        return true;
    }
});
