import { useQuery, UseQueryResult } from '@tanstack/react-query';
import axios from 'axios';

async function getUser() {
  try {
    const response = await axios.get('/api/user');
    console.log('response', response);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export const useUser = (): UseQueryResult<any> =>
  useQuery({ queryKey: ['user'], queryFn: getUser });
