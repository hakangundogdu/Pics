import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID QIomTFuJU1bcndjzEycrJ_p1HRcs5dPKsMldu8C_jg8',
  },
});
