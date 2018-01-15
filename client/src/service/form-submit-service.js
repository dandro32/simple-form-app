import axios from 'axios';

export default (async function submitData(values) {
    console.log(values)
    axios.post('http://localhost:3005/submit', values)
        .then(res => {
            console.log(res)
        }).catch(err => {
        console.error(err);
    });
});
