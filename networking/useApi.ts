import { AxiosError } from 'axios';
import { useState } from 'react';
import api from './api';
import { Data } from './types/NearbyAriportsResponse';

export default function useApi(endpoint: string, params = {}) {
  const [data, setData] = useState<Data>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<AxiosError | any>(null);

  const fetch = async () => {
    setLoading(true);
    try {
      const response = await api.get(endpoint, { params });
      setData(response.data);
    } catch (err: AxiosError | any) {
      setError(err);
      if (err.response?.status === 429) {
        console.warn('Rate limit reached, try again later');
        console.log('Error details:', err.response?.data);
      }
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fetch };
}
