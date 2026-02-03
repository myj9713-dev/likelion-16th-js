// --------------------------------------------------------------------------
// 실습: 속성 할당 단축 (Property Shorthand)
// --------------------------------------------------------------------------

// [실습] 변수를 객체 속성으로 빠르게 할당하기
// 1. const title = 'ES6 학습', const level = 'Intermediate' 변수를 선언하세요.
// 2. 단축 구문을 사용하여 두 변수를 속성으로 가진 course 객체를 생성하세요.
// 3. 기존 방식(title: title)과 차이점을 확인해 보세요.
console.groupCollapsed('속성 할당 단축 실습')

function createPremiumUser(name, age, job, location, email, password) {
  // 사용자 생성 (객체 구조)
  const createdUser = {
    grade: 'Premium',
    // 향상된 객체 리터럴
    // 객체 속성 할당 단축 (Property Shorthand)
    name, 
    age, 
    job, 
    email, 
    password,
    address: location,
  }

  return createdUser
}

const userMin = createPremiumUser(
  '박중민',
  22,
  '학생',
  '대전시',
  'jungmin@naver.com',
  'jomkdi@31',
)
const userYoun = createPremiumUser(
  '어수연',
  31,
  '행정복지사',
  '이천시',
  'suyoun@kakao.com',
  'dkcisl!92',
)

const x = 1
const y = 2
// console.log({'x': x, 'y': y})
// console.log({x: x, y: y})
console.log({ x, y })

console.log({ userMin })
console.log({ userYoun })


console.groupEnd()


// --------------------------------------------------------------------------
// 실습: 메서드 단축 (Method Shorthand)
// --------------------------------------------------------------------------

// [실습] 객체 내부 메서드 간결하게 정의하기
// 1. play, pause 메서드를 가진 오디오 플레이어 객체를 만드세요.
// 2. ': function' 키워드를 생략한 단축 구문을 사용하세요.
// 3. 메서드 내부에서 this를 사용하여 객체의 다른 속성에 접근해 보세요.
console.groupCollapsed('메서드 단축 실습')

// 예전(물론, 지금도 사용 가능. 웹은 호환성이 중요)
{
  const memory = {
    // 속성:값 (타입)
    // amount 속성: 값 (숫자)
    amount: 64,
    // getAmount 속성: 값 (함수) <- 함수 값을 가진 속성 = '메서드(method)'
    getAmount: function() {
      console.log({ 'this': this })
      return this.amount + 'GB'
    }
  }

  console.log(memory.getAmount())
}

// 현재 사용하는 방법 (메서드 단축: Method Shorthand)
{
  const memory = {
    amount: 64,
    getAmount() {
      console.log({ 'this': this })
      return this.amount + 'GB'
    }
  }

  console.log(memory.getAmount())
}


// 함수를 객체의 속성으로 할당했을 때 객체의 메서드라 부른다.
{
  // 함수(기능)
  function fly() {}
  function run() {}
  function sleep() {}
  function swimming() {}

  // 객체가 기능을 가지면?
  const bird = { fly, sleep }
  console.log(bird.fly()) // '새.난다()'

  const human = { run, sleep }
  console.log(human.run()) // '사람.달린다()'

  const whale = { swimming, sleep }
  console.log(whale.sleep()) // '고래.잔다()'

}

console.groupEnd()


// --------------------------------------------------------------------------
// 실습: 계산된 속성 이름 (Computed Property Names)
// --------------------------------------------------------------------------

// [실습] 동적 키(Key)를 가진 객체 생성하기
// 1. 변수 prefix = 'user'와 변수 id = 123을 준비하세요.
// 2. 객체 생성 시 대괄호[]를 사용하여 [`${prefix}_${id}`] 형태의 키를 만드세요.
// 3. 해당 키에 '홍길동'이라는 값을 할당하고 결과를 확인하세요.
console.groupCollapsed('계산된 속성 이름 실습')

const prefix = 'user'
const id = 29831
const computedPropKey = `${prefix}-${id}` // 표현식 -> 값

const userHong = {
  // 3. computed property
  ['prefix']: prefix, 
  ['id']: id,
  [computedPropKey]: '홍길동',
  // 2. method shorthand
  // getComputedPropValue: function() {
  getComputedPropValue() {
    return this[computedPropKey]
  },
}

// 1. property shorthand
console.log({ userHong })
console.log(userHong.getComputedPropValue())

console.groupEnd()


// --------------------------------------------------------------------------
// 핵심 요약!
// --------------------------------------------------------------------------
// 1. 속성 단축: 변수명과 속성명이 일치하면 코드가 절반으로 줄어듭니다.
// 2. 메서드 단축: 객체 지향적인 코드를 짤 때 훨씬 깔끔한 문법을 제공합니다.
// 3. 계산된 속성: API 응답 데이터의 키가 유동적이거나, 특정 변수 값에 따라 키를 정해야 할 때 필수적입니다.
// 4. 가독성: 이 세 가지를 적절히 섞어 쓰면 유지보수가 쉬운 현대적인 코드가 완성됩니다.
// --------------------------------------------------------------------------


// 템플릿 리터럴
{
  const data = {
    title: '데이터 타이틀',
    description: '데이터 콘텐츠',
  }

  const template = `템플릿을 사용하면 ${data.title}, ${data.description} 문자열 연결이 편리합니다.`
  console.log(template)
}


// 구조 분해 할당 (객체, 배열)
{
  const house = {
    area: 84, // 제곱미터 (34평)
    location: '서울',
    price: '16억',
  }

  const { area, location, price } = house
  console.log(area)
  console.log(location)
  console.log(price)

  const areas = ['서울', '원주', '광주', '대구', '대전', '부산']

  const [/* 0 */, wonju] = areas
  console.log(wonju)
}

// 전개 구문
{
  const areas = ['서울', '원주', '광주', '대구', '대전', '부산']
  const newAreas = ['춘천', '용인', ...areas, '목포']
  console.log(newAreas)


  const house = {
    area: 84, // 제곱미터 (34평)
    location: '서울',
    price: '16억',
  }

  const myHouse = {
    ...house,
    area: 56,
    price: '14억',
  }

  console.log(myHouse)
}

// 함수의 기본 매개변수, 나머지 매개변수
{
  function drink(what = '워터') {
    return `${what}를 마신다.`
  }

  console.log(drink())
  console.log(drink('코크'))
  console.log(drink('사이다'))
  console.log(drink('마운틴 듀'))

  function logPeopleNames(master, ...members) {
    // console.log(arguments)
    console.log(master)
    console.log(members)

    // for (const member of members) {
    //   console.log(`${master}은 ${member}에게 월세를 받는다.`)
    // }

    members.forEach((member) => {
      console.log(`${master}은 ${member}에게 월세를 받는다.`)
    })
  }

  // 세대주, 세대원
  logPeopleNames('지훈', '영주', '상희', '주연', '후영')
}

// 향상된 객체 리터럴
{
  const area = 84
  const location = '서울'
  const price = '16억'
  const speaking = 'briefing'

  // 속성 할당 단축
  // 메서드 단축
  // 계산된 속성
  const yourHouse = { 
    area, 
    location, 
    price,
    [speaking]() {
      // 구조 분해 할당 (객체의 구조를 분해해 지역 변수로 할당 구문)
      const { location, area, price } = this
      return `${location}에 위치한 ${area} 제곱미터의 ${price} 가격 집에 살고 있어요.`
    },
  }

  console.log(yourHouse)
  // console.log(yourHouse.briefing())
  console.log(yourHouse[speaking]())

}