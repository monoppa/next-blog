import { useMemo } from 'react';

export default function useWindowSize() {
  const dimensions = useMemo(() => {
    if (typeof window === 'object') {
      return [window.innerWidth, window.innerHeight];
    }

    return [null, null];
  }, []);

  return dimensions;
}
