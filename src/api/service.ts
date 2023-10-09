import axios from 'axios';
import { ArticleType } from '../types';

const API_URL = 'http://localhost:5555';

axios.defaults.baseURL = API_URL;

export const Service = {
  async fetchArticlesByPage(page: number) {
    const { data } = await axios.get<ArticleType[]>(`/articles/${page}`);

    return data;
  },

  async getRandomArticle() {
    const { data } = await axios.get<ArticleType>('/random');

    return data;
  },

  async getLatestNews() {
    const { data } = await axios.get<ArticleType[]>('/latestnews');

    return data;
  },

  async getCount() {
    const { data } = await axios.get('/count');

    return data;
  },
};
