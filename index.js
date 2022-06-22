var 이름 = 'kim';
//이름이라는 변수에 (문자) type만 들어올 수 있습니다.
var 이름2 = ['kim', 'co'];
//이름2라는 변수에 (배열)type만 들어올 수있는데 배열안에는 문자만 들어올 수 있습니다.
var 이름3 = { name: "kim" };
//이름3라는 변수에 (객체)type만 들어올 수있는데 객체 안에는 name이라는 키와 키값은 문자만 들어올 수있습니다.
var 이름4 = { name: "kim" };
//키에 ?를 붙여서 name이라는 속성이 들어올 수도 있고 안들어올 수도 있다고 name을 옵션으로 설정해놓으면 값이 안들어와도 에러가 안뜸
//union타입 : 다양한 타입이 들어올 수 있는 것 
var 이름5 = 'kim';
var 이름6 = 'kim';
//함수 만들 때 파라미터도 타입을 정할 수 있습니다. x의 타입은 number인거고 더불어 return값의 타입도 number로 정함
//무조건 number만 return되어야 한다.
function 감자(x) {
    return x * 2;
}
var john = ["123", true];
var john2 = { name: "123" };
var john3 = { name: "감자" };
//[key:string]란 모든 object속성이라는 뜻 즉, "글자로 된 모든 object속성의 타입은:string"로 name뿐만아니라 다른 속성들도 들어올 수 있게 귀찮은 과정 없이 그냥 한번에 [key:string]으로 잡기
