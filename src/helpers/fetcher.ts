import axios from 'axios';

axios.defaults.baseURL = 'https://api.spotify.com/v1/';

const fetcher = <T>(url: string): Promise<T> =>
  axios
    .get(url, {
      headers: {
        // Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data);

export default fetcher;
