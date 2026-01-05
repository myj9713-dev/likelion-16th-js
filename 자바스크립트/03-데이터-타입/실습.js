// --------------------------------------------------------------------------
// 실습: 데이터 타입
// --------------------------------------------------------------------------
// * 기본 타입 (Primitive Types)
//   - String (문자): 텍스트 데이터
//   - Number (숫자): 실수 또는 정수, 소수 데이터
//   - Boolean (논리): true 또는 false
//   - Null (널): 의도적으로 비어있는 값
//   - Undefined (언디파인드): 값이 할당되지 않음
//   - Symbol (심볼): 고유한 식별자
//   - BigInt (빅인트): 매우 큰 정수
// * 참조 타입 (Reference Types)
//   - Object (객체): 키-값 쌍의 집합
//   - Array (배열): 여러 값의 목록
//   - Function (함수): 실행 가능한 코드 블록
// --------------------------------------------------------------------------


// --------------------------------------------------------------------------
// 문자 (String)
// --------------------------------------------------------------------------

// 작은따옴표로 문자열 생성
const 작은_따옴표 = '작은 따옴표' //따옴표 쌍이 일치하지 않을 경우: error: Unterminated string literal

// 큰따옴표로 문자열 생성
const 큰_따옴표 = "큰 따옴표"

// 역따옴표로 문자열 생성
const 역따옴표 = `역따옴표`

// 문자열 안에 따옴표 사용
let greetingMessage = 'i\'m fine.'
greetingMessage = "i'm Fine."
greetingMessage = `i'm Fine.`
let recordTime = '5\' 32"'
recordTime = "5' 32\""
recordTime = `5' 32"`


// 이스케이프 문자
// * \n - new line
let escapeString = '줄바꿈\n문자'
console.log(escapeString)

// * \t - tab
console.log('탭\t문자')
console.log('탭\t\t문자')
console.log('탭\t\t\t문자')
console.log('줄바꿈\n\t탭')
console.log('백슬래시(\\)')

// 문자 + 문자 (문자 연결)
const materialType = '아이언'
const heroGender = '맨'
const hero = materialType + heroGender
console.log(hero) // '아이언' + '맨' = '아이언맨'
console.log('Java' + 'Script') // 'Java' + 'Script' = 'JavaScript'


// --------------------------------------------------------------------------
// 숫자 (Number)
// --------------------------------------------------------------------------

// 정수
//console.log(92034)
console.log(92_034)  //가독성을 위해 천단위마다 언더스코어_ 사용 가능

// 실수 (정수 + 소수)
console.log(823 + 0.73)

// 음수
console.log(-100)

// 과학적 표기법
// 2.5 × 10^6 = 2,500,000
console.log(25e5) // 25 × 10^5
console.log(2.5e6) // 2.5 × 10^6

// 특수 숫자 값
// * Infinity
// * -Infinity (-1 * Infinity)
// * NaN (Not a Number)

//JavaScript에서 안전하게 사용 가능한 큰/작은 정수
// * NUMBER.MAX_SAFE_INTEGER
// * NUMBER.MIN_SAFE_INTEGER
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)


// 수학 산술 연산자 (+, -, ×, ÷)
// 프로그래밍 산술 연산자 (+, -, *, /)
// 산술 연산 (숫자 값 끼리 계산)
// * 덧셈(add) 연산
console.log(9 + 1) // 10
console.log(100 + 20) // 120
console.log(0.9 + 0.2) // 1.1
// * 뺄셈(subtract) 연산
console.log(9 - 1) // 8
console.log(100 - 20) // 80
console.log(0.9 - 0.2) // 0.7
// * 곱셈(multiply) 연산
console.log(9 * 1) // 9
console.log(100 * 20) // 2e3 (2000, 2_000)
console.log(0.9 * 0.2) // 0.18000000000000002
// * 나눗셈(divide) 연산
console.log(9 / 1) // 9
console.log(100 / 20) // 5
console.log(0.9 / 0.2) // 4.5
// * 나머지(modulus) 연산
console.log(9 % 3) // 0
console.log(100 % 20) // 0
console.log(31 % 5) // 1

// --------------------------------------------------------------------------
// 불리언 (Boolean)
// --------------------------------------------------------------------------

// true 값
console.log(true)
console.log(3 == '3') // 비교 연산자 -> bullean

// false 값
console.log(false)
console.log(3 === '3') // 비교 연산자 -> bullean


// --------------------------------------------------------------------------
// 언디파인드 (Undefined)
// --------------------------------------------------------------------------

// 선언만 하고 값을 할당하지 않음
// 1. 선언 ✅
// 2. 초기화: 의도적으로 값을 할당하지 않음 (엔진이 초기값으로 undefined 할당)
let memoryStick

console.log(memoryStick) // undefined


// --------------------------------------------------------------------------
// 널 (Null)
// --------------------------------------------------------------------------

// null 값 - 의도적으로 비어있음
// 예시:
// * 선택된 인덱스 (인덱스는 0부터 시작)
let selextedIndex = null// 개발자가 의도를 가지고 값을 비운 경우를 나타냄
console.log(selextedIndex)
selextedIndex = 3 // 4번째 박스가 선택됨 (상태)
console.log(selextedIndex)
selextedIndex = 1 // 2번째 박스가 선택됨 (상태: 시간의 흐름에 따라 변경된 값)
console.log(selextedIndex)

