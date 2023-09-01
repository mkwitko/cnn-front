import { CACHE_PATH } from '@/infra/cache';
import { getCache } from '@/services/cache';
import { useState } from 'react';

export default function useConsentTypesHook() {
  const [data, setData] = useState<any>(
    getCache(CACHE_PATH.CONSENT_TYPES.CONSENT_TYPES) || []
  );

  return {
    data,
    setData,
  };
}
