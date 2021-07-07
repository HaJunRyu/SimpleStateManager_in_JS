import { Store, State } from '../types';
import createStore from './createStore';
import reducer from './reducer';

// 5. 스토어를 생성한다. (createStore함수를 정의해야한다.)
let store: Store<State> | null = null;

if (!store) {
  store = createStore(reducer);
}
// store객체는 subscribe, dispatch, getState 프로퍼티(함수)를 가지고 있다.

export default store;
