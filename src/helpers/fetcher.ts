import axios from 'axios';

axios.defaults.baseURL = 'https://api.spotify.com/v1/';

const fetcher = <T>(url: string): Promise<T> =>
  axios
    .get(url, {
      headers: {
        // Authorization: `Bearer ${token}`,
        Authorization: `Bearer BQAKUQYTQ8SBoh8iteurbUpSGHvag_2_ZvouDrZr7aiQEiVf6AUlgkUJBaEUSs2Vr-pcVFFkApWDmMejmMGJeOXX_RyYAMEktfzUiJS48bZp10cJvpgwEC7pjVdlJrsB4volCDuIAUBQ8nguCFZ2Lqw-COAeeC2RhvUwudSPyV8tSrqfoG4q5Vks0Wqeebv1UN5tAM1e4pOlz8WxIq3Fkkhf1SsT9VUScvOCBwTxXes9NaAyCWoCpNDgZIJl9hpyxhc9auTNNfU6e_xUoA-cnw`,
      },
    })
    .then((res) => res.data);

export default fetcher;
