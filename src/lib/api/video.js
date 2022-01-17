import axios from 'axios';

const getLatestVideo = async () => {
  try {
    const {
      data: { response },
    } = await axios.get('https://www.scorebat.com/video-api/v3/');
    const filterRes = response.filter((res) =>
      res.competition.includes('ENGLAND:')
    );
    console.log(filterRes);
    return filterRes;
  } catch (err) {
    console.log('[FAIL] getLatestVideo', err);
  }
};

export default getLatestVideo;
