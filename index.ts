//1.Typescript 기본 문법 정리 

let 이름: string = 'kim'
//이름이라는 변수에 (문자) type만 들어올 수 있습니다.
let 이름2: string[] = ['kim', 'co']
//이름2라는 변수에 (배열)type만 들어올 수있는데 배열안에는 문자만 들어올 수 있습니다.
let 이름3: {name:string } = { name:"kim"}
//이름3라는 변수에 (객체)type만 들어올 수있는데 객체 안에는 name이라는 키와 키값은 문자만 들어올 수있습니다.
let 이름4: { name?: string } = { name: "kim" }
//키에 ?를 붙여서 name이라는 속성이 들어올 수도 있고 안들어올 수도 있다고 name을 옵션으로 설정해놓으면 값이 안들어와도 에러가 안뜸

//union타입 : 다양한 타입이 들어올 수 있는 것 
let 이름5: string | number = 'kim'

//TYPE alias:type지정이 길다면 type변수에 담을 수 있음
//일반 변수와 차이를 두기 위해 type변수 이름을 대문자로 설정하자
type Name=string | number
let 이름6: Name = 'kim'

//함수 만들 때 파라미터도 타입을 정할 수 있습니다. x의 타입은 number인거고 더불어 return값의 타입도 number로 정함
//무조건 number만 return되어야 한다.
function 감자(x: number): number{
    return x * 2;
}

//array에 쓸 수 있는 tuple타입
//tuple타입이란 [1,2] 배열 첫째자리엔 반드시 1이 배열 두번째 자리엔 반드시 2가 와야한다는 뜻
type Member = [string, boolean]
let john: Member = ["123", true]

//object에 type지정해야할 속성이 너무 많으면 type변수에 담아주기
type Member2 = {
    name:string
}
let john2: Member2 = { name: "123" }

//그런데 name뿐만 아니라 age, tel 등 이런 속성도 객체에 넣어야 하는 상황에서는?!!
type Member3 = {
    [key:string]:string
}
let john3: Member2 = { name: "감자" }
//[key:string]란 모든 object속성이라는 뜻 즉, "글자로 된 모든 object속성의 타입은:string"로 name뿐만아니라 다른 속성들도 들어올 수 있게 귀찮은 과정 없이 그냥 한번에 [key:string]으로 잡기

let 코코:{
    name:string
} = {
    name:"감감"
}
//Tip:변수 생성시 타입스크립트가 타입을 자동으로 부여해주므로 모든 변수에 일일히 타입 지정할 필요는 없다.

let 나의가수: { 제목: string, 가수: string } = { 제목: "랄라라랄", 가수: "굥굥" }

let project: {
    member: string[],
    days: number,
    started:boolean
}={
  member : ['kim', 'park'],
  days : 30,
  started : true,
}
// ----------------------------------------------------------------------------------------------

//2.Union type : 변수에 string 또는 number가 들어올 수 있다면 | 연산자를 씁니다.
let 이름1: string | number = 'kim';
let 나이: (string | number) = 100;
//Union type에 괄호를 칠 수도 있습니다. 이 상황에선 이름1, 나이 변수엔 string또는 number만 들어올 수 있습니다.
//할당하는 순간 타입은 string 또는 number중 하나로 변합니다.
var 어레이: (number | string)[] = [1,'2',3]
var 오브젝트: { data: string } = { data: '123' }
//배열과 객체는 이렇게 Union type으로 정의합니다.
//여기서 tip은 변수에 정의된 Union 타입은 할당과 동시에 OR 역할이 사라지는데(=할당을 하고 나면 둘중의 하나로 변함) 반면 array, object에 정의된 Union 타입은 OR 연산자가 유지되므로 타입여러가지를 쓸 수 있다.

//3. any, unknown
//Union type대신에 쓸 수 있는게 any인데 아무 자료나 집어넣을 수 있는 타입으로 쉽게말하면 실드해제

let 이름: any = 'kim';
이름 = 123;
이름 = undefined;
이름 = [];
 
