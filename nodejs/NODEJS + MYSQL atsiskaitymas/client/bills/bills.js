const fetchBills = async () => {
    try {
        const response = await fetch('http://localhost:8080/api/bills', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
    }
};

const displayBills = (data) => {
    const form = document.getElementById('billBox');
    const divEl = document.createElement('div');
    data.forEach((item) => {
        const labelEl = document.createElement('label');
        const billBoxEl = document.createElement('h2');
        labelEl.setAttribute('ID', item.id);
        labelEl.textContent = item.id;
        billBoxEl.setAttribute('Description', item.description);
        billBoxEl.setAttribute('Amount', item.amount);
        divEl.append(billBoxEl, labelEl);
        form.append(divEl);
    });
};
document.addEventListener('DOMContentLoaded', async () => {
    const bills = await fetchBills();
    displayBills(bills);
    document.querySelector('form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const data = {
            amount: e.target.querySelector('input[name=amount]').value,
            description: e.target.querySelector('input[name=description]')
                .value,
        };
        try {
            const response = await fetch('http://localhost:8080/api/bills', {
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
