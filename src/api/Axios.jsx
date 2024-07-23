import React from 'react';
import axios from 'axios';

const Axios = axios.create({
    baseURL: 'http://localhost:3500' //Node
})

export default Axios
