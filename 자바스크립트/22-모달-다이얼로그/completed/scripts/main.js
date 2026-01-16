// 고민의 흔적....
// const ACTIVE_CLASS = 'modal-is-open'

// const body = document.body
// // console.log(body)
// const modalOverlay = document.querySelector('.modal-overlay')
// const modalOpenButton = document.querySelector('.wrap')
// // console.log(modalOverlay)
// // console.log(modalOpenButton)

// modalOpenButton.addEventListener('click', () => {
//   body.classList.toggle(ACTIVE_CLASS)
// })





// 활성 클래스 상수 정의
const ACTIVE_CLASS = 'modal-dialog-is-open'

// 활성 클래스를 적용할 상위 요소 참조
const body = document.body

// 문서에서 제어할  컨테이너 요소 참조
const wrap = body.querySelector('.wrap')
// 컨테이너 내부에서 이벤트 리스너를 연결할 버튼 요소 참조
const modalOpenButton = wrap.querySelector('[aria-label*="열기"]')
const modalOverlay = body.querySelector('.modal-overlay')
const modalCloseButton = modalOverlay.querySelector('[aria-label*="닫기"]')

// 모달 다이얼로그를 여는 버튼에 클릭 이벤트 리스너 추가
modalOpenButton.addEventListener('click', handleOpenModal)
// 모달 다이얼로그를 닫는 버튼에 클릭 이벤트 리스너 추가
modalCloseButton.addEventListener('click', handleCloseModal)

// [이벤트 핸들러] 모달 다이얼로그 열기
function handleOpenModal () {
  // body 변수에 참조된 객체에 활성 클래스 추가
  body.classList.add(ACTIVE_CLASS)
  }

// [이벤트 핸들러] 모달 다이얼로그 닫기
function handleCloseModal () {
  // body 변수에 참조된 객체에 활성 클래스 추가
  body.classList.remove(ACTIVE_CLASS)
  }