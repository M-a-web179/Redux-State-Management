import { useDispatch, useSelector } from 'react-redux';
import {
  decrement,
  increment,
  reset,
} from '../store/actions/counterActions';
import type { AppDispatch, RootState } from '../store/store';

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <section aria-label="Counter section" style={{ textAlign: 'center' }}>
      <h1>Counter</h1>
      <p aria-live="polite">Current count: {count}</p>

      <div>
        <button type="button" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button type="button" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        <button type="button" onClick={() => dispatch(reset())}>
          Reset
        </button>
      </div>
    </section>
  );
}
