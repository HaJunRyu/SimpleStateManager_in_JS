import { Store, State, Reducer, Action } from '../types';

const createStore = (reducer: Reducer): Store<State> => {
  // 구독된 함수 목록을 가지고 있는 배열
  let listeners: Function[] = [];
  // 전역상태 store가 하나라는 가정하에 이 상태 식별자가 싱글톤으로 존재하며 새로운 상태들이 교체되며 애플리케이션에 전달될것이다. (읽기전용이라 얼려줌)
  let state = Object.freeze(reducer());

  // 구독 함수
  const subscribe = (newListener: Function): Function => {
    listeners.push(newListener);

    // 구독을 해제할 수 있는 함수를 반환한다.
    return () => {
      listeners = listeners.filter(listener => listener !== newListener);
    };
  };

  // dispatch가 일어날때, 즉 상태가 변경될때 구독된 함수들에 상태를 전달하며 호출해주는 역할.
  const invokeSubscribers = () => {
    // 어차피 상태는 읽기전용으로 사용할것이기 때문에 얼려서 실수를 방지해준다.
    listeners.forEach(listener => listener(Object.freeze(state)));
  };

  const dispatch = (action: Action) => {
    // dispatch 함수에 action객체를 전달하면 state와 함께 reducer함수에 전달한다.
    const newState = reducer(state, action);

    // reducer에는 default로 return하는 값이 항상 있어야 한다. (예상하지 못한 동작을 방지하기 위함)
    if (!newState) throw new Error('rootReducer should always return a value');

    // 만약 default case로 기존 상태가 그대로 반환되면 아무일도 일어나지 않는다.
    if (state === newState) return;

    // reducer함수가 반환한 새로운 상태를 현재 상태로 변경해준다.
    state = newState;

    // 새로운 상태를 기반으로 구독함수들을 호출해준다.
    invokeSubscribers();
  };

  return {
    subscribe,
    dispatch,
    getState: callback => callback(state),
  };
};

export default createStore;
