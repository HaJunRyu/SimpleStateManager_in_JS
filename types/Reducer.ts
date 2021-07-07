import { State, Action } from './';

interface Reducer {
  (state?: State, action?: Action): State;
}

export default Reducer;
