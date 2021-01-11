import axios from 'axios';

const instance =axios.create({
    baseURL:'https://react-burger-builder-e117a-default-rtdb.firebaseio.com/'
});

export default instance;