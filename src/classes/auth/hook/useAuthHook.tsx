import { CACHE_PATH } from '@/infra/cache';
import { getCache } from '@/services/cache';
import { useState } from 'react';

export default function useAuthHook() {
  const [data, setData] = useState<any>(getCache(CACHE_PATH.AUTH.AUTH) || {});

  return {
    data,
    setData,
  };
}
