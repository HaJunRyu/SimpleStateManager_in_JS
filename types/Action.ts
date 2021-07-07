interface Action {
  type: string;
  // Action객체의 프로퍼티로는 type이외에는 아주 자유롭게 사용하게끔 설계
  [option: string]: any;
}

export default Action;