//any 타입은 실드 해제 문법이기 때문에 갑자기 타입을 바꿔도 에러가 나지 않습니다.
//그렇지만 너무 자주 사용하면 타입관련 버그가 생길 경우 왜 그런지 추적하기가 어려움
//타입 실드를 안씌우면 타입스크립트를 쓸 이유가 없으므로 비상시 쓰는 변수 타입체크 해제기능 이런 용도로 씁시다.

//any 보다 더 좋은 unknown 타입
let 이름: unknown = 'kim';
이름 = 123;
이름 = undefined;
이름 = [];

//아직 어떤 타입이 들어올지 모를 경우, 다양한 타입을 집어넣어야할 경우 unknown타입 사용하기
//특징은
//1. unknown 타입엔 모든 자료 다 집어넣을 수 있음
//2. 자료집어넣어도 타입은 그대로 unknown

//그러나
let 이름: unknown;

let 변수1: string = 이름;
let 변수2: boolean = 이름;
let 변수3: number = 이름;
// unknown 타입을 다른 곳에 집어넣으려고 하면 그쪽 실드가 발동해서 에러가 납니다. (any는 안그럼)

let 이름2: unknown;
이름2[0];
이름2 - 1;
이름2.data;
// 이래도 에러가 납니다. (any는 에러안남)
//타입스크립트는 정확하고 확실한걸 좋아합니다.확실하지않은 타입에 뺄셈해주고 그런거 싫어합니다.
//숫자가 아닌걸 뺄셈할 수는 없고 타입스크립트에선 뺄셈은 number 류의 타입만 할 수 있고 .name 이런건 object 류의 타입만 할 수 있다라고 미리 정의되어있기 때문에 위에 코드가 오류가 나는것입니다.
//(참고) 그래서 unknown 타입인 변수를 조작하려면 내가 조작할 변수의 타입이 무엇인지 확실하게 체크하는 narrowing 또는 assertion 스킬을 사용해야합니다. 

let user: string = 'kim';
let age:undefined|number = undefined;
let married:boolean = false; 
let 철수: (string | number | undefined | boolean)[] = [user, age, married];

let 학교: {
    score: (number | boolean)[],
    teacher: string,
    friend:string|string[] //friend는 'john'이라는 string이고 학교.friend = ['Lee' , 학교.teacher]에서 []는 배열이니까 |string[]추가해줌
} = {
    score : [100, 97, 84],
    teacher : 'Phil',
    friend : 'John'
}
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher]


//4.함수에 타입지정하려면 2곳 가능
//1)함수로 들어오는 자료 (파라미터) -파라미터 옆에 적으면 됌 그리고 파라미터에 타입을 지정하면 필수 파라미터가 됌
//2)함수에서 나가는 자료 (return) - return 우측에 있는 값에 타입지정하고 싶으면 함수명() 우측에 적으면 됌

function 내함수(x :number) :number { 
  return x * 2 
} 

//함수는 특이하게도 void라는 타입을 사용가능
//void란 '아무것도 없이 공허함'을 뜻하는 타입인데 return할 자료가 없는 함수의 타입으로 사용가능

function 내함수2(x :number) :void { 
  return x * 2 //여기서 에러남 
} 
//함수에 return 방지장치를 주고 싶을 때 void 타입을 활용하기

// 4-1. 파라미터가 옵션일 경우
//함수에 파라미터 없이 쓰고 싶을 때 타입스크립트에선 미리 "이 파라미터는 옵션임" 이렇게 정의를 해주셔야 에러가 나지 않는다.

function 내함수3(x? :number) { 

}
내함수3(); //가능
내함수3(2); //가능
//위와 같이 파라미터 우측에 그냥 물음표치면 됩니다. 그럼 앞으로 내함3수()를 사용할 때 파라미터없이도 쓸 수 있음!
//사실 ?는 x : number | undefined 이거랑 똑같은 의미 (매우 중요) 즉, 파라미터가 정의가 안되면 자동으로 undefined가 되니까 그걸 반영한거라고 볼 수 있음(옵션으로 처리)


