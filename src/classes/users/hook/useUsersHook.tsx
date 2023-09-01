import { CACHE_PATH } from '@/infra/cache';
import { getCache } from '@/services/cache';
import { useState } from 'react';

export default function useUsersHook() {
  const [data, setData] = useState<any>(
    getCache(CACHE_PATH.USER.USER_INFO) || []
  );

  return {
    data,
    setData,
  };
}
