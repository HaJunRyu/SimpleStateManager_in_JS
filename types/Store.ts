import { Action } from './';

// Store타입을 쓸때 State의 형태를 전달하여 사용한다.
interface Store<State> {
  subscribe(newListener: Function): Function;
  dispatch(action: Action): void;
  getState(callback: Function): State;
}

export default Store;
