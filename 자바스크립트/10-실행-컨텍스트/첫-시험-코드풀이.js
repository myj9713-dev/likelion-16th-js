

// 2026.1.8 첫 시험 코드 문제
// 함수 표현식 - 매개변수(rate=환율)
// const convertUsdToKrw = function (usd, rate) {
//   // 1. 데이터 정제 -지역변수는 선언된 블록의 실행이 종료되면 메모리에서 즉시 삭제됨 -> 이게 함수 실행 컨텍스트
//   // parseFloat는 '120.50달러'에서 앞부분의 숫자 '120.50'만(실수) 골라내 줍니다.
//   const cleanUsd = parseFloat(usd)
//   const cleanRate = parseFloat(rate)

//   // 2. 계산
//   const result = cleanUsd * cleanRate

//   // 3. 데이터 가공
//   // parseInt는 소수점 이하를 버리고 정수만 남겨줍니다.
//   const finalResult = parseInt(result)

//   // 4. 최종 결과 반환
//   return finalResult + '원'
// }

// 화살표 함수 표현식
const convertUsdToKrw = (usd, rate) => {
  const cleanUsd = parseFloat(usd)
  const cleanRate = parseFloat(rate)

  const result = cleanUsd * cleanRate

  const finalResult = parseInt(result)

  return finalResult + '원'
}

console.log(convertUsdToKrw('120.50달러', '1480원'))
console.log(convertUsdToKrw('120.50', '1480')) 
console.log(convertUsdToKrw('120.50달러', '1480원'))