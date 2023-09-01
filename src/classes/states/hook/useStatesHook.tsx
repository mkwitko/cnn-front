import { CACHE_PATH } from '@/infra/cache';
import { getCache } from '@/services/cache';
import { useState } from 'react';

export default function useStatesHook() {
  const [data, setData] = useState<any>(
    getCache(CACHE_PATH.STATES.STATES) || []
  );

  const [selected, setSelected] = useState<any>('');

  return {
    data,
    setData,
    selected,
    setSelected,
  };
}
