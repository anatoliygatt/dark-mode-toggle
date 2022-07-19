import { renderHook, waitFor } from '@testing-library/react';
import { useIsTransitionDisabled } from '../../hooks/useIsTransitionDisabled';

describe('useIsTransitionDisabled', () => {
  test('responds to a change in state', async () => {
    const { result, rerender } = renderHook(
      ({ state, defaultTransitionDuration }) =>
        useIsTransitionDisabled(state, defaultTransitionDuration),
      { initialProps: { state: 'sm', defaultTransitionDuration: 350 } }
    );

    expect(result.current).toBe(true);
    await waitFor(() => expect(result.current).toBe(false));

    rerender({ state: 'md', defaultTransitionDuration: 350 });

    expect(result.current).toBe(true);
    await waitFor(() => expect(result.current).toBe(false));
  });

  test('reschedules the update when the state is changed before the update is fired', async () => {
    const clearTimeoutSpy = jest.spyOn(global, 'clearTimeout');

    const { result, rerender } = renderHook(
      ({ state, defaultTransitionDuration }) =>
        useIsTransitionDisabled(state, defaultTransitionDuration),
      { initialProps: { state: 'sm', defaultTransitionDuration: 350 } }
    );

    expect(clearTimeoutSpy).not.toHaveBeenCalled();
    expect(result.current).toBe(true);

    rerender({ state: 'md', defaultTransitionDuration: 350 });

    expect(clearTimeoutSpy).toHaveBeenCalled();
    expect(result.current).toBe(true);
    await waitFor(() => expect(result.current).toBe(false));

    clearTimeoutSpy.mockRestore();
  });
});
