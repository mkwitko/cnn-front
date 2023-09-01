import { CACHE_PATH } from '@/infra/cache';
import { getCache } from '@/services/cache';
import { useState } from 'react';

export default function useConsentHook() {
  const [data, setData] = useState<any>(
    getCache(CACHE_PATH.CONSENT.CONSENT) || []
  );

  const [consentChoice, setConsentChoice] = useState<any>(
    data && data.length > 0
      ? data.map((e: any, i: number) => (e.value === 1 ? true : false))
      : [false, false]
  );

  return {
    data,
    setData,
    consentChoice,
    setConsentChoice,
  };
}
