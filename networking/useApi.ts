import { AxiosError } from 'axios';
import { useState } from 'react';
import api from './api';

export default function useApi(endpoint: string, params = {}) {
  const [data, setData] = useState(null);
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
      }
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fetch };
}
