
import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://luggage-store-8eed3-default-rtdb.firebaseio.com/'
});

export default instance;