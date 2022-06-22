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