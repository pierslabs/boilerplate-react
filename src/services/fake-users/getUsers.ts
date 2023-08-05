import { boilerApi } from '../../config/axios.config';

export const getUsers = async () => {
  const { data, status } = await boilerApi.get('/users');
  return { data, status };
};
