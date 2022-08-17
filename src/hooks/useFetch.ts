import axios from 'axios';
import { useQuery } from 'react-query';

export function useFetch(queryKey: string, url: string, headers?: {}) {
  const query = useQuery([queryKey], async () => {
    return headers ? await axios(url) : await axios(url, { headers: headers });
  });

  return query;
}