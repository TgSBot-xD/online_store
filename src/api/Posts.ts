import axios from 'axios';

const API_URL =
  process.env.REACT_APP_API_URL ||
  'https://fakerapi.it/api/v1/products?_quantity=1&_taxes=12&_categories_type=uuid';

export const getPosts = async () => {
  try {
    const posts = await axios.get(API_URL, {
      params: { _quantity: 100 },
    });
    return posts;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response?.data;
    } else if (error instanceof Error) {
      return error.message;
    }
  }
};
