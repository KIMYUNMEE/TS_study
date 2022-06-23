//1.Typescript 기본 문법 정리 
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
var 코코 = {
    name: "감감"
};
//Tip:변수 생성시 타입스크립트가 타입을 자동으로 부여해주므로 모든 변수에 일일히 타입 지정할 필요는 없다.
var 나의가수 = { 제목: "랄라라랄", 가수: "굥굥" };
var project = {
    member: ['kim', 'park'],
    days: 30,
    started: true,
};
// ----------------------------------------------------------------------------------------------
//2.Union type : 변수에 string 또는 number가 들어올 수 있다면 | 연산자를 씁니다.
var 이름1 = 'kim';
var 나이 = 100;
//Union type에 괄호를 칠 수도 있습니다. 이 상황에선 이름1, 나이 변수엔 string또는 number만 들어올 수 있습니다.
//할당하는 순간 타입은 string 또는 number중 하나로 변합니다.
var 어레이 = [1, '2', 3];
var 오브젝트 = { data: '123' };
//배열과 객체는 이렇게 Union type으로 정의합니다.
//여기서 tip은 변수에 정의된 Union 타입은 할당과 동시에 OR 역할이 사라지는데(=할당을 하고 나면 둘중의 하나로 변함) 반면 array, object에 정의된 Union 타입은 OR 연산자가 유지되므로 타입여러가지를 쓸 수 있다.
//3. any, unknown
//Union type대신에 쓸 수 있는게 any인데 아무 자료나 집어넣을 수 있는 타입으로 쉽게말하면 실드해제
var 이름 = 'kim';
이름 = 123;
이름 = undefined;
이름 = [];
//any 타입은 실드 해제 문법이기 때문에 갑자기 타입을 바꿔도 에러가 나지 않습니다.
//그렇지만 너무 자주 사용하면 타입관련 버그가 생길 경우 왜 그런지 추적하기가 어려움
//타입 실드를 안씌우면 타입스크립트를 쓸 이유가 없으므로 비상시 쓰는 변수 타입체크 해제기능 이런 용도로 씁시다.
//any 보다 더 좋은 unknown 타입
var 이름 = 'kim';
이름 = 123;
이름 = undefined;
이름 = [];
//아직 어떤 타입이 들어올지 모를 경우, 다양한 타입을 집어넣어야할 경우 unknown타입 사용하기
//특징은
//1. unknown 타입엔 모든 자료 다 집어넣을 수 있음
//2. 자료집어넣어도 타입은 그대로 unknown
//그러나
var 이름;
var 변수1 = 이름;
var 변수2 = 이름;
var 변수3 = 이름;
// unknown 타입을 다른 곳에 집어넣으려고 하면 그쪽 실드가 발동해서 에러가 납니다. (any는 안그럼)
var 이름2;
이름2[0];
이름2 - 1;
이름2.data;
// 이래도 에러가 납니다. (any는 에러안남)
//타입스크립트는 정확하고 확실한걸 좋아합니다.확실하지않은 타입에 뺄셈해주고 그런거 싫어합니다.
//숫자가 아닌걸 뺄셈할 수는 없고 타입스크립트에선 뺄셈은 number 류의 타입만 할 수 있고 .name 이런건 object 류의 타입만 할 수 있다라고 미리 정의되어있기 때문에 위에 코드가 오류가 나는것입니다.
//(참고) 그래서 unknown 타입인 변수를 조작하려면 내가 조작할 변수의 타입이 무엇인지 확실하게 체크하는 narrowing 또는 assertion 스킬을 사용해야합니다. 
var user = 'kim';
var age = undefined;
var married = false;
var 철수 = [user, age, married];
var 학교 = {
    score: [100, 97, 84],
    teacher: 'Phil',
    friend: 'John'
};
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];
