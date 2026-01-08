// JavaScript 엔진의 역할
// 전역 실행 컨텍스트가 생성되면
// 전역 객체 (Global Object, Window 객체) 만들고
// const window = new Window()
// const globalThis = window
// this 키워드에 연결
// const = window

// console.log(window === globalThis)
// console.log(globalThis)
// console.log(window)
// console.log(this)


// HTML Parser
// .html -> text file

const convertUsdToKrw = function (usd, rate) {
  // 1. 데이터 정제
  // parseFloat는 '120.50달러'에서 앞부분의 숫자 '120.50'만 골라내 줍니다.
  const cleanUsd = parseFloat(usd)
  const cleanRate = parseFloat(rate)

  // 2. 계산
  const result = cleanUsd * cleanRate

  // 3. 데이터 가공
  // parseInt는 소수점 이하를 버리고 정수만 남겨줍니다.
  const finalResult = parseInt(result)

  // 4. 최종 결과 반환
  return finalResult + '원'
}

console.log(convertUsdToKrw('120.50달러', '1480원'))
console.log( convertUsdToKrw('120.50', '1480')) 
console.log( convertUsdToKrw('120.50달러', '1480원'))