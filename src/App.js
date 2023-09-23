/* eslint-disable */
import './App.css';
import { useState } from 'react';

function App() {

  // let [글제목1, a] = useState('여자 코트 추천');
  // let [글제목2, b] = useState('강남 우동 맛집');
  // let [글제목3, c] = useState('파이썬독학');

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬독학']);
  let [따봉, 따봉변경] = useState(0);

  // let num = [1,2];
  // let [a, c] = [1,2];

  // let a = num[0];
  // let c = num[1];

  // 왜 state 써야함?
  // 자동재랜더링 때문
  // 언제 state 써야함?
  // 변동시 자동으로 html에 반영되게 만들고 싶으면 state
  // => 자주 변경될거 같은 html 부분은 state로 만들어놓기

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

{/* 응용문제 : 가나다순 정렬버튼과 기능 만들기 */}
      <button onClick={() => {
        let copy = [...글제목];
        copy.sort();
        글제목변경(copy);
      }}>가나다순정렬</button>


      {/* 버튼을 누르면 첫 글 제목이 '여자 코트 추천'으로 바뀌는 기능의 버튼을 만들어봅시다. */}
      <button onClick={() => {
        // 글제목변경(['여자 코트 추천', '강남 우동 맛집', '파이썬독학']);
        // 기존 state가 array/object면 독립적 카피본 만들어서 수정해야함 
        let copy = [...글제목];
        copy[0] = '여자 코트 추천';
        글제목변경(copy);
    }}>글수정</button>




      <div className='list'>
        <h4>{글제목[0]} <span onClick={()=> {따봉변경(따봉 + 1)}}>👍🏻</span> 
        {따봉} </h4>
        <p>2월 17일 발행</p>

      </div>
      <div className='list'>
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>

    {/* 컴포넌트 */}
      <Modal></Modal> 
    </div>
  );
}

function Modal(){
  return (
     <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
     </div>
  )
}

// let Modal = () => {return (<div>안농</div>)}



// 어떤걸 컴포넌트로 만들면 좋을지?
// 1. 반복적인 html 축약할 때
// 2. 큰 페이지들
// 3. 자주 변경되는 것들

export default App;