// * 로그인 사용자
let loginUser = null // 로그인된 사용자가 없다. (의도를 가지고 비움)
console.log('로그인 사용자:', loginUser)
// 로그인 시도 (HTML Form)
// 로그인 성공
loginUser = '유정'
console.log('로그인 사용자:', loginUser)
// 로그아웃
loginUser = null //로그인 사용자가 없다. (상태 변경)
console.log('로그인 사용자:', loginUser)


// --------------------------------------------------------------------------
// 심볼 (Symbol)
// --------------------------------------------------------------------------

//문자열의 경우, 같은 키(key) 값인 경우 동일한 값이다.
const productAIdString = 'abc', 
      productBIdString = 'abc'

// 심볼 생성 - 항상 고유한 값
//심볼의 경우, 같은 키(key)값을 사용해도 각각 고유한 값이다.
const productAISybol = Symbol('abc'), 
      productBISybol = Symbol('abc')

// 고유한 값인가? (조건: productAId와 productBId가 값이 달라야 한다.)
// 비교 연산자 (두 값을 비교 -> 불리언 값 평가)
// 두 값이 같다. true 불리언 평가(고유하지 않다.)
console.log('문자열을 사용할 때 고유하지 않다?', productAIdString == productBIdString) // ture
// 두 값이 다르다. false 불리언 평가(고유하다.)
console.log('심볼을 사용할 때 고유하지 않다?', productAISybol == productBISybol) // false


// --------------------------------------------------------------------------
// 빅인트 (BigInt)
// --------------------------------------------------------------------------

// 일반 숫자의 한계
// * Number.MAX_SAFE_INTEGER (9007199254740991)
// * +1 한계 초과 : 9007199254740992
// * +2 정확하지 않음 : ⚠️ 9007199254740993

// BigInt 생성 - 숫자 뒤에 n 붙이기
const bigInteral = 1000n
console.log(bigInteral)

// BigInt() 사용 : 숫자 값 -> 빅인트(큰 정수) 변환
const bigInt = BigInt(1000) //1000n
console.log(bigInt)

// BigInt와 Number는 섞을 수 없음
// ❌ 숫자와 빅인트를 더할 경우 에러!
// console.log(1000 + 100n) //❌TypeError: Invalid mix of BigInt and other type in addition.

// ✅ 빅인트끼리 더할 경우 가능
console.log(BigInt(1000)/* 1000n */ + 100n)


// --------------------------------------------------------------------------
// 참조 타입 (Reference Types)
// --------------------------------------------------------------------------

// 함수 (기능, 작업 정의)
function 커피_만들기(원두, 물, 얼음) {
// 절차
// 1. 원두 갈기
console.log('원두 갈기')
// 2. 물 끓이기
console.log('물 끓이기')
// 3. 커피 추출
console.log('커피 추출')
// 4. 커피 제조
console.log('커피 제조')
// 5. 완성된 커피 내보내기
console.log('완성된 커피 내보내기')
}

// 기능 사용 (실행, 호출)
console.log(커피_만들기('케냐', '뜨거운 물', true)) // 얼음이 있냐 -> ture, 없냐 -> false

// 객체
const 커피_메뉴 = {
  이름: '아인슈페너',
  가격: 6_700,
  용량: 'Large',
  핫음료: true,
  재료: ['에스프레소', '물', '크림'],
  만든이: '유정'
}

console.log(커피_메뉴)

// 배열
const 장바구니 = [
  '우유',
  '김',
  '치즈',
  '라면',
  '빵',
  '아이스크림'
]

console.log(장바구니)

// --------------------------------------------------------------------------
// typeof 연산자
// * 데이터 유형(type of data)
// * typeof 연산자는 데이터의 타입을 확인할 때 사용
// * typeof 데이터(값) 또는 표현식 ->타입(유형)값 (문자열 제공)
// * typeof '우리는' + '하나!' -> 'string' + '하나!' -> 'string하나!' (연산자 우선 순위:typeof 연산자가 더하기(+) 연산자보다 더 쎄서, + 연산보다 typeof가 먼저 실행)
// --------------------------------------------------------------------------

// 기본 타입 (Primitive Types)
console.group('기본 타입-----------')
// * null
console.log(typeof null) // ⚠️'object'
// * undefined
console.log(typeof undefined) // 'undefined'
// * String
console.log(typeof '데이터 타입을 문자 값으로 알려줌') // 'string'
// * Number
console.log(typeof 20260105) // 'number'
// * Boolean
console.log(typeof false) // 'boolean'
// * BigInt
console.log(typeof 900n) // 'bigint'
// * Symbol
console.log(typeof Symbol('yj')) // 'symbol'
console.groupEnd()

// 참조 타입
console.group('객체 타입-----------') 
// * Object
console.log(typeof {}) // 'object'
// * Array
console.log(typeof []) // 'object'
// * Function
console.log(typeof function() {}) // 'function'
console.groupEnd()