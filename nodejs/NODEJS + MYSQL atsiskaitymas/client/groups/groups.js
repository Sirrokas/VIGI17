const fetchGroups = async () => {
    try {
        const response = await fetch('http://localhost:8080/api/groups');
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
    }
};

document.querySelector('form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const data = {
        groupId: event.target.querySelector('input[name=groupId]').value,
    };
    try {
        const con = await client.connect();
        const groups = await con
            .db('expenses')
            .collection('grupes')
            .find()
            .toArray();
        res.json(groups);
    } catch (err) {
        res.status(500).json({ status: 'Something went wrong!' });
    }
    console.log(data);
});

const displayGroups = (data) => {
    const form = document.getElementsByClassName('groupsList');
    const divEl = document.createElement('div');
    data.forEach((item) => {
        const labelEl = document.createElement('label');
        const groupBoxEl = document.createElement('p');
        labelEl.setAttribute('ID', item.id);
        labelEl.textContent = item.id;
        groupBoxEl.setAttribute('Name', item.name);
        divEl.append(groupBoxEl, labelEl);
        form.append(divEl);
    });
};
document.addEventListener('DOMContentLoaded', async () => {
    const groups = await fetchGroups();
    displayGroups(groups);
    document.querySelector('form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const data = {
            groupId: e.target.querySelector('input[name=groupId]').value,
        };
        try {
            const response = await fetch('http://localhost:8080/api/groups', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const res = await response.json();
            if (res.details) {
                return alert('Bad data');
            }
        } catch (err) {
            alert('Data not inserted');
        }
    });
});
