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
//4.함수에 타입지정하려면 2곳 가능
//1)함수로 들어오는 자료 (파라미터) -파라미터 옆에 적으면 됌 그리고 파라미터에 타입을 지정하면 필수 파라미터가 됌
//2)함수에서 나가는 자료 (return) - return 우측에 있는 값에 타입지정하고 싶으면 함수명() 우측에 적으면 됌
function 내함수(x) {
    return x * 2;
}
//함수는 특이하게도 void라는 타입을 사용가능
//void란 '아무것도 없이 공허함'을 뜻하는 타입인데 return할 자료가 없는 함수의 타입으로 사용가능
function 내함수2(x) {
    return x * 2; //여기서 에러남 
}
//함수에 return 방지장치를 주고 싶을 때 void 타입을 활용하기
// 4-1. 파라미터가 옵션일 경우
//함수에 파라미터 없이 쓰고 싶을 때 타입스크립트에선 미리 "이 파라미터는 옵션임" 이렇게 정의를 해주셔야 에러가 나지 않는다.
function 내함수3(x) {
}
내함수3(); //가능
내함수3(2); //가능
//위와 같이 파라미터 우측에 그냥 물음표치면 됩니다. 그럼 앞으로 내함3수()를 사용할 때 파라미터없이도 쓸 수 있음!
//사실 ?는 x : number | undefined 이거랑 똑같은 의미 (매우 중요) 즉, 파라미터가 정의가 안되면 자동으로 undefined가 되니까 그걸 반영한거라고 볼 수 있음(옵션으로 처리)
//5. Type Narrowing 
function 내함수4(x) {
    return x + 1; //에러남 
}
//string | number 같은 union type 에는 일반적으로 조작을 못하게 막아놔서 그렇습니다.
//해결방법은 1. 타입을 하나로 Narrowing 하거나 2. Assert하기
// Narrowing:if문 등으로 타입을 하나로 정해주는 것
function 나의함수(x) {
    if (typeof x === 'number') {
        return x + 1;
    }
    else if (typeof x === 'string') {
        return x + 1;
    }
    else {
        return 0;
    }
}
//if문과 typeof 키워드로 현재 파라미터의 타입을 검사해서 "이게 'number' 타입일 경우 이렇게 해주세요~" "이게 'string' 타입일 경우 이렇게 해주세요~" 이렇게 코드를 짜야 정상적으로 사용이 가능
//타입스크립트는 타입 애매한걸 싫어해서 귀찮아도 해야함
//그런데 함수 안에서 if문 쓸 때는 마지막에 else {} 이거 없으면 에러가 발생
//tsconfig.js 파일에서 "noImplicitReturns": false, 추가하는 방법도 있음
//if말고 in, instanceof 키워드도 사용가합니다.
//6.Type Assertion
//Narrowing 대신에 타입을 간편하게 assert 할 수도 있음 
//"이 변수의 타입을 number로 생각해주세요"이런 뜻으로 코드를 짜면 타입스크립트 컴파일러가 눈감아준다.
//변수명 as string <=  as라는 키워드 쓰면 됌
function 내함수(x) {
    return x + 1;
}
console.log(내함수(123));
//변수명 as number 라고 쓰면 "나는 이 변수를 number라고 주장하겠습니다~" 라는 뜻이며 실제로 그렇게 타입을 변경해준다.
//근데 as 키워드를 사용하려면 "함수에 무조건 숫자가 들어올 것이다"라는 사실을 알고 있어야 안전하게 쓸 수 있다.
//as 키워드 사용시 특징
//1)as 키워드는 union type 같은 복잡한 타입을 하나의 정확한 타입으로 줄이는 역할을 수행
//2)사실은 타입실드 임시 해제용입니다. 실제 코드 실행결과는 as 있을 때나 없을 때나 거의 동일
//as 쓰면 간편하지만 정확히 코드짜려면 narrowing을 씁시다.
//as 키워드는 맘대로 타입을 개발자 맘대로 주장하는 역할이라 때문에 엄격한 타입체크기능을 잠깐 안쓰겠다는 뜻과 동일
//as 문법은 이럴 때 쓰자!
//1)왜 타입에러가 나는지 정말 모르겠는 상황에 임시로 에러해결용으로 사용하거나
//2)내가 어떤 타입이 들어올지 정말 확실하게 알고 있는데 컴파일러 에러가 방해할 때
//7.readonly로 잠그기
var 출생지역 = 'seoul';
출생지역 = 'busan'; //const 변수는 여기서 에러남
//const 변수는 값이 변하지 않는 변수를 만들고 싶을 때 const 쓰면 됩니다. 재할당시 오류남
var 여친 = {
    name: '엠버'
};
여친.name = '유라'; //const 변수지만 에러안남
var 여친 = {
    name: '엠버'
};
여친.name = '유라'; //readonly라서 에러남
var 네모2 = {
    width: 100
};
var 좌표 = { x: 1, y: 2 };
//이렇게 하면 에러남
// interface 키워드를 배우게 될텐데 이 키워드를 쓰면 재정의가 가능
// 변수가 1이라는 값만 가질 수 있게 제한할면 const변수를 쓰면 되는데 1또는 0만 가질 수 이게 제한하고 싶을 땐 
//그 변수에 number 이런 식으로 타입을 지정하는거는 너무 광범위 하니까 그럴때는 Literal type을 선언하자
//8.Literal Type 만드는 법 
var john;
var kim;
//'대머리', '솔로'라는 타입을 만들었고 literal type는 변수나 함수에 할당 가능하다.
//그럼 이제 john이라는 변수는 이제 '대머리' 라는 글자만 할당
//kim이라는 변수는 이제 '솔로' 라는 글자만 할당
//특정 글자나 숫자만 가질 수 있게 제한을 두는 타입을 literal type라고 하고 즉, 더욱 엄격한 실드라고 한다.
var 방향;
방향 = 'left';
//or 기호를 써도 된다. 이제 'left' 또는 'right' 글자만 가질 수 있는 변수가 된것
function 함수(a) {
    return 1;
}
//함수의 경우에는 파라미터 타입선언할 때 글자나 숫자를 집어넣으시면 그것만 파라미터로 넣을 수 있고
//return 타입선언할 때도 글자나 숫자를 집어넣으시면 그 값만 return할 수 있음
var 이름11 = 'kim' | 'park';
// 이렇게literal type 쓰면 되는 것입니다. (이런 식의 문법은 자바스크립트에 없음)
// 위와 같은 const 이름11 = 'kim' | 'park' 말고 as const 문법
//'kim' 이라는 타입만 들어올 수 있는 함수를 만들었습니다. 근데 자료.name을 입력하고 싶은 상황
var 자료 = {
    name: 'kim'
};
function 내함수5(a) {
}
내함수5(자료.name);
//에러가 나는 이유는?
//함수는 'kim' 타입만 입력할 수 있다고 해놨고 자료.name 이라는건 string 타입이지 'kim' 타입이 아니기 때문이다.
//해결방법은
//1) object 만들 때 타입을 잘 미리 정하든가
//2) 예전에 배웠던 assertion을 쓰시든가 (as 'kim' 붙이기)
//3)as const 라는걸 애초에 object 자료에 붙일 수 있습니다. 
var 자료 = {
    name: 'kim'
};
function 내함수6(a) {
}
내함수6(자료.name);
(function () { });
var ABC = function (x, y) {
    return x + y;
};
//10.methods 안에 타입지정하기 
//object 자료 안에 함수도 넣을 수있다.
var 회원정보 = {
    name: 'kim',
    age: 30,
    plusOne: function (x) {
        return x + 1;
    },
    changeName: function () {
        console.log('안녕');
    }
};
회원정보.plusOne(1);
회원정보.changeName();
//plusOne 그리고 changeName 함수를 object 자료에 집어넣기
//타입스크립트를 써도 html 조작이 가능한데 근데 그냥 자바스크립트 쓸 때와 약간 다른 점이 존재하는데 조금 귀찮다
//strictNullChecks 옵션을 설정해줘야하는데 true로 한다는것은 null이 들어올 경우 체크해준다는 뜻으로 html 조작할 때 셀렉터로 찾으면 null 오류가 발생했을 때 오류 잡을 때도 도움된다.
//혹은 "strict" : true 이렇게 쓰면 strickNullChecks 옵션도 자동으로 true로 켜진다.
//11. <h4>제목을 다른 글자로 변경해보기 
var 제목123 = document.querySelector('#title');
제목123.innerHTML = '반갑소';
// 에러발생->"제목123이라는 변수가 null일 수 있습니다"
//이유는 셀렉터로 html을 찾으면 타입이 Element | null 이기 때문에 그렇기 때문에 그래서 아직 확실하지 않아서 점찍고 조작하고 변경하는걸 금지시켜주는 것이다.
// 해결방법1.narrowing 
var 제목12 = document.querySelector('#title');
if (제목12 != null) {
    제목12.innerHTML = '반갑소';
}
else { }
// 해결방법2. 더 좋은 instanceof 사용하는 narrowing 방법
var 제목13 = document.querySelector('#title');
if (제목13 instanceof HTMLElement) {
    제목13.innerHTML = '반갑소';
}
//instanceof 라는 연산자를 쓰는 것인데 우측에 HTMLElement 입력하면 그 타입인지 체크해준다.
// 해결방법3. assertion  
var 제목14 = document.querySelector('#title');
제목14.innerHTML = '반갑소';
//as 키워드를 쓰면 타입을 속일수 있다. =>HTMLElement 혹은 그냥 Element 이걸로 속이자 그렇지만 별로 좋지 않음
// 해결방법4. optional chaining 연산자 
var 제목15 = document.querySelector('#title');
if ((제목15 === null || 제목15 === void 0 ? void 0 : 제목15.innerHTML) != undefined) {
    제목15.innerHTML = '반갑소';
}
//가끔 innerHTML 작성할 때 엔터키로 자동완성시키면 ?. 이런 연산자가 자동으로 붙습니다.
//js 신문법인데 뭔 뜻이냐면 왼쪽에 있는 object 자료안에 .innerHTML이 존재하면 써주고 없으면 undefined 남기라는 뜻이다.
//그래서 가끔 ?. 연산자로 해결할 수도 있다.
// 해결방법5.strict 설정 false로 끄기
//null 체크해주는게 귀찮으면 설정을 끄면 체크안해줌
//a 태그의 href 속성을 바꿔보기
var 링크1 = document.querySelector('#link');
if (링크1 instanceof HTMLElement) {
    링크1.href = 'https://kakao.com'; //에러남 ㅅㄱ
}
//에러가 발생하는데 HTMLElement 타입은 href 그런 속성 없다고 한다.
var 링크 = document.querySelector('#link');
if (링크 instanceof HTMLAnchorElement) {
    링크.href = 'https://kakao.com'; //잘됨
}
//html 태그 종류별로 정확한 타입명칭이 있는데 a 태그는 HTMLAnchorElement img 태그는 HTMLImageElement h4 태그는 HTMLHeadingElement
//이런 정확한 타입으로 narrowing 해주셔야 html 속성 수정을 제대로할 수 있다.
//12.이벤트리스너해보기 - 타입 지정
var 버튼 = document.getElementById('button');
버튼 === null || 버튼 === void 0 ? void 0 : 버튼.addEventListener('click', function () {
    console.log('안녕');
});
var 네모 = { color: 'red', width: 100 };
var 변수 = { name: 'kim', age: 90 };
var 변수 = { name: '멍멍' };
//& 연산자로 Dog, Animal을 합쳤다 => name 속성이 중복되서 에러남
// 즉,interface 말고도 type 키워드도 똑같은 현상이 일어난다.
//(주의)그런데 name : string , name : number 라서 에러가 나는 것이지 둘다 name : string 타입이면 에러가 나지않고 하나로 합쳐줌 
