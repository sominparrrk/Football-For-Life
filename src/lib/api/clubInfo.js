import axios from 'axios';

const getClubInfo = async (name) => {
  const options = {
    method: 'GET',
    url: 'https://api-football-beta.p.rapidapi.com/teams',
    params: { league: '39', season: '2021', name },
    headers: {
      'x-rapidapi-host': 'api-football-beta.p.rapidapi.com',
      'x-rapidapi-key': '2605e9a060msh885fdd0c17d8e72p14b936jsn139f9bd84a62',
    },
  };

  try {
    const data = axios.request(options).then((response) => {
      return response.data.response;
    });
    console.log(data);
    return data;
  } catch (err) {
    console.log('[FAIL] getClubInfo', err);
  }
};

export default getClubInfo;
