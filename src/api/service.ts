import axios from 'axios';
import { ArticleType } from '../types';

const API_URL = 'http://localhost:5555/articles';

axios.defaults.baseURL = API_URL;

export const Service = {
  async fetchArticlesByPage(page: number) {
    const { data } = await axios.get<ArticleType[]>(`/${page}`);

    return data;
  },

  async getRandomArticle() {
    const { data } = await axios.get<ArticleType>('/');

    return data;
  },
};