//5. Type Narrowing 
function 내함수4(x: number | string) {
   return x + 1  //에러남 
}
//string | number 같은 union type 에는 일반적으로 조작을 못하게 막아놔서 그렇습니다.
//해결방법은 1. 타입을 하나로 Narrowing 하거나 2. Assert하기

// Narrowing:if문 등으로 타입을 하나로 정해주는 것
function 나의함수(x :number | string){
  if (typeof x === 'number') {
    return x + 1
  } 
  else if (typeof x === 'string') {
    return x + 1
  }
  else {
    return 0
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
function 내함수(x :number | string){ 
    return (x as number) + 1 
}
console.log( 내함수(123) )
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

const 출생지역 = 'seoul'; 
출생지역 = 'busan'; //const 변수는 여기서 에러남

//const 변수는 값이 변하지 않는 변수를 만들고 싶을 때 const 쓰면 됩니다. 재할당시 오류남

const 여친 = {
  name : '엠버'
}
여친.name = '유라';  //const 변수지만 에러안남
//하지만 object 자료를 const에 집어넣어도 object 내부는 마음대로 변경가능
//const 변수는 재할당만 막아줄 뿐이지 그 안에 있는 object 속성 바꾸는 것 까지 관여하지 않기 때문에 내부는 변경 가능
//readonly 키워드는 속성 왼쪽에 붙일 수 있으며 특정 속성을 변경불가능하게 잠궈줌

type Girlfriend = {
  readonly name : string,
}

let 여친 :Girlfriend = {
  name : '엠버'
}

여친.name = '유라' //readonly라서 에러남
//한번 부여된 후엔 앞으로 바뀌면 안될 속성들을 readonly로 잠궈보자
//물론 readonly는 컴파일시 에러를 내는 것일 뿐 변환된 js 파일 보시면 잘 바뀌긴 한다.

//만약 type 속성 몇개가 선택사항이라면 
//ex) 어떤 object자료는 color, width 속성이 둘다 필요하지만 어떤 object 자료는 color 속성이 선택사항이라면 
//type alias를 여러개 만들어야하는게 아니라 물음표연산자만 추가하면 됩니다.

type Square = {
  color? : string,
  width : number,
}

let 네모2 :Square = { 
  width : 100 
}
//Square라는 type alias를 적용한 object 자료를 하나 만들고 ?쓴덕에 color 속성이 없어도 에러가 나지 않는다.
//물음표는 "undefined 라는 타입도 가질 수 있다~"라는 뜻

//type 키워드 여러개를 합칠 수 있다.

type Name = string;
type Age = number;
type NewOne = Name | Age; 
//OR 연산자를 이용해서 Union type을 만들 수도 있다 => NewOne 타입에 마우스를 올리면 string | number로 보인다.


type PositionX = { x: number };
type PositionY = { y: number };
type XandY = PositionX & PositionY
let 좌표 :XandY = { x : 1, y : 2 }
//object에 지정한 타입의 경우 합치기도 가능 & 기호를 쓴다면 object 안의 두개의 속성을 합쳐준다.
//위 코드에서 XandY 타입은 { x : number, y : number } 이렇게 정의 되어있을 것이다.
//Type alias & Type alias 만 가능한게 아니라 Type alias & { name : string } 이런 것도 가능하다.


//type 키워드는 재정의가 불가능하다.

type Name = string;
type Name = number;

//이렇게 하면 에러남
// interface 키워드를 배우게 될텐데 이 키워드를 쓰면 재정의가 가능



// 변수가 1이라는 값만 가질 수 있게 제한할면 const변수를 쓰면 되는데 1또는 0만 가질 수 이게 제한하고 싶을 땐 
//그 변수에 number 이런 식으로 타입을 지정하는거는 너무 광범위 하니까 그럴때는 Literal type을 선언하자
 
//8.Literal Type 만드는 법 

let john :'대머리';
let kim :'솔로';
//'대머리', '솔로'라는 타입을 만들었고 literal type는 변수나 함수에 할당 가능하다.
//그럼 이제 john이라는 변수는 이제 '대머리' 라는 글자만 할당
//kim이라는 변수는 이제 '솔로' 라는 글자만 할당
//특정 글자나 숫자만 가질 수 있게 제한을 두는 타입을 literal type라고 하고 즉, 더욱 엄격한 실드라고 한다.

let 방향: 'left' | 'right';
방향 = 'left';
//or 기호를 써도 된다. 이제 'left' 또는 'right' 글자만 가질 수 있는 변수가 된것

function 함수(a : 'hello') : 1 | 0 | -1 {
  return 1 
}
//함수의 경우에는 파라미터 타입선언할 때 글자나 숫자를 집어넣으시면 그것만 파라미터로 넣을 수 있고
//return 타입선언할 때도 글자나 숫자를 집어넣으시면 그 값만 return할 수 있음


const 이름11 = 'kim' | 'park'
// 이렇게literal type 쓰면 되는 것입니다. (이런 식의 문법은 자바스크립트에 없음)


// 위와 같은 const 이름11 = 'kim' | 'park' 말고 as const 문법
//'kim' 이라는 타입만 들어올 수 있는 함수를 만들었습니다. 근데 자료.name을 입력하고 싶은 상황
var 자료 = {
  name : 'kim'
}

function 내함수5(a : 'kim') {

}
내함수5(자료.name)
//에러가 나는 이유는?
//함수는 'kim' 타입만 입력할 수 있다고 해놨고 자료.name 이라는건 string 타입이지 'kim' 타입이 아니기 때문이다.
//해결방법은
//1) object 만들 때 타입을 잘 미리 정하든가
//2) 예전에 배웠던 assertion을 쓰시든가 (as 'kim' 붙이기)
//3)as const 라는걸 애초에 object 자료에 붙일 수 있습니다. 

var 자료 = {
  name : 'kim'
} as const;

function 내함수6(a : 'kim') {

}
내함수6(자료.name)
//as const는 효과가 2개
//1) 타입을 object의 value로 바꿔줌. (타입을 'kim'으로 바꿔줌)
//2)object안에 있는 모든 속성을 readonly로 바꿔줍니다 (변경하면 에러나게)
//object를 잠그고 싶으면 as const를 활용하자


//9.function type 도 타입지정하기

//함수 타입도 type alias로 저장해서 쓸 수 있다.
//ex) 1)숫자 두개를 파라미터로 입력할 수 있고 2)숫자를 return 하는 함수를 별명을 지어서 사용하려면
type NumOut = (x: number, y: number) => number;
//위와 같이 해야함

//반면 이런 식은 불가능합니다.function 키워드에는 () 이거 내부랑 오른쪽에만 타입지정이 가능하기 때문이다.
function 함수이름 : NumOut (){ }
//그래서 밑에와 같이 해야함 =>let 함수명 = function(){} 이렇게 함수 만들기 ->함수명 오른쪽에 함수명 : 타입별명
type NumOut = (x : number, y : number ) => number 
let ABC :NumOut = function(x,y){
  return x + y
}

//10.methods 안에 타입지정하기 
//object 자료 안에 함수도 넣을 수있다.

let 회원정보 = {
  name : 'kim',
  age : 30,
  plusOne (x:number){
    return x + 1
  },
  changeName : () => {
    console.log('안녕')
  }
}
회원정보.plusOne(1);
회원정보.changeName();

//plusOne 그리고 changeName 함수를 object 자료에 집어넣기




//타입스크립트를 써도 html 조작이 가능한데 근데 그냥 자바스크립트 쓸 때와 약간 다른 점이 존재하는데 조금 귀찮다
//strictNullChecks 옵션을 설정해줘야하는데 true로 한다는것은 null이 들어올 경우 체크해준다는 뜻으로 html 조작할 때 셀렉터로 찾으면 null 오류가 발생했을 때 오류 잡을 때도 도움된다.
//혹은 "strict" : true 이렇게 쓰면 strickNullChecks 옵션도 자동으로 true로 켜진다.

//11. <h4>제목을 다른 글자로 변경해보기 

let 제목123 = document.querySelector('#title');
제목123.innerHTML = '반갑소'

// 에러발생->"제목123이라는 변수가 null일 수 있습니다"
//이유는 셀렉터로 html을 찾으면 타입이 Element | null 이기 때문에 그렇기 때문에 그래서 아직 확실하지 않아서 점찍고 조작하고 변경하는걸 금지시켜주는 것이다.

// 해결방법1.narrowing 

let 제목12 = document.querySelector('#title');
if (제목12 != null) {
  제목12.innerHTML = '반갑소'
}else{}

// 해결방법2. 더 좋은 instanceof 사용하는 narrowing 방법

let 제목13 = document.querySelector('#title');
if (제목13 instanceof HTMLElement) {
  제목13.innerHTML = '반갑소'
}
//instanceof 라는 연산자를 쓰는 것인데 우측에 HTMLElement 입력하면 그 타입인지 체크해준다.


// 해결방법3. assertion  

let 제목14 = document.querySelector('#title') as HTMLElement;
제목14.innerHTML = '반갑소'
//as 키워드를 쓰면 타입을 속일수 있다. =>HTMLElement 혹은 그냥 Element 이걸로 속이자 그렇지만 별로 좋지 않음

// 해결방법4. optional chaining 연산자 

let 제목15 = document.querySelector('#title');
if (제목15?.innerHTML != undefined) {
  제목15.innerHTML = '반갑소'
}
//가끔 innerHTML 작성할 때 엔터키로 자동완성시키면 ?. 이런 연산자가 자동으로 붙습니다.
//js 신문법인데 뭔 뜻이냐면 왼쪽에 있는 object 자료안에 .innerHTML이 존재하면 써주고 없으면 undefined 남기라는 뜻이다.
//그래서 가끔 ?. 연산자로 해결할 수도 있다.


// 해결방법5.strict 설정 false로 끄기
//null 체크해주는게 귀찮으면 설정을 끄면 체크안해줌

//a 태그의 href 속성을 바꿔보기

let 링크1 = document.querySelector('#link');
if (링크1 instanceof HTMLElement) {
  링크1.href = 'https://kakao.com' //에러남 ㅅㄱ
}
//에러가 발생하는데 HTMLElement 타입은 href 그런 속성 없다고 한다.

let 링크 = document.querySelector('#link');
if (링크 instanceof HTMLAnchorElement) {
  링크.href = 'https://kakao.com'  //잘됨
}

//html 태그 종류별로 정확한 타입명칭이 있는데 a 태그는 HTMLAnchorElement img 태그는 HTMLImageElement h4 태그는 HTMLHeadingElement
//이런 정확한 타입으로 narrowing 해주셔야 html 속성 수정을 제대로할 수 있다.



//12.이벤트리스너해보기 - 타입 지정

let 버튼 = document.getElementById('button');
버튼?.addEventListener('click', function(){
  console.log('안녕')
}) 
//addEventListener 함수 붙일 때 물음표도 붙이는 것인데 optional chaining라고 한다.
//optional chaining: object에서 자료뽑을 때 object.어쩌구 이렇게 자료를 뽑는데 object?.어쩌구 이렇로도 뽑을 수있다는 뜻으로 이걸 쓰면 어쩌구라는 자료가 object에 존재하면 그거 뽑아주고 존재하지 않으면 undefined 남겨주세요~ 라는 뜻과 동일하다.
// 그래서 간혹 narrowing할 때 && 연산자로 undefined 체크하기 귀찮을 때 간혹 사용된다.
//그래서 버튼이라는 변수가 없을 경우 그 자리에 undefined를 내보내고,HTMLElement로 잘 있으면 addEventListener() 잘 부착해주기 때문에 이것도 일종의 narrowing


//13.type 키워드보다 좋은 interface 문법 
 
//interface 문법을 쓰면 object 자료형의 타입을 보다 편리하게 지정 가능
//ex) { color : 'red', width : 100 } 이런 object를 만들고 싶은데 type을 미리 정의하고 싶으면 interface 키워드를 이렇게 만들어봅시다. 

interface Square { 
  color :string, 
  width :number, 
} 

let 네모 :Square = { color : 'red', width : 100 } 

// type alias와 용도와 기능이 똑같다
//특징
//1) 대문자로 작명하고 2) { } 안에 타입을 명시해주면 됩니다. 
//앞으로 object자료 만들 때 interface 만든걸 집어넣으시면 간편하게 타입지정이 가능
 
//13-1.interface 장점은 extends도 가능
//ex)Student interface & Teacher interface가 필요한데 Student는 name 속성이 들어가야하고 Teacher는 name 속성과 age 속성이 들어가야한다면 어떻게 만들까?

interface Student {
  name :string,
}
interface Teacher {
  name :string,
  age :number,
}
// 그런데 안에 중복사항들이 좀 보이는 것 같은데 extends 문법쓰시면 줄일 수 있다.
//extends 문법은 interface 여기에 복사해달라는 뜻 

interface Student {
  name :string,
}
interface Teacher extends Student {
  age :number
}
//Student interface를 extends 해달라고 적으면 Student 안에 있던걸 복사해서 Teacher에 넣어준다. 이제 Teacher 타입은 age, name 속성을 가지고 있다.

//type 키워드와 interface키워드의 차이점

//type alias와 interface는 거의 똑같은 기능을 제공하는데 차이점은 extends 문법이 다르다.


interface Animal { 
  name :string 
} 
interface Cat extends Animal { 
  legs :number 
}
//interface의 경우 일반적으로 이렇게 extends 한다.

type Animal = { 
  name :string 
} 
type Cat = Animal & { legs: number }
//type alias의 경우 extends는 안되고 & 기호를 쓰면 object 두개를 합칠 수 있다. 이러면 Cat 타입은 name, legs 속성을 가질 수 있다.
// interface도 type처럼 & 기호를 이용해도 복사가능함


interface Student {
  name :string,
}
interface Teacher {
  age :number
}

let 변수: Student & Teacher = { name: 'kim', age: 90 }
    
//& 기호 쓰는걸 intersection이라고 부르는데 extends 와 유사하게 사용가능
//주의할점은 extends 쓸 때 타입끼리 중복속성이 발견될 경우 에러가 발생하는데 & 쓰면 때에 따라 아닐 수도 있다.



//타입이름 중복선언시

interface Animal12 { 
  name :string 
} 
interface Animal12 { 
  legs :number 
}
//interface의 경우 타입이름 중복선언을 허용해주며 중복시 extends 한 것이랑 동일하게 동작합니다. 
//즉 Animal 타입은 name, legs 속성을 가질 수 있다.
//장점은 type 선언을 자주 쓰는 외부 라이브러리 이용시 type 선언을 내가 덮어쓰기, override 하기 편리합니다.

type Animal = { 
  name :string 
} 
type Animal = { 
  legs :number 
}
// type의 경우 중복선언을 허용하지 않는다.
//그래서 일반적인 상황에선 type 키워드 자주 활용하면 되는데 다른 사람이 내 코드를 이용하는 상황이 많으면 interface로 유연하게 만드는게 좋다.
//그래서 타입스크립트로 작성된 라이브러리들은 interface로 타입정해놓은 곳이 많습니다. 혹은 object 자료형은 전부 interface로 만들고 다른 자료형은 type 키워드로 만들것도 좋음
//type과 interface 문법을 잘 알고 상황에 따라 쓰자


//extend 할 때 object 안의 속성이 중복될 경우

interface Animal { 
  name :string 
} 
interface Dog extends Animal { 
  name :number 
}
//Animal을 복사해서 Dog interface를 만들었다.=> 근데 name 속성이 중복되서 에러남

interface Animal { 
  name :string 
} 
interface Dog { 
  name :number
} 

let 변수 :Dog & Animal = { name : '멍멍' }
//& 연산자로 Dog, Animal을 합쳤다 => name 속성이 중복되서 에러남
// 즉,interface 말고도 type 키워드도 똑같은 현상이 일어난다.
//(주의)그런데 name : string , name : number 라서 에러가 나는 것이지 둘다 name : string 타입이면 에러가 나지않고 하나로 합쳐줌 


//14.함수에 어떤 파라미터가 몇개 들어올지 미리 정의가 불가능할 때 즉, 3개일지 4개일지 100개일지 모른다면 점3개 ...로 rest 파라미터를 만들어주면 됩니다.

function 전부더하기(...a){
  console.log(a)
}

전부더하기(1,2,3,4,5)
//위와같이 함수 파라미터 작명할 때 점3개 붙여주면 여기엔 파라미터 잔뜩 들어올 수 있습니다~라고 정의할 수 있습니다.
//이런걸 rest 파라미터라고 합니다.
//rest특징 
//1. rest 파라미터는 다른 일반 파라미터 뒤에만 올 수 있습니다. 2.rest 파라미터자리에 집어넣은 값들은 전부 [ ] 안에 담겨있습니다.

// rest 파라미터 타입지정은

function 전부더하기(...a :number[]){
  console.log(a)
}

전부더하기(1,2,3,4,5)
// rest 파라미터는 항상 [ ] 안에 담겨오기 때문에 타입지정도 array처럼 하면 됩니다.


// Spread operator랑 형태는 비슷한데 다릅니다.array 혹은 object 괄호 벗기고 싶을 때 왼쪽에 사용

let arr = [3,4,5];
let arr2 = [1,2, ...arr]
console.log(arr2)
//위와같이 array 혹은 object 왼쪽에 점3개 붙이면 괄호 벗겨주세요~ 라는 뜻입니다. arr2 출력해보면 [1,2,3,4,5]가 나옵니다.
// 종합하면 괄호벗겨주는 ...spread는 array, object 자료 왼쪽에, 여러개의 파라미터를 의미하는 ...rest는 함수선언할 때 소괄호 안에 출몰합니다. 


// 15.Destructuring 문법 개념설명
//:자바스크립트에서 array, object 안에 있는 데이터를 빼서 변수로 만들고 싶을 때 쓰는 문법입니다.

let 사람 = { student : true, age : 20 }
let student = 사람.student;
let age = 사람.age
//원래는 이렇게 작성하는데 새로운 문법이 발생했습니다. Destructuring 이라는 것인데 변수로 빠르고 쉽게 뺄 수 있도록 도와주는 문법입니다. 

let { student123, age123 } = { student123 : true, age123 : 20 }
// 이렇게 쓰면 똑같이 변수로 뺄 수 있습니다. 이걸 destructuring 문법이라고 합니다.

let [a, b] = ['안녕', 100]
//array 자료도 왼쪽오른쪽 똑같아보이게 변수 작성하면 변수로 쉽게 뺄 수 있습니다. 
//단 array특징은 object destructuring할 땐 변수이름을 속성이름과 맞춰주는게 편리하고 array destructuring할 땐 변수이름 맘대로 작명가능합니다. 

//15-2. Destructuring 문법도 함수 파라미터에 사용가능

//변수만들 때 기존 object에 있던 자료를 파라미터로 집어넣고 싶으면 

let person = { student : true, age : 20 }

function 함수(a, b){
  console.log(a, b)
}
함수(person.student, person.age)
//기존에는  object에 있던걸 person.student 이렇게 각각 찝어서 집어넣으면 되는데 destructuring 문법을 사용하면 더 쉽게 사용 가능합니다.

let person = { student : true, age : 20 }

function 함수({student, age}){
  console.log(student, age)
}
함수({ student : true, age : 20 })

//파라미터 변수만들 때 { student, age }라고 쓰면 파라미터로 들어오는 { student : 어쩌구 }는 student 라는 변수에 저장해주세요
//파라미터로 들어오는 { age : 어쩌구 }는 age 라는 변수에 저장해주세요~ 라는 뜻입니다.
//object 자료니까 변수 작명할 때 object 속성명으로 유의해서 작성해야합니다.





