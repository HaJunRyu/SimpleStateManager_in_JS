interface Action {
  type: string;
  // Action객체의 프로퍼티로는 type이외에는 아주 자유롭게 사용하게끔 설계
  [option: string]: any;
}

// Store타입을 쓸때 State의 형태를 전달하여 사용한다.
interface Store<State> {
  subscribe(newListener: Function): Function;
  dispatch(action: Action): void;
  getState(callback: Function): State;
}

export default Store;
