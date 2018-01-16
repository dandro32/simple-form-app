import axios from 'axios';

export const submitData = (values) => {
    axios.post('http://localhost:3005/submit', values)
        .then(res => {
            alert(res.data.message);
        }).catch(err => {
            alert(err);
    });
};

export const getData = () => {
    return axios.get('http://localhost:3005/submit')
        .then(res => res.data)
};
