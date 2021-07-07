import { Reducer } from '../types';

// 3. 초기상태 선언 (리듀서 함수에 첫번째 인수로 전달될 state의 초기값 정의)
const INITIAL_STATE = {
  count: 0,
};

// 4. 리듀서 함수 정의 (리듀서 함수에는 첫번째 파라미터로 store의 상태가 들어오고(초기에는 초기 상태) action에는 dispatch할때 인자로 넘겨준 액션객체가 넘어온다.)
const reducer: Reducer = (state = INITIAL_STATE, action) => {
  if (!action) return state;
};

export default reducer;
