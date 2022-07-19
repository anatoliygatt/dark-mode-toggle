import { useEffect, useRef, useState } from 'react';
import { useFirstMountState } from './useFirstMountState';
import { usePrevious } from './usePrevious';

export function useIsTransitionDisabled<T>(
  state: T,
  defaultTransitionDurationInMs: number
): boolean {
  const isFirstMount = useFirstMountState();
  const previousState = usePrevious(state);
  const [isTransitionDisabled, setIsTransitionDisabled] =
    useState<boolean>(false);
  const timeoutId = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    if (state !== previousState) {
      setIsTransitionDisabled(true);
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }
      timeoutId.current = setTimeout(() => {
        setIsTransitionDisabled(false);
        timeoutId.current = undefined;
      }, defaultTransitionDurationInMs);
    }
  }, [state, previousState, defaultTransitionDurationInMs]);

  if (isFirstMount) {
    return true;
  }

  return isTransitionDisabled;
}
