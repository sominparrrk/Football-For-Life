import axios from 'axios';

const getLatestNews = async () => {
  try {
    const {
      data: { articles },
    } = await axios.get(
      'https://newsapi.org/v2/top-headlines?country=gb&category=sports&apiKey=36cb8f0a9834410498b1a2522d2d82ac'
    );
    console.log(articles);
    return articles;
  } catch (err) {
    console.log('[FAIL] getLatestNews', err);
  }
};

export default getLatestNews;
